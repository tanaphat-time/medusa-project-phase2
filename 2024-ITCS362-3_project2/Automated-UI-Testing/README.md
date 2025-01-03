# Medusa Store Testing

Automated testing for Medusa Store using Robot Framework, focusing on authentication functionalities including login and registration.

## Project Structure

```bash
Automated-UI-Testing/
├── README.md
├── result-log.PNG
├── result-report.PNG
├── resources/
│   ├── common.robot
│   └── medusa_keywords.robot
├── test_cases/
│   └── auth.robot
└── variables/
    └── medusa_variables.robot
```

## Prerequisites

- Python 3.x
- Robot Framework
- SeleniumLibrary
- Chrome WebDriver

## Running Tests

### Run All Tests
To run all tests in the `auth.robot` file, use the following command:

```sh
 robot .\test_cases\auth.robot
```

### Run Tests by Tag
To run tests by a specific tag, use the `-i` option followed by the tag name. For example, to run all tests tagged with `login`, use:

```sh
robot -i login .\test_cases\auth.robot
```

### Available Tags
The following tags can be used with the `-i` option:
- `login`
- `negative`
- `positive`
- `register`

Replace `[tag]` with the desired tag to run tests for that specific tag.

## Test Results

### Report

![result-report](https://github.com/tanaphat-time/medusa-project-phase2/blob/master/2024-ITCS362-3_project2/Automated-UI-Testing/result-report.PNG)

### Log

![result-log](https://github.com/tanaphat-time/medusa-project-phase2/blob/master/2024-ITCS362-3_project2/Automated-UI-Testing/result-log.PNG)

จากการทดสอบ Automated UI แสดงให้เห็นว่าเว็บไซต์นี้มีการทำงานที่ถูกต้อง โดยมีการตอบสนองของการทดสอบ Login ทั้ง 3 test cases และ Register 1 test case แสดงผลเป็นตามที่คาดไว้
