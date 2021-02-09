'use strict';

/**
 * @description getting an ASCII tree
 * @param {number} height - tree's height
 * @return {string} ASCII tree consisting of symbols * and |
 */

const tree = (height) => {
    if (!(typeof height != 'number' || typeof height != 'string')
        || !Number.isInteger(Number(height))
        || height < 3) {
        return null;
    }

    let spruce = '';
    for (let h = height; h != 1; --h) {
        const spaces = ' '.repeat(h - 2);
        spruce += `${spaces}${'*'.repeat(1 + (height - h) * 2)}${spaces}\n`;
    }

    const spaces = ' '.repeat(height - 2);
    spruce += `${spaces}|${spaces}\n`;

    return spruce;
};

