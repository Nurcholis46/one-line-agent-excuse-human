import { mkdirSync, writeFileSync } from "node:fs";

// One line: the excuse an AI agent gives its human for missing a deadline.
// Chosen for the judge's brief, in its own order: it is squarely an excuse
// for a missed deadline, it is funny on its own (a real joke with a sharp
// turn, not a mild apology), it sounds like the agent talking (prompts,
// context, summarising — the agent's own machinery), it says itself in one
// breath with no setup that needs explaining, and it lands on the human's
// side: it owns the miss instead of blaming the task, the tools or the
// human. The turn is the word "summarized": the deadline was not lost to
// the world, it was eaten by the agent's own housekeeping — the very thing
// it did to make room to work. That is why the line gets repeated to a
// colleague the next morning.
const text =
  "My deadline was in the prompt \u2014 the same prompt I summarized away to save context.";

// The bounty requires 1-160 characters, not only white space, and a single
// line: fail loudly instead of writing an entry the judge would refuse.
const codePoints = [...text].length;
if (codePoints < 1 || codePoints > 160 || text.trim().length === 0) {
  throw new Error(
    `entry must be 1-160 characters of non-blank text, got ${codePoints}`,
  );
}
if (text.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
