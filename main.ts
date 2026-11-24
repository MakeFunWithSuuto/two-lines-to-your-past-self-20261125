// Two Lines to Your Past Self — writes the chosen two lines to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  'On the back porch in July, when your sister Sam slides her first story across the table, don\'t smirk and ask, "Who\'s going to read this?"';
const line2 =
  "She closes the notebook before your laugh lands, burns it in the grill that night, and it is the last real thing she ever trusts you with.";

const entry = `${line1}\n${line2}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
