import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { ChuckNorrisJoke } from "../types/ChuckNorrisJoke";
import JokeButton from "./JokeButton";

interface JokeProps {
    category?: string;
    joke: ChuckNorrisJoke | null;
    onNewJoke: () => void;
}

export default function Joke({ category, joke, onNewJoke }: JokeProps) {
    return (
        <Box sx={{ maxWidth: 600, margin: '0 auto', padding: 2 }}>
            {joke && (
                <Card elevation={3}>
                    <CardContent>
                        <Box display="flex" alignItems="center" gap={2} mb={2}>
                            <CardMedia
                                component="img"
                                sx={{ width: 50, height: 50 }}
                                image={joke.icon_url}
                                alt="Chuck Norris"
                            />
                            <Typography variant="h6" component="div">
                                Chuck Norris Joke
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {joke.value}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Created: {new Date(joke.created_at).toLocaleDateString()}
                        </Typography>
                    </CardContent>
                </Card>
            )}
            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <JokeButton onNewJoke={onNewJoke} />
            </Box>
        </Box>
    );
}
