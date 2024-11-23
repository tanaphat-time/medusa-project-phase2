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

ระบบมีความสามารถในการรองรับปริมาณผู้ใช้งานได้ในระดับหนึ่ง แต่ยังมีปัญหาในเรื่องของความเสถียรและประสิทธิภาพอยู่ โดยเฉพาะเมื่อมี request เข้ามจำนวนมาก ระบบจะมีอัตราการล้มเหลวที่สูงขึ้น ซึ่งบ่งบอกว่าระบบไม่สามารถรองรับปริมาณการใช้งานที่เพิ่มขึ้นได้อย่างมีประสิทธิภาพ และผลการทดสอบยังบ่งชี้ว่าระยะเวลาในการตอบสนองต่อ request ของระบบค่อนข้างนาน ซึ่งอาจเป็นผลมาจากปัญหาที่เครือข่ายหรือตัวเซิร์ฟเวอร์
