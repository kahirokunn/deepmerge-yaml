import * as yaml from 'js-yaml';
import deepmerge from 'deepmerge';

export function deepmergeYaml(...files: string[]) {
  return files.reduce((a: string, b: string) =>
    yaml.dump(deepmerge(yaml.load(a) as any, yaml.load(b) as any)),
  );
}
