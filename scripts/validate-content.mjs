import { readFile } from 'node:fs/promises';
import { ContentV2Schema } from '../src/lib/content-v2.ts';

const contentPath = new URL('../content/content.json', import.meta.url);
const content = JSON.parse(await readFile(contentPath, 'utf8'));

try {
  ContentV2Schema.parse(content);
  console.log('content/content.json is valid Content V2.');
} catch (error) {
  console.error('content/content.json does not match the Content V2 contract.');
  for (const issue of error.issues ?? []) {
    console.error(`- ${issue.path.join('.') || '(root)'}: ${issue.message}`);
  }
  process.exitCode = 1;
}
