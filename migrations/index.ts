import * as migration_20250928_120818 from './20250928_120818';

export const migrations = [
  {
    up: migration_20250928_120818.up,
    down: migration_20250928_120818.down,
    name: '20250928_120818'
  },
];
