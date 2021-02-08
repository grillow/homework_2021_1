'use strict';

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});

    QUnit.test('Ёлочек высотой ниже нуля не бывает', function (assert) {
        assert.strictEqual(tree(-1), null);
        assert.strictEqual(tree(-2), null);
        assert.strictEqual(tree('-1'), null);
        assert.strictEqual(tree('-2'), null);
    });

    QUnit.test('Тип входных данных - только целое число или строка, содержащая целое число', function (assert) {
        assert.strictEqual(tree(0 / 0), null);
        assert.strictEqual(tree(Infinity), null);
        assert.strictEqual(tree('not a number'), null);
        assert.strictEqual(tree(Math.PI), null);
        assert.strictEqual(tree(2.718281828), null);
        assert.strictEqual(tree('2.718281828'), null);
        assert.strictEqual(tree(function(){}), null);
        assert.strictEqual(tree(new Object()), null);
        assert.strictEqual(tree({}), null);
        assert.strictEqual(tree(null), null);
        assert.strictEqual(tree(undefined), null);
    });
    
});

