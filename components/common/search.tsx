'use client';

import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { SearchProps } from './type';

const SearchBar: React.FC<SearchProps> = ({
  placeholder,
  onSearch,
  className,
}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(query);
    }
  };

  return (
    <div
      className={`flex items-center gap-2 text-[#B5B5B5] bg-white border border-[#B5B5B5] rounded-lg px-3 py-2 max-w-2xl ${className}`}
    >
      <SearchIcon size={20} />
      <input
        type='text'
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className='bg-transparent outline-none flex-1 text-black'
      />
    </div>
  );
};

export default SearchBar;
