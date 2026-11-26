import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "I asked the judge to laugh in one line. The judge replied with my entire search history and said: 'You first.'";
const outputDirectory = new URL(
  `${process.env.MAKEFUN_OUTPUT_DIR || "/output"}/`,
  import.meta.url,
);
const entryFile = new URL("entry.txt", outputDirectory);

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(entryFile, `${line}\n`, "utf8");

const characterCount = readFileSync(entryFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `Entry must contain 1–200 characters after trimming; got ${characterCount}.`,
  );
}
