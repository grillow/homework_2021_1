'use strict';

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
        const stars = '*'.repeat(1 + (height - h) * 2);
        spruce += spaces + stars + spaces + '\n';
    }

    const spaces = ' '.repeat(height - 2);
    spruce += spaces + '|' + spaces + '\n';

    return spruce;

};

