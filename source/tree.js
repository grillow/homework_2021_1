'use strict';

/**
 * @description getting an ASCII tree
 * @param {number} height - tree's height
 * @return {string} ASCII tree consisting of symbols * and |
 */

const tree = (height) => {
    switch (typeof height) {
        case 'string':
            height = parseInt(height);
        case 'number':
            if (!Number.isInteger(height)) {
                return null;
            }
            break;
        default:
            return null;
    }

    if (height < 3) {
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

