import { add } from './helpers';

describe('add function', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")).toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
        expect(add("5")).toBe(5);
    });

    test('should return the sum of two comma-separated numbers', () => {
        expect(add("1,2")).toBe(3);
        expect(add("10,20")).toBe(30);
    });

    test('should handle an unknown amount of numbers', () => {
        expect(add("1,2,3,4,5")).toBe(15);
        expect(add("10,20,30,40,50")).toBe(150);
    });

});