
import ChatIcon from '@mui/icons-material/Chat';
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
  numberOrdersConfirmed: PropTypes.number,
}
OrderToday.defaultProps = {
  numberOrdersConfirmed: 0,
}

export default function OrderToday(props) {
  const {numberOrdersConfirmed} = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <ChatIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h4">{fShortenNumber(numberOrdersConfirmed)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Đơn Hàng Đã Xác Nhận
      </Typography>
    </RootStyle>
  );
}