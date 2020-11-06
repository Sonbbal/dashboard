import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import { Avatar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const Header = () => {
    return (
        <div>
            <AppBar>
                <div>로고 들어가는곳</div>
                <div>
                    <Badge color="secondary" variant="dot" invisible={false}>
                        <NotificationsIcon />
                    </Badge>
                </div>
                <div>
                    <Avatar>H</Avatar>
                    <div>
                        <p>karima Abd El-Hamid</p>
                        <p>Admin</p>
                    </div>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                </div>
            </AppBar>
        </div>

    )
}

export default Header;