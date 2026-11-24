// Two Lines to Your Past Self — writes the chosen two lines to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line1 =
  'On the back porch in July, when Sam slides her notebook across the table, don\'t smirk and ask, "Who\'s going to read this?"';
const line2 =
  "She shuts it before your laugh even lands, burns the pages in the grill that night, and never lets you\u2014or anyone else\u2014read a word of hers again.";

const entry = `${line1}\n${line2}`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
