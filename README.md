# 🧮 String Calculator TDD

This project implements the classic **String Calculator Kata** using **Test-Driven Development (TDD)** in JavaScript with Jest.

---

## ✅ Features Implemented

| Feature               | Description                                 |
|-----------------------|---------------------------------------------|
| ✅ Empty String        | Returns 0                                   |
| ✅ Single Number       | Returns the number itself                   |
| ✅ Two Numbers         | Returns their sum                           |
| ✅ Multiple Numbers    | Handles any amount of numbers               |
| ✅ Newline Delimiters  | Handles `\n` in addition to `,`             |
| ✅ Custom Delimiters   | Supports syntax like `//;\n1;2`             |
| ✅ Special Delimiters  | Handles characters like `*`, `|`, `^`, etc. |
| ✅ Negative Numbers    | Throws error showing all negatives          |

---

## 🔁 Commit History (TDD Steps)

Each feature was implemented step-by-step using the TDD approach:

- `test: add returns 0 for empty string`
- `feat: handle empty string case`

- `test: add returns number when input is a single number`
- `feat: support single number`

- `test: add returns sum of two comma-separated numbers`
- `feat: support two comma-separated numbers`

- `test: add returns sum of multiple comma-separated numbers`
- `feat: support multiple comma-separated numbers`

- `test: add returns correct sum when newline used as delimiter`
- `feat: add support for newline as a delimiter`

- `test: add supports custom delimiter from prefix`
- `feat: add support for custom single-character delimiter`

- `test: add supports special character delimiters like * and |`
- `fix: escape special regex characters in custom delimiters`

- `test: throws error when input contains single negative number`
- `feat: throw exception for single negative number`

- `test: throws error listing all negative numbers in input`
- `feat: show all negative numbers in error message`

- `refactor: clean up code and improve readability`

---

## 🛠️ Technologies Used

- **Language:** JavaScript (Node.js)
- **Testing Framework:** [Jest](https://jestjs.io/)
- **Version Control:** Git

---

## 🚀 Getting Started

### 📦 Installation

```bash
git clone https://github.com/khushi89012/string-calculator.git
cd string-calculator
npm install

```
```bash
npm test
```
## 🧪 Sample Test Cases
```bash
add("") => 0
add("1") => 1
add("1,2") => 3
add("1\n2,3") => 6
add("//;\n1;2") => 3
add("//|\n1|2|3") => 6
add("//^\n2^3^4") => 9
add("-1,2") => Error: Negative numbers not allowed: -1
add("2,-4,3,-5") => Error: Negative numbers not allowed: -4, -5
```
## 📸 Screenshots
![Screenshot 2025-05-16 000526](https://github.com/user-attachments/assets/856d69d2-5838-4a5f-966e-57e7b908d2f7)
![Screenshot 2025-05-16 001416](https://github.com/user-attachments/assets/0719d6b8-4f5d-4d56-bc5f-9f25d4e417b5)









