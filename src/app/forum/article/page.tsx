import ArticleSection from 'features/Forum/Article';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Article',
};

const ArticlePage = () => {
  return <ArticleSection />;
};

export default ArticlePage;
