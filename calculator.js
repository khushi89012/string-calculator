function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;

  // Custom delimiter support
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    const rawDelimiter = parts[0].substring(2); // Extract delimiter after //
    const escapedDelimiter = rawDelimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); // Escape regex special chars
    delimiter = new RegExp(escapedDelimiter);
    numbers = parts[1]; // Remaining number part
  }

  const numList = numbers.split(delimiter).map(Number);

  // Check for negatives
  const negatives = numList.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return numList.reduce((sum, n) => sum + n, 0);
}

module.exports = { add };
