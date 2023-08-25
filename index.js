// eslint-disable-next-line no-unused-vars
// const str = 'hello world';

// Challenge 1
function capitalize(str) {
  const first = str[0].toUpperCase();
  const rest = str.slice(1);
  return first + rest;
}

// console.log(capitalize(str))

// Challenge 2
function allCaps(str) {
  return str.toUpperCase();
}

// console.log(allCaps(str))

// Challenge 3

function capitalizeWords(str) {
  const words = str.split(' ');
  const upperWords = words.map((word) => capitalize(word));
  return upperWords.join(' ');
}

// console.log(capitalizeWords('foo bar is foo bar for real') )

// Challenge 4
function removeExtraSpaces(str) {
  return str.trim().split(' ').filter((string) => string).join(' ');
}

//  Challenge 5
function kebobCase(str) {
  const splitCharArr = str.trim().toLowerCase().split('');
  const filteredStr = splitCharArr.filter((char) => {
    const code = char.charCodeAt(0);
    return (
      code === 32 // space
          || (code >= 48 && code <= 57) // 0-9
          || (code >= 97 && code <= 122) // a-z
          || code === 45 // hyphen
    );
  })
    .join('');
  return removeExtraSpaces(filteredStr).split(' ').join('-');
}

// Challenge 6

function snakeCase(str) {
  return removeExtraSpaces(str).split(' ').join('_').toLowerCase();
}

// Challenge 7
function camelCase(str) {
  const words = str.split(' ');
  for (let i = 1; i < words.length; i += 1) {
    if (i !== 0) {
      words[i] = capitalize(words[i]);
    }
  }

  return words.join('');
}

// Challenge 8
function shift(str, n = 1) {
  return str.slice(n) + str.slice(0, n);
}

//  Challenge 9
function makeHashTag(str) {
  const words = str.split(' ');

  if (words.length > 3) {
    words.sort((a, b) => b.length - a.length);
  }

  return words.slice(0, 3).map((word) => `#${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`);
}

//  Challenge 10
function isEmpty(str) {
  return str.trim().length === 0;
}

module.exports.capitalize = capitalize;
module.exports.allCaps = allCaps;
module.exports.capitalizeWords = capitalizeWords;
module.exports.removeExtraSpaces = removeExtraSpaces;
module.exports.kebobCase = kebobCase;
module.exports.snakeCase = snakeCase;
module.exports.camelCase = camelCase;
module.exports.shift = shift;
module.exports.makeHashTag = makeHashTag;
module.exports.isEmpty = isEmpty;
