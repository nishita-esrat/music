import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{ bgcolor: "#009688", marginTop: "10px", color: "white", py: "30px" }}
    >
      <Box component={Container}>
        <Grid container spacing={2} sx={{ paddingBottom: "20px" }}>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <LibraryMusicIcon />
              <Typography
                variant="h6"
                noWrap
                component={Link}
                to="/"
                sx={{
                  ml: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".2rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MUSIC
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={4}
            sx={{ textAlign: { md: "right", lg: "center" } }}
          >
            <FacebookOutlinedIcon />
            <FacebookOutlinedIcon sx={{ ml: 1 }} />
            <FacebookOutlinedIcon sx={{ ml: 1 }} />
            <FacebookOutlinedIcon sx={{ ml: 1 }} />
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ textAlign: { lg: "right" } }}>
            <Typography component="p">contact us</Typography>
            <Typography component="p">about</Typography>
            <Typography component="p">phone:890655444</Typography>
            <Typography component="p">details</Typography>
          </Grid>
        </Grid>
        <Typography component="p" sx={{ textAlign: { md: "center" } }}>
          Copyright © 2024 - All right reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
