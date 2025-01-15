'use client';
import { Container, Box, Typography, Paper } from '@mui/material';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from 'react';
import { ChuckNorrisJoke } from "./types/ChuckNorrisJoke";
import { jokeService } from './services/jokeService';
import JokeButton from './components/JokeButton';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('random');
  const [searchQuery, setSearchQuery] = useState<string>('');
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
  };

  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (query.length >= 3) {
      const result = await jokeService.searchJokes(query);

      if (result && result.length > 0) {
        setCurrentJoke(result[0]);
      } else {
        setCurrentJoke(null);
      }
    } else {
      setCurrentJoke(null);
    }
  };

  const renderJokeContent = () => {
    if (currentJoke === null) {
      return (
        <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No jokes found matching "{searchQuery}". Try a different search term!
          </Typography>
        </Paper>
      );
    }

    return (
      <>
        <Joke joke={currentJoke} />
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <JokeButton onNewJoke={fetchJoke} />
        </Box>
      </>
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
