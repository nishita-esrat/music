import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { NavLink, Link } from "react-router-dom";
import "./navber.css";

const pages = [
  { path: "/", label: "Home" },
  { path: "/Instructors", label: "Instructors" },
  { path: "/classes", label: "Classes" },
  { path: "/dashboard", label: "Dashboard" },
];
const settings = [
  { path: "/profile", label: "Profile" },
  { path: "/logout", label: "Logout" },
];

const Navber = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [user, setUser] = React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" sx={{ bgcolor: "#009688", paddingX: "5px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LibraryMusicIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MUSIC
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {user
                ? pages.map((page, i) => (
                    <Button
                      key={i}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <NavLink
                        to={page.path}
                        className={({ isActive }) =>
                          isActive ? "active-nav-link" : "default-nav-link"
                        }
                      >
                        {page.label}
                      </NavLink>
                    </Button>
                  ))
                : pages
                    .filter((item) => item.label !== "Dashboard")
                    .map((page, i) => (
                      <Button
                        key={i}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: "white", display: "block" }}
                      >
                        <NavLink
                          to={page.path}
                          className={({ isActive }) =>
                            isActive ? "active-nav-link" : "default-nav-link"
                          }
                        >
                          {page.label}
                        </NavLink>
                      </Button>
                    ))}
              {/* {pages.map((page, i) => (
                <MenuItem key={i} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: "white" }}>
                    
                    <NavLink
                      to={page.path}
                      className={({ isActive }) =>
                        isActive ? "active-nav-link" : "default-nav-link"
                      }
                    >
                      {page.label}
                    </NavLink>
                  </Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
          <LibraryMusicIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            MUSIC
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {user
              ? pages.map((page, i) => (
                  <Button
                    key={i}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    <NavLink
                      to={page.path}
                      className={({ isActive }) =>
                        isActive ? "active-nav-link" : "default-nav-link"
                      }
                    >
                      {page.label}
                    </NavLink>
                  </Button>
                ))
              : pages
                  .filter((item) => item.label !== "Dashboard")
                  .map((page, i) => (
                    <Button
                      key={i}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <NavLink
                        to={page.path}
                        className={({ isActive }) =>
                          isActive ? "active-nav-link" : "default-nav-link"
                        }
                      >
                        {page.label}
                      </NavLink>
                    </Button>
                  ))}
            {/* {pages.map((page, i) => (
              <Button
                key={i}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <NavLink
                  to={page.path}
                  className={({ isActive }) =>
                    isActive ? "active-nav-link" : "default-nav-link"
                  }
                >
                  {page.label}
                </NavLink>
              </Button>
            ))} */}
          </Box>

          {user ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, i) => (
                  <MenuItem key={i} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to={setting.path} className="nav-link">
                        {setting.label}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Button
              variant="outlined"
              component={Link}
              to="/login"
              className="btn"
            >
              login
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navber;
