import classes from "./Sidebar.module.css"
import MenuList from '@mui/material/MenuList';
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import IosShareIcon from '@mui/icons-material/IosShare';
import FeedSharpIcon from '@mui/icons-material/FeedSharp';

const Sidebar = () => {
    return (
        <div className={`${classes.sidebar}`}>
            <MenuList sx={{
                width: '100%',
            }}>
                <MenuItem>
                    <ListItemIcon>
                        <DashboardCustomizeIcon
                            fontSize="medium" 
                            sx={{
                                color: '#fff',
                                height: '45px',
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText>Dashboards</ListItemText>
                </MenuItem>
                <MenuItem selected={true}>
                    <ListItemIcon>
                        <IosShareIcon 
                            fontSize="medium" 
                            sx={{
                                color: '#fff',
                                height: '45px',
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText>Send Transaction</ListItemText>
                </MenuItem>
                <MenuItem disabled={true}>
                    <ListItemIcon>
                        <FeedSharpIcon 
                            fontSize="medium" 
                            sx={{
                                color: '#fff',
                                height: '45px',
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText>Use Smart Contract</ListItemText>
                </MenuItem>
            </MenuList>
        </div>
    )
}

export default Sidebar