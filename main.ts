// Worst Fix Ever: Funniest Commit Message
// Writes one commit-message line (<=100 chars) to /output/entry.txt.
// The fix: users kept crashing checkout, so checkout was deleted entirely.
// Zero crashes since — because there is nothing left to crash.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "fix: users kept crashing checkout, so I deleted checkout — zero crashes since";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`Wrote ${line.length} characters to /output/entry.txt`);
