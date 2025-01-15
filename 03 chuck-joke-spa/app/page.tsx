'use client';
import { Container, Box, Typography, Paper } from '@mui/material';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from 'react';
import { ChuckNorrisJoke } from "./utils/ChuckNorrisJoke";
import { jokeService } from './services/jokeService';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('random');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchedJokes, setSearchedJokes] = useState<ChuckNorrisJoke[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentJoke, setCurrentJoke] = useState<ChuckNorrisJoke | null>(null);

  const fetchJoke = async () => {
    const data = await jokeService.getRandomJoke(selectedCategory);
    setCurrentJoke(data);
  };

  useEffect(() => {
    fetchJoke();
  }, [selectedCategory]);

  useEffect(() => {
    jokeService.getCategories()
      .then(data => setCategories(data));
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchedJokes([]);
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (query.length >= 3) {
      const result = await jokeService.searchJokes(query);
      setSearchedJokes(result);

      if (result && result.length > 0) {
        setCurrentJoke(result[0]);
      } else {
        setCurrentJoke(null);
      }
    } else {
      setSearchedJokes([]);
      setCurrentJoke(null);
    }
  };

  const renderJokeContent = () => {
    if (searchQuery.length >= 3 && searchedJokes.length === 0) {
      return (
        <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No jokes found matching "{searchQuery}". Try a different search term!
          </Typography>
        </Paper>
      );
    }

    if (searchedJokes.length > 0) {
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Joke
            category={searchedJokes[0].categories[0] || 'uncategorized'}
            joke={searchedJokes[0]}
            onNewJoke={fetchJoke}
          />
        </Box>
      );
    }

    return (
      <Joke
        category={selectedCategory}
        joke={currentJoke}
        onNewJoke={fetchJoke}
      />
    );
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      <Header
        onCategorySelect={handleCategorySelect}
        categories={categories}
        activeCategory={selectedCategory}
      />
      <Container component="main" sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        py: 4
      }}>
        <SearchBar
          searchQuery={searchQuery}
          onSearch={handleSearch}
        />

        {renderJokeContent()}
      </Container>
      <Footer />
    </Box>
  );
}
