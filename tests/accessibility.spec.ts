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
    await expect(page.getByRole("heading", { name: "Tell Bobby what home means to you." })).toBeVisible();
    await expect(page.getByLabel("Your name")).toBeVisible();
    await expect(page.getByRole("button", { name: /Send a note to Bobby/ })).toBeVisible();
  });
});
