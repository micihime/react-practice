import { Button } from "@mui/material";

interface JokeButtonProps {
    onNewJoke: () => void;
}

export default function JokeButton({ onNewJoke }: JokeButtonProps) {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onNewJoke}
            sx={{ mt: 2 }}
        >
            Get New Joke
        </Button>
    );
}
