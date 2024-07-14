import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const PopularClasses = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Typography variant="h5" sx={{ color: "#009688", mb: 3 }}>
        Popular Classes ...
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="https://media.istockphoto.com/id/136591877/photo/trumpet-players-in-orchestra.webp?b=1&s=170667a&w=0&k=20&c=bTWTE-ovxvO7pOJwZ-Ygh3tj4WB0FS-AODe0TxPBhbM="
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              sx={{ height: 200 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopularClasses;
