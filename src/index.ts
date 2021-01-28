import * as yaml from 'js-yaml';
import deepmerge from 'deepmerge';

export function deepmergeYaml(a: string, b: string) {
  return yaml.dump(deepmerge(yaml.load(a) as any, yaml.load(b) as any));
}
