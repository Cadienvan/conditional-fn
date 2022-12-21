# What is this?

https://github.com/Cadienvan/conditional-fn
# How do I install it?

```bash
npm install conditional-fn
```

# How can I use it?

## Use-case #1 - Simple Feature Flag (Boolean)

```javascript
import { conditional } from 'conditional-fn';

const shouldICallFnA = true;

const fnToCall = conditional(
  () => console.log('fnA'),
  () => console.log('fnB'),
  shouldICallFnA
)

fnToCall(); // logs 'fnA'
```

## Use-case #2 - Simple Feature Flag (Function)

```javascript
import { conditional } from 'conditional-fn';

const shouldICallFnA = () => false;

const fnToCall = conditional(
  () => console.log('fnA'),
  () => console.log('fnB'),
  shouldICallFnA
)

fnToCall(); // logs 'fnB'
```
# API

The `conditional` function accepts three arguments: two functions and a boolean or a function that returns a boolean. The function will return one of the provided functions based on the boolean or the function that returns a boolean.

# Tests

You can run the tests by using the following command:

```bash
npm test
```