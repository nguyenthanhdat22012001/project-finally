import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function TableSkeleton() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton 
      sx={{ height: 400, width: '100%' }}
      variant="rect"
      animation="wave" />
    </Box>
  );
}