import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const cliPath = fileURLToPath(new URL("../node_modules/vinext/dist/cli.js", import.meta.url));
const result = spawnSync(process.execPath, [cliPath, "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    WRANGLER_LOG_PATH: ".wrangler/wrangler.log",
    ZYRO_STATIC_WIKI: "1",
    NEXT_PUBLIC_SITE_BASE_PATH: "/wiki",
  },
});

process.exit(result.status ?? 1);
