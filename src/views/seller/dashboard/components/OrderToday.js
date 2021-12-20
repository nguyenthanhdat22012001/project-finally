
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
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
  backgroundColor: 'mediumturquoise'
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
  backgroundImage: 'linear-gradient(135deg, gray 0%, mediumturquoise 100%)',
}));

// ----------------------------------------------------------------------


OrderToday.propTypes = {
  numberOrdersToday: PropTypes.number,
}
OrderToday.defaultProps = {
  numberOrdersToday: 0,
}

export default function OrderToday(props) {
  const {numberOrdersToday} = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <ShoppingBasketIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">{fShortenNumber(numberOrdersToday)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Đơn Hàng Hôm Nay
      </Typography>
    </RootStyle>
  );
}