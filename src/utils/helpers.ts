export const add = (numbers: string): number => {
    if (!numbers) return 0;
    if(numbers.length === 1) return parseInt(numbers, 10);

    let delimiter = /,|\n/; // Default delimiters: comma or newline
    if (numbers.startsWith("//")) {
        const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
        if (delimiterMatch) {
            delimiter = new RegExp(delimiterMatch[1]);
            numbers = numbers.slice(delimiterMatch[0].length);
        }
    }

    const numArray = numbers.split(delimiter).map((num) => {
        const parsed = parseInt(num, 10);
        if (isNaN(parsed)) return 0;
        return parsed;
    });

    return numArray.reduce((sum, num) => sum + num, 0); // Calculate and return the sum
};