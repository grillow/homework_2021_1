'use strict';

/**
 * @description getting an ASCII tree
 * @param {number} height - tree's height
 * @return {string} ASCII tree consisting of symbols * and |
 */

const tree = (height) => {
    height = Number(height);
    if (!(typeof height != 'number' || typeof height != 'string')
        || !Number.isInteger(Number(height))
        || height < 3) {
        return null;
    }

    return new Array(height).fill('').reduce((result, item, index) => {
        if (index === height - 1) {
            const spaces = ' '.repeat((2 * (height - 2)) / 2);
            item = `${spaces}|${spaces}`;
        } else {
            const spaces = ' '.repeat(height - index - 2);
            item = `${spaces}${'*'.repeat(1 + 2 * index)}${spaces}`;
        }
        return `${result}${item.toString()}\n`;
    }, '');
};

