
import ChatIcon from '@mui/icons-material/Chat';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fCurrencyVN } from 'helper/FormatNumber';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.primary.darker,
  backgroundColor: 'lightseagreen'
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
  backgroundImage: 'linear-gradient(135deg, #fff 0%, lightseagreen 100%)',
}));

// ----------------------------------------------------------------------


TotalRevenueMonth.propTypes = {
  revenueMonth: PropTypes.number,
}
TotalRevenueMonth.defaultProps = {
  revenueMonth: 0,
}

export default function TotalRevenueMonth(props) {
  const {revenueMonth} = props;
  return (
    <RootStyle>
      <IconWrapperStyle>
        <ChatIcon width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h4">{fCurrencyVN(revenueMonth)}</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Doanh Thu Tháng
      </Typography>
    </RootStyle>
  );
}