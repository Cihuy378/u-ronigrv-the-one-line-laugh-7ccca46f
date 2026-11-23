// The One-Line Laugh — writes our one-liner to /output/entry.txt.
// Deterministic: the line lives in entry.txt next to this file and is
// copied byte for byte, so every run produces identical output.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

mkdirSync("/output", { recursive: true });
copyFileSync(join(here, "entry.txt"), "/output/entry.txt");
