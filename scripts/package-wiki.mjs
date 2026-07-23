import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = process.cwd();
const basePath = process.argv[2] ?? "/wiki";
const outputName = process.argv[3] ?? "zyro-wiki-upload";
const contentDirectory = process.argv[4] ?? "wiki";
const siteOrigin = process.argv[5] ?? "https://www.zyrolink.cn";
const outputRoot = path.join(projectRoot, "outputs", outputName);
const siteRoot = contentDirectory === "." ? outputRoot : path.join(outputRoot, contentDirectory);
const clientRoot = path.join(projectRoot, "dist", "client");
const workerUrl = pathToFileURL(path.join(projectRoot, "dist", "server", "index.js"));
workerUrl.searchParams.set("package", `${process.pid}-${Date.now()}`);

if (!outputRoot.startsWith(path.join(projectRoot, "outputs") + path.sep)) {
  throw new Error("Refusing to replace a package directory outside outputs.");
}
if (!/^\/[a-zA-Z0-9_-]+$/.test(basePath) || !/^[a-zA-Z0-9._-]+$/.test(outputName)) {
  throw new Error("Invalid static package arguments.");
}

await rm(outputRoot, { recursive: true, force: true });
await mkdir(siteRoot, { recursive: true });
await cp(clientRoot, siteRoot, { recursive: true });

const { default: worker } = await import(workerUrl.href);
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const context = { waitUntil() {}, passThroughOnException() {} };
const routes = [
  [`${basePath}/`, "index.html"],
  [`${basePath}/articles/latency/`, "articles/latency/index.html"],
  [`${basePath}/articles/link-budget/`, "articles/link-budget/index.html"],
  [`${basePath}/articles/mesh-networking/`, "articles/mesh-networking/index.html"],
  [`${basePath}/articles/thermal-imaging/`, "articles/thermal-imaging/index.html"],
  [`${basePath}/articles/video-bitrate/`, "articles/video-bitrate/index.html"],
];

for (const [route, relativeFile] of routes) {
  const response = await worker.fetch(
    new Request(`${siteOrigin}${route}`, { headers: { accept: "text/html" } }),
    env,
    context,
  );
  if (!response.ok) throw new Error(`Failed to render ${route}: HTTP ${response.status}`);
  const target = path.join(siteRoot, relativeFile);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, await response.text(), "utf8");
}

const nginx = `# Add these blocks inside the existing server { ... } for www.zyrolink.cn
location = /wiki {
    return 301 /wiki/;
}

location /wiki/ {
    root /var/www/zyro-wiki;
    index index.html;
    try_files $uri $uri/ $uri/index.html =404;
}
`;

const instructions = `ZYRO Wiki 手动部署包

目标网址：https://www.zyrolink.cn/wiki/

1. 将本压缩包上传到服务器并解压。
2. 把解压后的 wiki 文件夹放到：/var/www/zyro-wiki/wiki
   最终应存在：/var/www/zyro-wiki/wiki/index.html
3. 先备份现有 Nginx 配置，再将 nginx-wiki.conf 中的两个 location 段加入
   www.zyrolink.cn 当前 server 配置块；不要替换原来的首页配置。
4. 检查并重载：
   sudo nginx -t
   sudo systemctl reload nginx
5. 打开 https://www.zyrolink.cn/wiki/ 验证首页、文章、图片和 PDF 下载。

如服务器实际使用 Apache/Caddy，保留 wiki 文件夹结构，将 /wiki/ 映射到该目录即可。
`;

if (basePath === "/wiki") {
  await writeFile(path.join(outputRoot, "nginx-wiki.conf"), nginx, "utf8");
  await writeFile(path.join(outputRoot, "README-部署说明.txt"), instructions, "utf8");
} else {
  await writeFile(path.join(siteRoot, ".nojekyll"), "", "utf8");
}

const homepage = await readFile(path.join(siteRoot, "index.html"), "utf8");
if (
  !homepage.includes(`${basePath}/assets/`) ||
  !homepage.includes(`${basePath}/articles/latency`) ||
  !homepage.includes(`${basePath}/articles/video-bitrate`)
) {
  throw new Error(`Rendered homepage does not contain the expected ${basePath}/ paths.`);
}

console.log(outputRoot);
