
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const MyButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    padding: '10px 15px',
    marginBottom: '25px',
}));

export default function ButtonUsage({ text, path }) {
    const handleDownload = () => {
            window.open(path, '_blank');
        };

    return (
        <MyButton variant="contained" onClick={handleDownload}>
        {text}
        </MyButton>
    );
}