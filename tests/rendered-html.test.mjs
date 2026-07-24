import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the Next.js page experience intact", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  assert.match(page, /Buy or sell a home with someone who knows the way home/);
  assert.match(page, /Book a showing or strategy call with Bobby/);
  assert.match(page, /Call\/Text Bobby/);
  assert.match(page, /Skip to main content/);
  assert.doesNotMatch(page, /<form/);
  assert.doesNotMatch(page, /contact-form/);
});

test("keeps page metadata and accessibility hooks present", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(layout, /lang="en"/);
  assert.match(layout, /RealEstateAgent/);
  assert.match(layout, /FAQPage/);
  assert.match(page, /StickyContactBar/);
  assert.match(page, /bobbyPhoneHref/);
  assert.match(layout, /\/bobby\.png/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /focus-visible/);
});
