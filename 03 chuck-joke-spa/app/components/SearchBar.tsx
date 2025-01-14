'use client';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    searchQuery: string;
    onSearch: (query: string) => void;
}

export default function SearchBar({ searchQuery, onSearch }: SearchBarProps) {
    return (
        <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for a joke"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
        />
    );
}
