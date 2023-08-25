const fn = require('./index');

test('capitalize', () => {
  expect(fn.capitalize('hello')).toBe('Hello');
  expect(fn.capitalize('world')).toBe('World');
});

test('allCaps', () => {
  expect(fn.allCaps('hello')).toBe('HELLO');
  expect(fn.allCaps('world')).toBe('WORLD');
});

test('capitalizeWords', () => {
  expect(fn.capitalizeWords('foo bar')).toBe('Foo Bar');
  expect(fn.capitalizeWords('hello world')).toBe('Hello World');
});

test('removeExtraSpaces', () => {
  expect(fn.removeExtraSpaces(' hello  world ')).toBe('hello world');
  expect(fn.removeExtraSpaces(' foo  ')).toBe('foo');
});

test('kebobCase', () => {
  expect(fn.kebobCase('Hello World')).toBe('hello-world');
  expect(fn.kebobCase('foo bar')).toBe('foo-bar');
});

test('snakeCase', () => {
  expect(fn.snakeCase('Hello World')).toBe('hello_world');
  expect(fn.snakeCase('foo bar')).toBe('foo_bar');
});

test('camelCase', () => {
  expect(fn.camelCase('hello world')).toBe('helloWorld');
  expect(fn.camelCase('foo bar')).toBe('fooBar');
});

test('shift', () => {
  expect(fn.shift('hello', 2)).toBe('llohe');
  expect(fn.shift('world', 3)).toBe('ldwor');
});

test('makeHashTag', () => {
  expect(fn.makeHashTag('hello world')).toEqual(['#Hello', '#World']);
  expect(fn.makeHashTag('foo bar baz')).toEqual(['#Foo', '#Bar', '#Baz']);
  expect(fn.makeHashTag('a b c d')).toEqual(['#A', '#B', '#C']);
});

test('isEmpty', () => {
  expect(fn.isEmpty(' ')).toBe(true);
  expect(fn.isEmpty('foo')).toBe(false);
});
