import Button from '@mui/material/Button';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Garamond, serif',
    },
});

const MyButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#297A5F',
    '&:hover': {
      backgroundColor: '#453643',
    },
    padding: '10px 15px',
    marginBottom: '25px',
    sx: {
        fontFamily: 'Garamond, serif',
    },
}));

export default function DownloadButton({ text, path }) {
    const handleDownload = () => {
            window.open(path, '_blank');
        };
    return ( 
        <ThemeProvider theme={theme}>
            <MyButton variant="contained" onClick={handleDownload}>
                {text}
            </MyButton>
        </ThemeProvider>    
    );
}