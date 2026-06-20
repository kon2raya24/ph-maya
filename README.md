
[![npm version](https://img.shields.io/npm/v/ph-maya.svg)](https://www.npmjs.com/package/ph-maya)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/kon2raya24/ph-maya/actions/workflows/ci.yml/badge.svg)](https://github.com/kon2raya24/ph-maya/actions/workflows/ci.yml)
# ph-maya

Maya (PayMaya) number validation and formatting.

## Installation

```bash
npm install ph-maya
```

## Features

- 📱 Maya number formatting
- ✅ Maya number validation

## Usage

```typescript
import { formatMaya, validateMaya } from 'ph-maya';

formatMaya('09171234567'); // '+639171234567'
validateMaya('09171234567'); // true
```

## License

MIT
