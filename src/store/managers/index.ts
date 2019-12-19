import { createManager } from 'use-state-manager';

export const yearManager = createManager(1990, 'yearManager', false);
export const textManager = createManager('hola mundo', 'textManager', false);
export const numbersManager = createManager([1,2,3,4], 'textManager', false);