# deepmerge-yaml

deep merge yaml files

## Install

```sh
$ npm install -g deepmerge-yaml
```

## Usage

### stdio

```
$ npx deepmerge-yaml /path/to/some1.yaml /path/to/some2.yaml
```

### write file

```
$ npx deepmerge-yaml -o /path/to/some1.yaml /path/to/some2.yaml /path/to/some3.yaml
```

## Spec

```typescript
import * as fs from 'fs';
import * as path from 'path';
import { deepmergeYaml } from 'deepmerge-yaml';

const a = fs.readFileSync(path.resolve(__dirname, './a.yaml')).toString().trim();
const b = fs.readFileSync(path.resolve(__dirname, './b.yaml')).toString().trim();
const output = fs.readFileSync(path.resolve(__dirname, './output.yaml')).toString().trim();

test('nested properties', () => {
  const result = deepmergeYaml(a, b).trim();

  expect(result).toBe(output);
});
```
