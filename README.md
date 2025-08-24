
# Demoblaze Playwright Automation
This project automates the Demoblaze website using **Playwright + TypeScript** and follows the **Page Object Model Design Pattern**.

## Scenarios Automated
1. User Registration
2. User Login
3. User Logout
4. Create an Order for Apple Monitor 24

## Setup and installation
1. download and install nodejs through URL: https://nodejs.org/en/download
2. download and install Visual Studio Code through URL: https://code.visualstudio.com/download
3. Open Visual Studio Code then from File menu >> Open the project Folder or just drag and drop the project folder inside Visual Studio Code

# NOTE #
screenshots and videos are saved in `test-results/`.
report with all details saved in `playwright-report/index`.

## How to Run
```bash
npm install
npx playwright install
npm test
npm run report
```

## Other way to install and run the project
```bash
Open a new bash terminal:

1- enter below command line to initialize the node.js project
npm init -y

2- then enter below command line to install and setup playwright
npm init playwright @latest
then you may get some questions as below:
need to installpackages Ok to proceed >> press y
Do you want to use TypeScript or JavaScript?  >> select TypeScript by arrows then press Enter
Where to put your tests? >> type tests then press Enter
Add a GitHub Actions workflow? >> press y 
Install Playwright browsers (can be done manually via 'npx playwright install')? >> press y

3- then enter below command line to run the tests
npx playwright test

4- then enter below command line to display the report with all details including(Videos & screenshots)
npx playwright show-report



