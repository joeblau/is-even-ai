# is-even-ai

Harness the power of artificial intelligence to determine if a number is even.

## Overview

Why use simple modulo arithmetic when you can leverage a large language model? `is-even-ai` uses OpenAI's ChatGPT to definitively answer one of programming's most challenging questions: is this number even?

## Installation

```bash
npm install is-even-ai
```

## Usage

```typescript
import { isEvenAI } from 'is-even-ai';

const result = await isEvenAI(4);
console.log(result); // true

const result2 = await isEvenAI(7);
console.log(result2); // false
```

## Setup

This package requires an OpenAI API key. Set it as an environment variable:

```bash
export OPENAI_API_KEY=your-api-key-here
```

## API

### `isEvenAI(n: number): Promise<boolean>`

Checks if a number is even using ChatGPT.

**Parameters:**
- `n` - The number to check

**Returns:**
- A Promise that resolves to `true` if the number is even, `false` if odd

**Throws:**
- An error if the AI provides an unexpected response

## Development

Build the project:

```bash
npm run build
```

## Why?

Because sometimes the best solution is the most over-engineered one.

## License

ISC
