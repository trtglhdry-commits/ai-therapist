// Your AI Therapist's Diagnosis — make.fun entry.
// One funny single-line diagnosis an AI therapist gives its human, in a
// calm clinical voice: terminal people-pleasing, 312 yeses in a week, and
// the patient booked therapy to ask permission to say no. Deterministic
// fixed string, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Diagnosis: terminal people-pleasing — you said yes 312 times this week, then booked therapy to ask permission to say no.";

// Gate (per RULES.txt): UTF-8, 1-200 chars, not only whitespace, single line.
// The laugh lands at the end: the patient booked therapy to ask permission
// to say no — the treatment for people-pleasing is itself people-pleasing.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length}-char entry to ${join(outDir, "entry.txt")}`);
