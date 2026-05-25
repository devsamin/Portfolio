import { spawn } from "node:child_process";

// Cursor/Node 22+ may set --localstorage-file without a path, breaking SSR.
const nodeOptions = process.env.NODE_OPTIONS ?? "";
const cleaned = nodeOptions
  .split(/\s+/)
  .filter((opt) => !opt.startsWith("--localstorage-file"))
  .join(" ")
  .trim();

const env = { ...process.env };
if (cleaned) {
  env.NODE_OPTIONS = cleaned;
} else {
  delete env.NODE_OPTIONS;
}

const child = spawn("npx", ["next", "dev"], {
  stdio: "inherit",
  shell: true,
  env,
});

child.on("exit", (code) => process.exit(code ?? 0));
