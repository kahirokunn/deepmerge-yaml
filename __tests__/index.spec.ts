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
const c = fs
  .readFileSync(path.resolve(__dirname, './c.yaml'))
  .toString()
  .trim();
const outputAB = fs
  .readFileSync(path.resolve(__dirname, './output-ab.yaml'))
  .toString()
  .trim();
const outputABC = fs
  .readFileSync(path.resolve(__dirname, './output-abc.yaml'))
  .toString()
  .trim();

test('basic', () => {
  const result = deepmergeYaml(a, b).trim();

  expect(result).toBe(outputAB);
});
test('3 files', () => {
  const result = deepmergeYaml(a, b, c).trim();

  expect(result).toBe(outputABC);
});
