import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const MyButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#297A5F',
    '&:hover': {
      backgroundColor: '#453643',
    },
    padding: '10px 15px',
    marginBottom: '25px',
}));

export default function DownloadButton({ text, path }) {
    const handleDownload = () => {
            window.open(path, '_blank');
        };
    return ( 
            <MyButton variant="contained" onClick={handleDownload}>
                {text}
            </MyButton>
    );
}