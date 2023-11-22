
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useColorMode } from '@docusaurus/theme-common';

const LightButton = styled(Button)(() => ({
    color: '#fff',
    backgroundColor: '#297A5F',
    '&:hover': {
      backgroundColor: '#453643',
    },
    padding: '10px 15px',
    marginBottom: '25px',
}));

const DarkButton = styled(Button)(() => ({
    color: 'black',
    backgroundColor: '#FCBF49',
    '&:hover': {
        color: '#fff',
        backgroundColor: '#453643',
    },
    padding: '10px 15px',
    marginBottom: '25px',
}));

export default function ButtonUsage({ text, path }) {
    const handleDownload = () => {
            window.open(path, '_blank');
        };
    const { colorMode } = useColorMode();
    if(colorMode === 'light'){
        return ( 
            <LightButton variant="contained" onClick={handleDownload}>
            {text}
            </LightButton>
        );
    }
    else{
        return (
            <DarkButton variant="contained" onClick={handleDownload}>
            {text}
            </DarkButton>
        );
    }
}