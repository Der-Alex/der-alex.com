export interface Article {
  id: string | number;
  title: string;
  description: string;
  tags: string[];
  created: string;
  category: string;
  path: string;
  meta: {
    path: string;
  };
}
