#!/usr/bin/env node

import * as path from 'path';
import { readFileSync, writeFile } from '../util/file';
import { deepmergeYaml } from '..';
import { Command } from 'commander';

const meta = JSON.parse(
  readFileSync(path.resolve(__dirname, '../../package.json')).toString(),
);

process.stdin.resume();
process.stdin.setEncoding('utf8');

const program = new Command();

program
  .version(meta.version)
  .usage('$ npx deepmerge-yaml /path/to/some1.yaml /path/to/some2.yaml')
  .option('-o, --output <path>', 'write result to the path')
  .parse(process.argv);

const files = program.args.map((arg) =>
  readFileSync(path.resolve(process.cwd(), arg)).toString(),
);
const result = deepmergeYaml(...files);

if ((program as any).opts().output) {
  writeFile(path.resolve(process.cwd(), (program as any).opts().output), result)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
} else {
  console.log(result);
  process.exit(0);
}
