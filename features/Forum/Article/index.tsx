'use client';

import ArticleCard from './component/ArticleCard';
import SearchBar from 'components/common/search';

const dummyArticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: 'Membangun arsitektur tanaman di belakang rumah.',
  date: '09 Februari 2025',
  authorImg: '/testimonial__profile-picture-1.jpg',
  plantImg: '/tanaman.jpg',
  upvotes: 226,
}));

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-white px-6 py-8">
      {/* Search Bar */}
      <div className="max-w-4xl mx-auto mb-8">
        <SearchBar placeholder=" Cari artikel..." />
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {dummyArticles.map((article) => (
          <ArticleCard
            key={article.id}
            title={article.title}
            date={article.date}
            authorImg={article.authorImg}
            plantImg={article.plantImg}
            upvotes={article.upvotes}
          />
        ))}
      </div>
    </div>
  );
}
