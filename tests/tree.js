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
        assert.throws(() => {tree(0 / 0)}, TypeError('Incorrect height type'));
        assert.throws(() => {tree(Infinity)}, TypeError('Incorrect height type'));
        assert.throws(() => {tree('not a number')}, TypeError('Incorrect height type'));
        assert.throws(() => {tree(Math.PI)}, TypeError('Incorrect height type'));
        assert.throws(() => {tree(2.718281828)}, TypeError('Incorrect height type'));
        assert.throws(() => {tree(function(){})}, TypeError('Incorrect height type'));
        assert.throws(() => {tree(new Object())}, TypeError('Incorrect height type'));
        assert.throws(() => {tree({})}, TypeError('Incorrect height type'));
        assert.throws(() => {tree(null)}, TypeError('Incorrect height type'));
        assert.throws(() => {tree(undefined)}, TypeError('Incorrect height type'));
    });
    
});

