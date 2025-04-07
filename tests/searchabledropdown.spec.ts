import { test, expect } from "@playwright/test";

//Code from a previous project where I use playwright as example
/*test("logos render", async ({ page, viewport }) => {
  await page.goto("http://localhost:3000/");

  if (viewport?.width && viewport?.width <= 768) {
    await page.getByTestId("hamburger-menu").click();

    await expect(page.getByTestId("logo-mobile")).toBeVisible();
  } else {
    await expect(page.getByAltText("logo").first()).toBeVisible();
  }
});*/

test("Render the component", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.locator(".dropdown")).toBeVisible();
});

test("Open the dropdown", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator(".selected").click();
  await expect(page.getByRole("listbox")).toBeVisible();
});

test("Select an option", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await page.locator(".selected").click();
  await page.getByRole("option", { name: "Apple" }).click();
  await expect(page.locator(".selected")).toHaveText("Apple");
});
