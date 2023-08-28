
# Stringamabob

![version](https://img.shields.io/npm/v/stringamabob.svg)
![downloads](https://img.shields.io/npm/dm/stringamabob.svg)

A library of JavaScript functions for various string manipulations.

## Installation

```javascript
npm install stringamabob  
```

## API

### 1. capitalize(str)

- **Description**: Capitalizes the first letter of the string.
- **Example**: 
```javascript
capitalize('hello') //returns "Hello"
```

### 2. allCaps(str)

- **Description**: Converts all characters in the string to uppercase.
- **Example**: 
```javascript
allCaps('hello') //returns "HELLO"
```

### 3. capitalizeWords(str)

- **Description**: Capitalizes the first letter of each word in the string.
- **Example**: 
```javascript
capitalizeWords('foo bar') //returns "Foo Bar"
```

### 4. removeExtraSpaces(str)

- **Description**: Removes any leading/trailing spaces and condenses multiple spaces to a single space.
- **Example**: 
```javascript
removeExtraSpaces('  hello  world  ') //returns "hello world"
```

### 5. kebobCase(str)

- **Description**: Converts a string into kebob-case.
- **Example**:
```javascript
 kebobCase('Hello World') //returns "hello-world"
```

### 6. snakeCase(str)

- **Description**: Converts a string into snake_case.
- **Example**: 
```javascript
snakeCase('Hello World') //returns "hello_world"
```

### 7. camelCase(str)

- **Description**: Converts a string into camelCase.
- **Example**: 
```javascript
camelCase('hello world') //returns "helloWorld"
```

### 8. shift(str, n = 1)

- **Description**: Shifts characters in a string by a specified number.
- **Example**: 
```javascript
shift('hello', 2) //returns "llohe"
```


### 9. makeHashTag(str)

- **Description**: Generates hashtags from the input string. Prioritizes longer words if more than three words are given.
- **Example**: 
```javascript
makeHashTag('hello world') //returns ["#Hello", "#World"]
```

### 10. isEmpty(str)

- **Description**: Checks if the string is empty or just whitespace.
- **Example**: 
```javascript
isEmpty('  ') //returns true
```

## npm Link

You can find the library on npm [here](https://www.npmjs.com/package/stringamabob).  
