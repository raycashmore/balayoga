import * as migration_20250928_120818 from './20250928_120818';
import * as migration_20251004_025325 from './20251004_025325';
import * as migration_20251017_122840 from './20251017_122840';

export const migrations = [
  {
    up: migration_20250928_120818.up,
    down: migration_20250928_120818.down,
    name: '20250928_120818',
  },
  {
    up: migration_20251004_025325.up,
    down: migration_20251004_025325.down,
    name: '20251004_025325',
  },
  {
    up: migration_20251017_122840.up,
    down: migration_20251017_122840.down,
    name: '20251017_122840'
  },
];
