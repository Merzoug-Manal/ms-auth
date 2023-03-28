import React, { useState } from 'react'
import logomini from '../assets/logo-mini.png'
import { HiOutlineBars3} from 'react-icons/hi2';
import {
    Box, ListItemText,
    Drawer, ListItem,ListItemButton,ListItemIcon, 
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import PostAddIcon from '@mui/icons-material/PostAdd';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WorkIcon from '@mui/icons-material/Work';
import List from "@mui/material/List";
import { Link } from 'react-router-dom';

const ht=120;
const Navbar=() => {
    const [openMenu,setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon:<HomeIcon/>,
        },
        {
            text: "Browse Jobs",
            icon:<WorkIcon/>,
        },
        {
            text: "Companies",
            icon:<ApartmentIcon/>,
        },
        {
            text: "Post Job Offer",
            icon:<PostAddIcon/>,
        },
    ]


  return (
    <nav>
    <div className='container'> 
        <div className='nav-logo-container'>
            <img src={logomini} className="logo" alt="" height={ht} width={ht} />
        </div>
         <div className='navbar-links-container'>
            <Link to="/">Home</Link>
            <Link to="/jobs">Browse Jobs</Link>
            <Link to="/companies">Companies</Link>
            <Link to="/about">About us</Link>
            <button className='primary-button'  onClick={() => (window.location.href = "/login")} >Sign up</button>
         </div>
         <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={()=> setOpenMenu(true)} />
         </div>
         <Drawer open={openMenu} onClose={()=> setOpenMenu(false)} anchor="right"> 
            <Box
            sx={{width:250}}
            role="presentation"
            onClick={()=> setOpenMenu (false)}>
                <List>
                    {menuOptions.map((item)=> (
                        <ListItem key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon> {item.icon} </ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
         </Drawer>
        </div>
    </nav>
  )
};

export default Navbar;