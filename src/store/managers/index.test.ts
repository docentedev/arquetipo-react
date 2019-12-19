import { yearManager, textManager, numbersManager } from './index';

describe('test manager', () => {
    test('test yearManager', () => {
        const expected = 1990;
        const actual = yearManager;
        expect(actual.getValue()).toEqual(expected);
    });
    
    test('test textManager', () => {
        const expected = 'hola mundo';
        const actual = textManager;
        expect(actual.getValue()).toEqual(expected);
    });
    
    test('test numbersManager', () => {
        const expected = [1, 2, 3, 4];
        const actual = numbersManager;
        expect(actual.getValue()).toEqual(expected);
    });
});