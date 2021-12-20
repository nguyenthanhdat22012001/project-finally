
import FavoriteIcon from '@mui/icons-material/Favorite';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from 'helper/FormatNumber';
import PropTypes from 'prop-types';

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

Followers.propTypes = {
  numberFollow: PropTypes.number,
}
Followers.defaultProps = {
  numberFollow: 0,
}

export default function Followers(props) {
  const {numberFollow} = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <FavoriteIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(numberFollow)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Lượt Theo Dõi
      </Typography>
    </RootStyle>
  );
}