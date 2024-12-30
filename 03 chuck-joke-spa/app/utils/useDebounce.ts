import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
        };
    }, [value, delay]);

    return debouncedValue;
}

// 'use client';
// import styles from "./page.module.css";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Joke from "./components/Joke";
// import { useState, useEffect } from 'react';
// import { useDebounce } from './hooks/useDebounce';

// export default function Home() {
//   const [selectedCategory, setSelectedCategory] = useState<string>('random');
//   const [searchQuery, setSearchQuery] = useState<string>('');
//   const debouncedSearchQuery = useDebounce(searchQuery, 500); // 500ms delay

//   useEffect(() => {
//     const fetchJokes = async () => {
//       if (debouncedSearchQuery.length >= 3) {
//         const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${debouncedSearchQuery}`);
//         const data = await response.json();
//         console.log('Fetched jokes:', data.result);
//       }
//     };

//     fetchJokes();
//   }, [debouncedSearchQuery]);

//   const handleCategorySelect = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div className={styles.page}>
//       <Header onCategorySelect={handleCategorySelect} />
//       <main className={styles.main}>
//         <input
//           type="search"
//           placeholder="Search for a joke"
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className={styles.searchBar}
//         />
//         <Joke category={selectedCategory} />
//       </main>
//       <Footer />
//     </div>
//   );
// }
