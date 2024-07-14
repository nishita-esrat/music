import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const PopularInstructor = () => {
  return (
    <Container sx={{ mb: 8 }}>
      <Typography variant="h5" sx={{ color: "#009688", mb: 3 }}>
        Popular Instructor ...
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              "&:hover .css-fyfnui-MuiCardContent-root": {
                opacity: ".7",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#009688",
                opacity: "0",
              }}
            >
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  instructor name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Lizard
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  classes :
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              "&:hover .css-fyfnui-MuiCardContent-root": {
                opacity: ".7",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#009688",
                opacity: "0",
              }}
            >
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  instructor name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Lizard
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  classes :
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              "&:hover .css-fyfnui-MuiCardContent-root": {
                opacity: ".7",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#009688",
                opacity: "0",
              }}
            >
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  instructor name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Lizard
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  classes :
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              "&:hover .css-fyfnui-MuiCardContent-root": {
                opacity: ".7",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#009688",
                opacity: "0",
              }}
            >
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  instructor name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Lizard
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  classes :
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              "&:hover .css-fyfnui-MuiCardContent-root": {
                opacity: ".7",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#009688",
                opacity: "0",
              }}
            >
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  instructor name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Lizard
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  classes :
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              "&:hover .css-fyfnui-MuiCardContent-root": {
                opacity: ".7",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#009688",
                opacity: "0",
              }}
            >
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  instructor name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Lizard
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  classes :
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              position: "relative",
              "&:hover .css-fyfnui-MuiCardContent-root": {
                opacity: ".7",
              },
            }}
          >
            <CardMedia
              sx={{ height: 250 }}
              image="https://images.unsplash.com/photo-1663405112027-28293e2b6945?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcm1vbnklMjBtdXNpY3xlbnwwfHwwfHx8MA%3D%3D"
              title="green iguana"
            />
            <CardContent
              sx={{
                position: "absolute",
                bottom: 0,
                backgroundColor: "#009688",
                opacity: "0",
              }}
            >
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  instructor name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h6"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Lizard
                </Typography>
              </Box>
              <Box>
                <Typography variant="p" sx={{ color: "white" }}>
                  classes :
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PopularInstructor;
