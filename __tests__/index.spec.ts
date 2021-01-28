import * as fs from 'fs';
import * as path from 'path';
import { deepmergeYaml } from '../src';

const a = fs
  .readFileSync(path.resolve(__dirname, './a.yaml'))
  .toString()
  .trim();
const b = fs
  .readFileSync(path.resolve(__dirname, './b.yaml'))
  .toString()
  .trim();
const output = fs
  .readFileSync(path.resolve(__dirname, './output.yaml'))
  .toString()
  .trim();

test('basic', () => {
  const result = deepmergeYaml(a, b).trim();

  expect(result).toBe(output);
});
