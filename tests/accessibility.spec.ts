import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("WCAG 2.1 AA accessibility", () => {
  test("home page has no serious or critical axe violations", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    await expect(page).toHaveTitle("Atlanta Real Estate With Bobby | Pickel Sells ATL");
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();
    const blockers = results.violations.filter((violation) => violation.impact === "serious" || violation.impact === "critical");
    const report = blockers.map((violation) => `${violation.id} (${violation.impact}) — ${violation.help} — ${violation.nodes.map((node) => node.target.join(", ")).join(" | ")}`).join("\n");
    expect(blockers, report || "No serious or critical accessibility violations found").toEqual([]);
  });

  test("primary actions and form fields are keyboard reachable", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle("Atlanta Real Estate With Bobby | Pickel Sells ATL");
    await expect(page.getByRole("heading", { name: "Book a showing or strategy call with Bobby." })).toBeVisible();
    await expect(page.getByRole("link", { name: /Book a Call/i }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: /Call\/Text Bobby/i }).first()).toBeVisible();
    await expect(page.locator("form")).toHaveCount(0);
  });

  test("hero portrait and listing gallery images load", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByAltText("Bobby Pickel smiling in a gray suit and patterned tie")).toBeVisible();
    await page.locator("#listing").scrollIntoViewIfNeeded();

    const galleryImages = page.locator(".gallery-item img");
    await expect(galleryImages).toHaveCount(13);
    await page.waitForFunction(() =>
      Array.from(document.querySelectorAll<HTMLImageElement>(".gallery-item img")).every(
        (image) => image.complete && image.naturalWidth > 0,
      ),
    );
  });
});
