var extend = require('..');

suite('extend');

var object = { a : 1 };

test('should extend nothing', function () {
    extend(object);
    object.should.eql({ a : 1 });
});

test('should override existing properties', function () {
    extend(object, { a : 3 });
    object.should.eql({ a : 3 });
});

test('should add new properties', function () {
    extend(object, { b : 2 });
    object.should.eql({ a : 3, b : 2 });
});

test('should return the object', function () {
    extend(object).should.equal(object);
});