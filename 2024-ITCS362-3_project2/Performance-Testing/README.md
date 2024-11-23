# Medusa Store Testing

Performance testing for Medusa Store using k6 extensible load testing tool, focusing on various web pages

## Project Structure

```bash
Performance-Testing/
├── README.md
├── results.pdf
└── test_cases/
   ├── average-load-test.js
   ├── soak-test.js
   ├── spike-test.js
   └── stress-test.js

```

## Prerequisites

- k6

## Running Tests

### Run Average-load Test
To run test in the `average-load-test.js` file, use the following command:

```sh
 k6 run .\test_cases\average-load-test.js
```

### Run Soak Test
To run test in the `soak-test.js` file, use the following command:

```sh
 k6 run .\test_cases\soak-test.js
```

### Run Spike Test
To run test in the `spike-test.js` file, use the following command:

```sh
 k6 run .\test_cases\spike-test.js
```

### Run Stress Test
To run test in the `stress-test.js` file, use the following command:

```sh
 k6 run .\test_cases\stress-test.js
```

## Test Results

ระบบมีความสามารถในการรองรับปริมาณการใช้งานได้ในระดับหนึ่ง แต่ยังมีปัญหาในเรื่องของความเสถียรและประสิทธิภาพ โดยเฉพาะเมื่อมีผู้ใช้งานเข้ามาจำนวนมาก โดยมีอัตราการล้มเหลวสูงเมื่อมี request จำนวนมาก ซึ่งบ่งชี้ว่าระบบไม่สามารถรองรับปริมาณการใช้งานที่เพิ่มขึ้นได้อย่างมีประสิทธิภาพ และระยะเวลาในการตอบสนอง request ค่อนข้างนาน ซึ่งอาจเป็นผลมาจากปัญหาที่เครือข่ายหรือเซิร์ฟเวอร์
