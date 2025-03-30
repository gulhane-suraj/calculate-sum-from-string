export const add = (numbers: string): number => {
    if (!numbers) return 0;
    if(numbers.length === 1) return parseInt(numbers, 10);
    const numArray = numbers.split(',').map((num) => {
        const parsed = parseInt(num, 10);
        return parsed;
    });

    return numArray.reduce((sum, num) => sum + num, 0); // Calculate and return the sum
};