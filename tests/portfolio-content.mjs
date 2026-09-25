import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const [english, vietnamese] = await Promise.all([
  readFile(new URL("../dist/index.html", import.meta.url), "utf8"),
  readFile(new URL("../dist/vi/index.html", import.meta.url), "utf8"),
]);

assert.match(english, /<html lang="en"/);
assert.match(vietnamese, /<html lang="vi"/);
assert.match(english, /I build AI systems that have to survive outside the notebook\./);
assert.match(vietnamese, /Tôi xây dựng các hệ thống AI phải hoạt động được ngoài môi trường notebook\./);
assert.match(english, /15 FPS/);
assert.match(vietnamese, /15 FPS/);
assert.doesNotMatch(english, /20 FPS|accuracy (?:&gt;|above) 92%|recall (?:&gt;|above) 90%/i);
assert.doesNotMatch(vietnamese, /20 FPS|độ chính xác (?:&gt;|trên) 92%|recall (?:&gt;|trên) 90%/i);
assert.match(english, /2020–2024/);
assert.match(vietnamese, /2020–2024/);
assert.doesNotMatch(english, /2020–2025/);
assert.doesNotMatch(vietnamese, /2020–2025/);
assert.equal([...english.matchAll(/<h1\b/g)].length, 1);
assert.equal([...vietnamese.matchAll(/<h1\b/g)].length, 1);
assert.match(english, /hpt-smarttrak-nen-tang-thi-giac-ai/);
assert.match(vietnamese, /hpt-smarttrak-nen-tang-thi-giac-ai/);
assert.ok(english.includes('href="/vi/"'));
assert.ok(vietnamese.includes('href="/"'));
assert.ok(english.includes('href="/bui-nguyen-gia-huy-resume.pdf"'));
assert.ok(vietnamese.includes('href="/bui-nguyen-gia-huy-resume.pdf"'));
assert.match(english, /id="programming-symbols"/);
assert.match(vietnamese, /id="programming-symbols"/);

const stylesheetHref = english.match(/<link rel="stylesheet" href="([^"]+)"/)?.[1];
assert.ok(stylesheetHref, "built stylesheet link exists");
const stylesheet = await readFile(new URL("../dist" + stylesheetHref, import.meta.url), "utf8");
const smartTrakHeading = english.indexOf("HPT SmartTrak");
const smartTrakStart = english.lastIndexOf("<article", smartTrakHeading);
const smartTrakEnd = english.indexOf("</article>", smartTrakStart);
assert.ok(smartTrakStart >= 0 && smartTrakEnd > smartTrakStart, "SmartTrak project card exists");
const smartTrakCard = english.slice(smartTrakStart, smartTrakEnd);
assert.match(smartTrakCard, /class="flex flex-col gap-4"/, "project header stacks its description and external link");
assert.match(stylesheet, /section\[id\]\{scroll-margin-top:7rem\}/, "section anchor offset is global and clears mobile navigation");

console.log("Portfolio content and layout checks passed for English and Vietnamese pages.");
