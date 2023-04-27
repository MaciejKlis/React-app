import { Link, useLocation } from 'react-router-dom';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import IosShareIcon from '@mui/icons-material/IosShare';
import FeedSharpIcon from '@mui/icons-material/FeedSharp';

const Sidebar = () => {
    const location = useLocation();

    return (
        <div className="fixed w-63 h-full top-0 flex items-center bg-sidebar-bg">
            <MenuList sx={{
                width: '100%',
            }}>
                <Link to="/React-app/">
                    <MenuItem selected={'/React-app/' === location.pathname}>
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
                </Link>
                <Link to="/React-app/send-transaction">
                    <MenuItem selected={'/React-app/send-transaction' === location.pathname}>
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
                </Link>
                
                <Link to="/React-app/mint-nft">
                    <MenuItem selected={'/React-app/mint-nft' === location.pathname}>
                        <ListItemIcon>
                            <FeedSharpIcon 
                                fontSize="medium" 
                                sx={{
                                    color: '#fff',
                                    height: '45px',
                                }}
                            />
                        </ListItemIcon>
                        <ListItemText>Mint NFT</ListItemText>
                    </MenuItem>
                </Link>

            </MenuList>
        </div>
    )
}

export default Sidebar