# Median Expenses Calculator

This project contains two solutions for calculating the median of expenses up to the first Sunday of each month.

## Folder Structure

## Overview

- **`solution1.js`**: This file contains the first version of the solution, which is a straightforward implementation. It collects all expenses up to the first Sunday of each month, sorts them, and calculates the median. This solution has a time complexity of O(n log n) due to the sorting step.
- **`solution2.js`**: This file contains the optimized solution using the Quick Select algorithm. It efficiently finds the median without fully sorting the list, reducing the average time complexity to O(n). This method is particularly useful for large datasets.
