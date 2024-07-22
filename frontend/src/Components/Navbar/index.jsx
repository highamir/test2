import { Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Store/Slices/AuthSlices";
import Search from "./Search";
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


export default function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const cartQuantity=useSelector(state=>state.cart.list).length
  const dispatch = useDispatch();
  return (
    <Stack
    px='3%'
      component={"nav"}
      alignItems={"center"}
      direction={"row"}
      bgcolor={"#0C1844"}
      justifyContent={"space-between"}
      sx={{
        height: "60px",
        bgcolor:'primary.main'
      }}
    
    >
      <Stack gap={"10px"} direction={"row"}>
        <Typography color="white" variant="h3" component="h1">
          E-commerce
        </Typography>
        <Stack
          gap={"20px"}
          direction={"row"}
          alignItems={"center"}
          sx={{
            "&>a": {
              color: "#FF6969",
              fontSize: '24px'
            },
          }}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/categories"}>Categries</Link>
          <Link to={"/products/all/all-category"}>Products</Link>
          {token ? (
            <Link onClick={() => dispatch(logout())}>Logout</Link>
          ) : (
            <Link to={"/auth"}>Sign in</Link>
          )}
       
        </Stack>
      
      </Stack>
      <Stack  direction={'row'}>
          <Search/>
          <Link>
    <Badge badgeContent={cartQuantity} color="secondary">
  <ShoppingCartCheckoutIcon/>
    </Badge>
          </Link>
        </Stack>
    </Stack>
  );
}
