import { Page } from '@playwright/test';

/**
 * Common utility functions for test automation
 */

/**
 * Wait for an element and return it
 */
export async function waitForElement(
  page: Page,
  selector: string,
  timeout: number = 5000
): Promise<boolean> {
  try {
    await page.waitForSelector(selector, { timeout });
    return true;
  } catch {
    return false;
  }
}

/**
 * Click an element if it exists and is visible
 */
export async function clickIfExists(page: Page, selector: string): Promise<boolean> {
  try {
    const element = page.locator(selector);
    if (await element.isVisible()) {
      await element.click();
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

/**
 * Get text from an element if it exists
 */
export async function getTextIfExists(page: Page, selector: string): Promise<string | null> {
  try {
    const element = page.locator(selector);
    if (await element.isVisible()) {
      return await element.textContent();
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Fill input field with clear
 */
export async function fillInputField(page: Page, selector: string, value: string): Promise<void> {
  const input = page.locator(selector);
  await input.clear();
  await input.fill(value);
}

/**
 * Wait for text to appear on page
 */
export async function waitForText(
  page: Page,
  text: string,
  timeout: number = 5000
): Promise<boolean> {
  try {
    await page.waitForFunction(
      (searchText) => document.body.innerText.includes(searchText),
      text,
      { timeout }
    );
    return true;
  } catch {
    return false;
  }
}

/**
 * Reload page and wait for load
 */
export async function reloadPage(page: Page): Promise<void> {
  await page.reload();
  await page.waitForLoadState('networkidle').catch(() => {
    // Network idle might not occur
  });
}

/**
 * Take a screenshot for debugging
 */
export async function takeDebugScreenshot(page: Page, name: string): Promise<void> {
  const timestamp = new Date().getTime();
  await page.screenshot({ path: `./test-results/${name}-${timestamp}.png` });
}

/**
 * Get all text contents from multiple elements
 */
export async function getAllTextContents(page: Page, selector: string): Promise<string[]> {
  return await page.locator(selector).allTextContents();
}

/**
 * Check if element has a specific class
 */
export async function hasClass(page: Page, selector: string, className: string): Promise<boolean> {
  try {
    return await page.locator(selector).evaluate(
      (el, cls) => el.classList.contains(cls),
      className
    );
  } catch {
    return false;
  }
}

/**
 * Get attribute value
 */
export async function getAttribute(page: Page, selector: string, attribute: string): Promise<string | null> {
  try {
    return await page.locator(selector).getAttribute(attribute);
  } catch {
    return null;
  }
}

/**
 * Wait for URL to match pattern
 */
export async function waitForUrlMatch(page: Page, urlPattern: string | RegExp): Promise<void> {
  await page.waitForURL(urlPattern);
}
