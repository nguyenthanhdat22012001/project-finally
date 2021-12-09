
import ChatIcon from '@mui/icons-material/Chat';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from 'helper/FormatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: 'orangered'
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: '#fff',
  backgroundImage: 'linear-gradient(135deg, #fff 0%, orangered 100%)',
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function Followers() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <ChatIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(TOTAL)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Lượt Theo Dõi
      </Typography>
    </RootStyle>
  );
}