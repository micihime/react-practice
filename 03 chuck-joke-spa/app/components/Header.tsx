'use client';
import { AppBar, Toolbar, Button, Box, Container } from '@mui/material';

interface HeaderProps {
    onCategorySelect: (category: string) => void;
    categories: string[];
    activeCategory: string;
}

export default function Header({ onCategorySelect, categories, activeCategory }: HeaderProps) {
    const handleCategoryClick = (category: string) => {
        onCategorySelect(category);
    };

    return (
        <AppBar position="static" color="primary">
            <Container maxWidth="xl">
                <Toolbar>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <Button
                            color="inherit"
                            variant={activeCategory === 'random' ? 'outlined' : 'text'}
                            onClick={() => handleCategoryClick('random')}
                        >
                            Random
                        </Button>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                color="inherit"
                                variant={activeCategory === category ? 'outlined' : 'text'}
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
