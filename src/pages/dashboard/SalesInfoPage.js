import React, { useState, useEffect } from 'react';
import { Grid, Typography, Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button } from '@material-ui/core';


 
function SalesInfoPage() {
  const [salesInfo, setSalesInfo] = useState([]);

  const getSalesInfo = () => {
    // TODO fetch the sales information from the API 
    const data = [
      { name: 'John Doe', totalRevenue: 5000, soldCar: 'Audi', date: '2022-03-21' },
      { name: 'Jane Smith', totalRevenue: 10000, soldCar: 'BMW', date: '2022-03-22' },
      { name: 'Bob Johnson', totalRevenue: 25000, soldCar: 'Mercedes Benz', date: '2022-03-23' },
    ];
    setSalesInfo(data);
  };

  useEffect(() => {
    getSalesInfo();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Sales Information </Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table className="sales-info-table">
            <TableHead>
              <TableRow>
                <TableCell>Customer</TableCell>
                <TableCell>Car Sold</TableCell>
                <TableCell>Total Revenue</TableCell>
                <TableCell>Date Sold</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salesInfo.map((row) => (
                <TableRow key={row.date}>
                  <TableCell component="th" scope="row">{row.name}</TableCell>
                  <TableCell>{row.soldCar}</TableCell>
                  <TableCell>${row.totalRevenue.toLocaleString()}</TableCell>
                  <TableCell>{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" className="sales-info-button" onClick={getSalesInfo}>Refresh</Button>
      </Grid>
    </Grid>
  );
}

export default SalesInfoPage;
