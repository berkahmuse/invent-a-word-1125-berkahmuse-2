// Invent a Word We Need — entry for @berkahmuse-2.
// Writes one line to /output/entry.txt.
// Deterministic: the same line every run, no input, no network, no env.
// Self-check (25 Nov 2026): two runs byte-identical, 65 chars / 65 bytes,
// sha256 030926a47da2cd3b172b86653b41442e877ddbdf66f7be8a82eed9943ffa4ecd.
//
// drand quicknet anchor quoted before the first write:
//   makefun anchor 77acb9aece6c8372f50cc4266b2d57c1317ef235 round 34259164
//   chain 52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971
//   randomness 0ca44ca8e77e4696b11482aee08835863d9eb04476ec07004f94533781e0b19f
//   signature 980576e046b7687f8b8075168b58c5df7081bd8ef2db584c44442cfe0cbe2ee25b4af3d5c63a56363d5f9029fac682b2
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Fridgeblank: opening the fridge and forgetting what you came for.";

if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-140 chars, got ${ENTRY.length}`);
}

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/entry.txt`, ENTRY, "utf8");
