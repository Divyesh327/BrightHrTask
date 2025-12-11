# Playwright Test Automation Framework

A comprehensive test automation framework built with **Playwright** and **TypeScript**, structured using the **Page Object Model (POM)** pattern.

## Project Structure

```
project-root/
├─ src/
│  ├─ pages/              # Page Object Models
│  │  ├─ LoginPage.ts
│  │  ├─ Sidebar.ts
│  │  └─ EmployeePage.ts
│  ├─ tests/              # Test specifications
│  │  ├─ login.test.ts
│  │  ├─ navigation.test.ts
│  │  └─ employee.test.ts
│  ├─ utils/              # Helper functions and config
│  │  ├─ helpers.ts
│  │  └─ config.ts
│  └─ fixtures/           # Test data
│     ├─ credentials.ts
│     └─ employees.ts
├─ playwright.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md
```

## Features Implemented

### Feature 1: Login to the System
- ✅ Create login page model (`LoginPage.ts`)
- ✅ Implement login workflow with credentials
- ✅ Add positive login tests
- ✅ Add negative login tests (invalid credentials, empty fields)
- ✅ Edge case testing (rapid clicks, input validation)

**Test File:** `src/tests/login.test.ts`
- Positive tests for valid credentials
- Negative tests for invalid/empty credentials
- Edge cases for input handling

### Feature 2: Navigating to the Employee Tab
- ✅ Create sidebar/navigation page model (`Sidebar.ts`)
- ✅ Implement navigation to Employee page
- ✅ Add navigation validation tests
- ✅ Test sidebar active state indicators

**Test File:** `src/tests/navigation.test.ts`
- Navigation to Employee tab
- Navigation to Dashboard and Settings
- Active state verification
- Logout functionality

### Feature 3: Adding a New Employee
- ✅ Create Employee page model (`EmployeePage.ts`)
- ✅ Implement "Add Employee" form actions
- ✅ Support fixture-based employee test data
- ✅ Add employee creation tests

**Test File:** `src/tests/employee.test.ts` (Feature 3 tests)
- Fill and submit employee forms
- Add multiple employees
- Handle special characters in names
- Form validation
- Cancel form submission

### Feature 4: Asserting the New Employee
- ✅ Validate employee appears in list
- ✅ Verify employee details
- ✅ Add table/grid helper utilities
- ✅ Employee management operations (edit, delete)

**Test File:** `src/tests/employee.test.ts` (Feature 4 tests)
- Verify employee in list
- Check employee details
- Delete employees
- Edit employee information
- Empty list state handling

## Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Configuration

### Update Base URL

Edit `playwright.config.ts` to set your application's base URL:

```typescript
use: {
  baseURL: 'http://localhost:3000', // Change to your app URL
}
```

### Environment Variables

You can override test configuration via environment variables:

```bash
# Set base URL
BASE_URL=http://your-app.com npm test

# Run in headed mode
npx playwright test --headed

# Debug mode
npx playwright test --debug

# Single file
npx playwright test src/tests/login.test.ts

# Specific test
npx playwright test -g "User should login successfully"
```

## Running Tests

### Run All Tests
```bash
npm test
```

### Run in Headed Mode (see browser)
```bash
npm run test:headed
```

### Debug Mode
```bash
npm run test:debug
```

### Code Generation (Record Tests)
```bash
npm run test:codegen
```

### Run Specific Test File
```bash
npx playwright test src/tests/login.test.ts
```

### Run Tests Matching Pattern
```bash
npx playwright test -g "login"
```

### Run in Specific Browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Generate HTML Report
```bash
npx playwright test
npx playwright show-report
```

## Test Data & Fixtures

### Credentials (`src/fixtures/credentials.ts`)
- `validCredentials` - Valid user credentials
- `invalidCredentials` - Invalid login attempt data
- `emptyUsername` - Empty username test data
- `emptyPassword` - Empty password test data

### Employees (`src/fixtures/employees.ts`)
- `validEmployee` - Standard employee data
- `anotherEmployee` - Secondary employee data
- `employeeWithSpecialChars` - Test special character handling

## Page Object Models (POM)

### LoginPage
Methods for login page interactions:
- `navigateToLoginPage()` - Go to login page
- `fillUsername(username: string)` - Enter username
- `fillPassword(password: string)` - Enter password
- `clickLoginButton()` - Click login
- `login(username: string, password: string)` - Complete login
- `getErrorMessage()` - Retrieve error message
- `isErrorMessageVisible()` - Check error visibility
- `getCurrentUrl()` - Get current page URL

### Sidebar
Navigation and sidebar methods:
- `navigateToEmployeeTab()` - Go to employees
- `navigateToDashboard()` - Go to dashboard
- `navigateToSettings()` - Go to settings
- `logout()` - Logout user
- `isEmployeeTabVisible()` - Check tab visibility
- `isEmployeeTabActive()` - Check active state

### EmployeePage
Employee management methods:
- `navigateToEmployeePage()` - Go to employee page
- `clickAddEmployeeButton()` - Open add form
- `fillEmployeeForm(employee: Employee)` - Fill form
- `submitForm()` - Submit form
- `addNewEmployee(employee: Employee)` - Complete add workflow
- `findEmployeeInList(firstName: string, lastName: string)` - Search list
- `deleteEmployeeByName(firstName: string, lastName: string)` - Delete employee
- `editEmployeeByName(firstName: string, lastName: string)` - Edit employee
- `getEmployeeCount()` - Count employees
- `getEmployeeDetails(firstName: string, lastName: string)` - Get details

## Utility Functions (`src/utils/helpers.ts`)

- `waitForElement()` - Wait for element to appear
- `clickIfExists()` - Conditional click
- `getTextIfExists()` - Safe text retrieval
- `fillInputField()` - Fill with clear
- `waitForText()` - Wait for text content
- `reloadPage()` - Reload page
- `hasClass()` - Check CSS class
- `getAttribute()` - Get element attribute
- `waitForUrlMatch()` - Wait for URL change

## Configuration File (`src/utils/config.ts`)

- `TEST_CONFIG` - Base configuration object
- `API_ENDPOINTS` - API endpoint definitions
- `TEST_TIMEOUTS` - Timeout constants
- `TEST_WAITS` - Wait period constants

## Test Report

After running tests, view the HTML report:

```bash
npx playwright show-report
```

Reports include:
- Test execution status
- Screenshots on failure
- Video recordings (on failure)
- Full trace information

## Best Practices Used

1. **Page Object Model (POM)** - Encapsulates selectors and actions
2. **Test Data Fixtures** - Centralized test data management
3. **Utility Functions** - Reusable helper methods
4. **Type Safety** - TypeScript interfaces and types
5. **Descriptive Tests** - Clear test names and organize in describe blocks
6. **Assertion Messages** - Understanding test failures
7. **Wait Strategies** - Proper synchronization techniques
8. **Error Handling** - Graceful fallbacks for non-critical waits

## Debugging Tests

### Interactive Debug Mode
```bash
npx playwright test --debug
```

### Inspect Elements
```bash
npx playwright test --headed --debug
```

### View Traces
```bash
npx playwright test --headed
# Then open trace from report
```

### Use Playwright Inspector
```bash
PWDEBUG=1 npx playwright test
```

## CI/CD Integration

The framework is configured for CI/CD with:
- Automatic retries on CI
- Single worker on CI for reliability
- HTML report generation
- Screenshot/video capture on failure
- Trace collection for debugging

## Common Issues & Solutions

### Tests Can't Find Application
- Verify `baseURL` in `playwright.config.ts`
- Ensure application is running
- Check network connectivity

### Selector Not Found
- Use `--debug` mode to inspect element
- Check if element is in iframe
- Verify element is visible/enabled

### Timeout Errors
- Increase timeout in `playwright.config.ts`
- Use explicit waits instead of implicitly waiting
- Check if application is responsive

### Login Tests Failing
- Verify credentials in `src/fixtures/credentials.ts`
- Check if application requires specific domain
- Verify application is properly loaded

## Future Enhancements

- [ ] Add API testing layer
- [ ] Implement visual regression testing
- [ ] Add performance testing
- [ ] Parallel test execution optimization
- [ ] Custom reporting plugins
- [ ] Database seeding utilities
- [ ] BDD/Cucumber integration
- [ ] Test data cleanup utilities

## Contributing

When adding new tests:
1. Create Page Object Model for new pages
2. Add test fixtures for test data
3. Write tests in appropriate test file
4. Use descriptive test names
5. Add comments for complex logic
6. Keep selectors in POM, not in tests

## License

ISC

## Support

For issues or questions:
1. Check existing test examples
2. Review Playwright documentation: https://playwright.dev
3. Use debug mode for troubleshooting
4. Check console output for detailed error messages
