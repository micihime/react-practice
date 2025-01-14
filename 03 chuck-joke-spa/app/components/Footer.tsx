import { Box, Link, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'background.paper',
                borderTop: 1,
                borderColor: 'divider'
            }}
        >
            <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
            >
                <Link
                    href="https://www.linkedin.com/in/miroslava-hre%C5%A1kov%C3%A1-bbb5939a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <LinkedInIcon sx={{ fontSize: 20 }} />
                    <Typography>My LinkedIn profile</Typography>
                </Link>
                
                <Link
                    href="https://github.com/micihime"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <GitHubIcon sx={{ fontSize: 20 }} />
                    <Typography>My GitHub profile</Typography>
                </Link>

                <Link
                    href="https://github.com/micihime/chuck-joke-spa"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <CodeIcon sx={{ fontSize: 20 }} />
                    <Typography>Source Code for this app</Typography>
                </Link>
            </Stack>
        </Box>
    );
}
