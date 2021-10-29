import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
import {NavLink} from 'react-router-dom'
import './leftsidebar.css';

export default function SideBar(){
        return(
        <List>
            {[
            {"text":'Dashboard',"icon":DashboardIcon,"path":"/users"},
            {"text":'Create User','icon':AddIcon,"path":"/create"},
            // {"text":'Edit User','icon':EditIcon,"path":"/users:userId"}
            ].map((list, index) => (
              <NavLink to={list.path} className='nav' activeClassName='active-nav' exact key={list.text}>
                <ListItem button  
                >
                  <ListItemIcon>
                  {list.icon.type.render()}
                  </ListItemIcon>
                  <ListItemText primary={list.text} />
                </ListItem>
              </NavLink>
            ))}
        </List>
    )
}