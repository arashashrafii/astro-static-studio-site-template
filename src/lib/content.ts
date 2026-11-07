import data from '../../content/content.json';
import { ContentV2Schema } from './content-v2';

/** Load and validate the portable Content V2 document at build time. */
export function content() {
  return ContentV2Schema.parse(data);
}
