# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
npx playwright install
```

### 2. Configure Your Application URL
Edit `playwright.config.ts` and update the `baseURL`:
```typescript
use: {
  baseURL: 'http://your-application-url.com',
}
```

### 3. Run Tests
```bash
npm test
```

### 4. View Results
```bash
npx playwright show-report
```

---

## 📚 Project Structure Quick Reference

- **src/pages/** - Page Object Models (selectors & interactions)
- **src/tests/** - Test files (test cases)
- **src/fixtures/** - Test data (credentials, employee data)
- **src/utils/** - Helper functions & configuration

---

## 🧪 Test Files Overview

| File | Purpose | Tests |
|------|---------|-------|
| `login.test.ts` | User authentication | 8 tests |
| `navigation.test.ts` | Page navigation | 8 tests |
| `employee.test.ts` | Employee CRUD ops | 14 tests |

---

## 🎯 Common Commands

```bash
# Run all tests
npm test

# Run with browser visible
npm run test:headed

# Debug mode (interactive)
npm run test:debug

# Record new tests
npm run test:codegen

# Run specific test file
npx playwright test src/tests/login.test.ts

# Run tests matching pattern
npx playwright test -g "login"

# Run on specific browser
npx playwright test --project=chromium

# Generate & view report
npx playwright test
npx playwright show-report
```

---

## 🔐 Setting Up Test Credentials

Update `src/fixtures/credentials.ts` with your actual credentials:

```typescript
export const validCredentials: Credentials = {
  username: 'your_username',
  password: 'your_password',
};
```

---

## 📝 Adding New Tests

### 1. Create Page Object (if new page)
Create file: `src/pages/YourPage.ts`
```typescript
import { Page } from '@playwright/test';

export class YourPage {
  constructor(private page: Page) {}

  async clickButton() {
    await this.page.click('#button-id');
  }
}
```

### 2. Create Test File
Create file: `src/tests/your.test.ts`
```typescript
import { test, expect } from '@playwright/test';
import { YourPage } from '../pages/YourPage';

test.describe('Your Feature', () => {
  test('should do something', async ({ page }) => {
    const yourPage = new YourPage(page);
    await yourPage.clickButton();
    expect(true).toBeTruthy();
  });
});
```

### 3. Run Your Test
```bash
npx playwright test src/tests/your.test.ts
```

---

## 🐛 Debugging Tests

### Debug Mode
```bash
npm run test:debug
```

### Inspect Element
```bash
npx playwright codegen http://your-app.com
```

### View Trace
1. Run tests with `npm test`
2. Open report: `npx playwright show-report`
3. Click on failed test to view trace

---

## 📋 Test Data Files

### Credentials (`src/fixtures/credentials.ts`)
- `validCredentials` - Valid login
- `invalidCredentials` - Invalid login
- `emptyUsername` - No username
- `emptyPassword` - No password

### Employees (`src/fixtures/employees.ts`)
- `validEmployee` - Standard employee
- `anotherEmployee` - Second employee
- `employeeWithSpecialChars` - Special names

---

## ⚙️ Configuration

### Environment Variables
Create `.env` file:
```
BASE_URL=http://localhost:3000
TIMEOUT=30000
HEADLESS=true
```

### Browser Options
Edit `playwright.config.ts`:
- Change browsers: chromium, firefox, webkit
- Set viewport size
- Configure timeouts
- Add custom devices

---

## 📖 Learn More

- [Playwright Docs](https://playwright.dev)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Assertions](https://playwright.dev/docs/test-assertions)
- [Configuration](https://playwright.dev/docs/test-configuration)

---

## ❓ Common Issues

**Tests timeout?**
- Increase timeout in `playwright.config.ts`
- Check if application is running
- Verify selectors are correct

**Selectors not found?**
- Use `npm run test:debug` to inspect
- Check if element is in iframe
- Verify element is visible

**Login failing?**
- Check credentials in `src/fixtures/credentials.ts`
- Verify application URL in `playwright.config.ts`
- Use `npm run test:headed` to see what's happening

---

## ✅ You're Ready!

Your Playwright framework is ready to use. Happy testing! 🎉
