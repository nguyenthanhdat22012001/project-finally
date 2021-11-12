import * as React from 'react';
import Grid from '@mui/material/Grid';

import OrderToday from "components/seller/dashboard/OrderToday"

function DashboardAdminPage() {

  return (
    <Grid container spacing={3}>

      <Grid item xs={12} sm={6} md={3}>
        <OrderToday />
      </Grid>
      
    </Grid>
  );
}

export default DashboardAdminPage;