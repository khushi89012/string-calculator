function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  // Custom delimiter support
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const customDelimiter = parts[0].substring(2); // Extract delimiter after //
    delimiter = new RegExp(customDelimiter);
    numbers = parts[1]; // Update numbers to exclude delimiter declaration
  }

  // Split using the delimiter(s)
  const numList = numbers.split(delimiter).map(Number);

  // Check for negatives
  const negatives = numList.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  // Return sum
  return numList.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
