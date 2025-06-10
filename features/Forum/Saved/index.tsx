import SearchBar from 'components/common/search';
import ArticleCard from '../Article/component/ArticleCard';

const dummyArticles = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  title: 'Membangun arsitektur tanaman di belakang rumah.',
  date: '09 Februari 2025',
  authorImg: '/images/testimonial__profile-picture-1.jpg',
  plantImg: '/images/dashboard__disease-1.jpg',
  upvotes: 226,
}));

const SavedPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-white px-16 py-8'>
      <div className='max-w-4xl mb-8'>
        <SearchBar placeholder=' Cari artikel...' />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
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
};

export default SavedPage;
