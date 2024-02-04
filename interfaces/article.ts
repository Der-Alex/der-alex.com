import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

export interface Article extends ParsedContent {
  id: string | number;
  _path: string;
  title: string;
  description: string;
  tags: string[];
  created: string;
  category: string;
}
