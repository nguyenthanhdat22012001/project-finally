import Backdrop from '@mui/material/Backdrop';
// import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';

export default function LoaderDialog() {
    return (
        <Backdrop
            sx={{ background: '#fff', color: '#000', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <Stack sx={{ width: '30%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
            </Stack>
        </Backdrop>
    );
}
