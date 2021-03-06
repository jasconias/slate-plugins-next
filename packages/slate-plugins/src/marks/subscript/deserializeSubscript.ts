import { DeserializeHtml } from 'deserializers/types';
import { MARK_SUBSCRIPT } from './types';

const leaf = { [MARK_SUBSCRIPT]: true };

export const deserializeSubscript = (): DeserializeHtml => ({
  leaf: {
    SUB: () => leaf,
  },
});
