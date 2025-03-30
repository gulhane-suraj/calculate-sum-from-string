export const add = (numbers: string): number => {
    if (!numbers) return 0;

    let delimiter = /,|\n|;/;  // Default delimiters: comma or newline

    // Check for custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            const rawDelimiter = delimiterMatch[1];
            if (rawDelimiter.startsWith("[") && rawDelimiter.endsWith("]")) {
                // Handle multiple or special character delimiters
                const delimiters = rawDelimiter
                    .slice(1, -1) // Remove the square brackets
                    .split("][") // Split multiple delimiters
                    .map((d) => d.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")); // Escape special regex characters
                delimiter = new RegExp(delimiters.join("|"));
            } else {
                // Single character delimiter
                delimiter = new RegExp(rawDelimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
            }
            numbers = numbers.slice(delimiterMatch[0].length); // Remove the delimiter definition line
        }
    }

    // Split the numbers using the delimiter
    const numArray = numbers.split(delimiter).map((num) => {
        const parsed = parseInt(num, 10);
        if (isNaN(parsed)) return 0;
        return parsed;
    });

    // Check for negative numbers
    const negatives = numArray.filter((num) => num < 0);
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }

    // Return the sum of the numbers
    return numArray.reduce((sum, num) => sum + num, 0);
};