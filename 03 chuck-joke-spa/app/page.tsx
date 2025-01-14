'use client';
import { Container, Box, Typography, Paper } from '@mui/material';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from 'react';
import { ChuckNorrisJoke } from "./utils/ChuckNorrisJoke";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('random');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchedJokes, setSearchedJokes] = useState<ChuckNorrisJoke[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [currentJoke, setCurrentJoke] = useState<ChuckNorrisJoke | null>(null);

  const fetchJoke = async () => {
    const baseUrl = "https://api.chucknorris.io/jokes/random";
    const url = selectedCategory !== "random" ? `${baseUrl}?category=${selectedCategory}` : baseUrl;
    const response = await fetch(url);
    const data: ChuckNorrisJoke = await response.json();
    setCurrentJoke(data);
  };

  useEffect(() => {
    fetchJoke();
  }, [selectedCategory]);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(response => response.json())
      .then(data => setCategories(data));
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchedJokes([]);
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
          onSearchResults={setSearchedJokes}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setCurrentJoke={setCurrentJoke}
        />
        {searchQuery.length >= 3 && searchedJokes.length === 0 ? (
          <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
            <Typography variant="h6" color="text.secondary">
              No jokes found matching "{searchQuery}". Try a different search term!
            </Typography>
          </Paper>
        ) : searchedJokes.length > 0 ? (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}>
            <Joke category={searchedJokes[0].categories[0] || 'uncategorized'}
              joke={searchedJokes[0]}
              onNewJoke={fetchJoke} />
          </Box>
        ) : (
          <Joke category={selectedCategory}
            joke={currentJoke}
            onNewJoke={fetchJoke} />
        )}
      </Container>
      <Footer />
    </Box>
  );
}
