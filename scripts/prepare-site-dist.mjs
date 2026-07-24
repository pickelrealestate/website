import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const exportDir = path.join(projectRoot, "out");
const distDir = path.join(projectRoot, "dist");
const clientDir = path.join(distDir, "client");
const serverDir = path.join(distDir, "server");

await rm(distDir, { recursive: true, force: true });
await mkdir(clientDir, { recursive: true });
await mkdir(serverDir, { recursive: true });
await cp(exportDir, clientDir, { recursive: true });

await writeFile(
  path.join(serverDir, "index.js"),
  `const handler = {\n  async fetch(request, env) {\n    return env.ASSETS.fetch(request);\n  },\n};\n\nexport default handler;\n`,
);

await writeFile(
  path.join(serverDir, "wrangler.json"),
  JSON.stringify(
    {
      main: "server/index.js",
      compatibility_date: "2024-09-23",
      compatibility_flags: ["nodejs_compat"],
      assets: { directory: "client", binding: "ASSETS" },
    },
    null,
    2,
  ) + "\n",
);

console.log(`Prepared static Next.js export in ${distDir}`);
