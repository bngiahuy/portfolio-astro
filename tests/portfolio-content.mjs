import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [english, vietnamese] = await Promise.all([
  readFile(new URL("../dist/index.html", import.meta.url), "utf8"),
  readFile(new URL("../dist/vi/index.html", import.meta.url), "utf8"),
]);

assert.match(english, /<html lang="en"/);
assert.match(vietnamese, /<html lang="vi"/);
assert.match(english, /20 FPS/);
assert.match(vietnamese, /20 FPS/);
assert.match(english, /accuracy (?:&gt;|above) 92%/);
assert.match(vietnamese, /độ chính xác (?:&gt;|trên) 92%/i);
assert.match(english, /hpt-smarttrak-nen-tang-thi-giac-ai/);
assert.match(vietnamese, /hpt-smarttrak-nen-tang-thi-giac-ai/);
assert.match(english, /href="\/vi\/"/);
assert.match(vietnamese, /href="\/"/);
assert.match(english, /href="\/bui-nguyen-gia-huy-resume\.pdf"/);
assert.match(vietnamese, /href="\/bui-nguyen-gia-huy-resume\.pdf"/);
assert.match(english, /Hello! 👋/);
assert.match(english, /id="programming-symbols"/);
assert.match(english, /About Me/);
assert.match(vietnamese, /Xin chào! 👋/);
assert.match(vietnamese, /id="programming-symbols"/);
assert.doesNotMatch(english, /class="proof-grid"/);

console.log("Portfolio content checks passed for English and Vietnamese pages.");
