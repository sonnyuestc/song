import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the ZYRO product homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>ZYRO｜Wireless Imaging &amp; Data Link<\/title>/i);
  assert.match(html, /ZYRO AIR/);
  assert.match(html, /多元无线视觉新装备/);
  assert.match(html, /4K、90 fps 与 Mbps/);
  assert.match(html, /song_uestc@126\.com/);
});

test("server-renders the weekly video bitrate article", async () => {
  const response = await render("/articles/video-bitrate");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /高清视频回传为什么不能只看分辨率/);
  assert.match(html, /video-factor-grid/);
  assert.match(html, /throughput-bar/);
  assert.match(html, /ZYRO Air/);
  assert.match(html, /ITU-T Recommendation H\.265/);
});
