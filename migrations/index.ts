import * as migration_20250928_120818 from './20250928_120818';
import * as migration_20251004_025325 from './20251004_025325';
import * as migration_20251017_122840 from './20251017_122840';
import * as migration_20260114_113644 from './20260114_113644';
import * as migration_20260221_094938 from './20260221_094938';
import * as migration_20260425_074212 from './20260425_074212';
import * as migration_20261110_103035_payload_3_93 from './20261110_103035_payload_3_93';
import * as migration_20261110_110343_kids_yoga_show_kids from './20261110_110343_kids_yoga_show_kids';

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
    name: '20251017_122840',
  },
  {
    up: migration_20260114_113644.up,
    down: migration_20260114_113644.down,
    name: '20260114_113644',
  },
  {
    up: migration_20260221_094938.up,
    down: migration_20260221_094938.down,
    name: '20260221_094938',
  },
  {
    up: migration_20260425_074212.up,
    down: migration_20260425_074212.down,
    name: '20260425_074212',
  },
  {
    up: migration_20261110_103035_payload_3_93.up,
    down: migration_20261110_103035_payload_3_93.down,
    name: '20261110_103035_payload_3_93',
  },
  {
    up: migration_20261110_110343_kids_yoga_show_kids.up,
    down: migration_20261110_110343_kids_yoga_show_kids.down,
    name: '20261110_110343_kids_yoga_show_kids'
  },
];
