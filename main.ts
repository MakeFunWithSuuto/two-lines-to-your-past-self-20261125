// Two Lines to Your Past Self — writes the chosen two lines to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  'In March, when your knee pops on the wet Elm Street basement stairs with the washer, don\'t wave Carl off and say, "I\'ve got it."';
const line2 =
  "Those last four steps tear the meniscus all the way through, and twelve years later you still pause at every landing waiting on your left leg.";

const entry = `${line1}\n${line2}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
