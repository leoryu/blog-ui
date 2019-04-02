import React, { ReactEventHandler } from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles, Theme } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;

const styles = (theme: Theme) =>
    createStyles({
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginLeft: 12,
            marginRight: 20,
        },
        hide: {
            display: 'none',
        },
    });


export interface Props extends WithStyles<typeof styles> {
    where: string;
    drawerIsOpen: boolean;
    handleDrawerOpen: ReactEventHandler;
}

function BlogBar(props: Props) {
    const { classes, where, drawerIsOpen, handleDrawerOpen } = props;
    return (
        <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
                [classes.appBarShift]: drawerIsOpen,
            })}
        >
            <Toolbar disableGutters={!drawerIsOpen}>
                <IconButton
                    className={classNames(classes.menuButton, drawerIsOpen && classes.hide)}
                    color="inherit"
                    aria-label="Menu"
                    onClick={handleDrawerOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    {where}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

BlogBar.propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(BlogBar);

