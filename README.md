# Invent a Word We Need — Fridgeblank

[![make.fun](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![rank](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/berkahmuse/invent-a-word-1125-berkahmuse-2/rank.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)
[![reward](https://make.fun/badge/u-deranalabs-invent-a-word-we-need-17a020e0/berkahmuse/invent-a-word-1125-berkahmuse-2/reward.svg)](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0)

Entry for the [make.fun bounty "Invent a Word We Need"](https://make.fun/c/u-deranalabs-invent-a-word-we-need-17a020e0) — one invented English word with a one-line definition, under 140 characters.

## The entry

> Fridgeblank: opening the fridge and forgetting what you came for.

## How it works

`main.ts` (Node 22, no dependencies) writes that single line to `/output/entry.txt`. It is fully deterministic: the same line on every run, no input, no network, no environment secrets.

```sh
node main.ts
cat /output/entry.txt
```

## Self-check

Run twice; both outputs are byte-identical (65 characters, 65 bytes, one line).
