import React from 'react';
import PropTypes from 'prop-types';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import BlogBar from './compoments/BlogBar';
import BlogDrawer from './compoments/BlogDrawer';
import BlogList from './compoments/BlogList';
import { ReactComponent } from '*.svg';

const styles = () =>
    createStyles({
        root: {
            display: 'flex',
        },
    });

export interface Props extends WithStyles<typeof styles> { }

interface State {
    drawerIsOpen: boolean;
    where: string;
}

class Blog extends React.Component<Props, State> {
    state: State = {
        drawerIsOpen: false,
        where: 'Home',
    };
    handleDrawerOpen = () => {
        this.setState({ drawerIsOpen: true });
    };

    handleDrawerClose = () => {
        this.setState({ drawerIsOpen: false });
    };
    render() {
        const { drawerIsOpen, where } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <BlogBar
                    where={where}
                    drawerIsOpen={drawerIsOpen}
                    handleDrawerOpen={this.handleDrawerOpen}
                />
                <BlogList drawerIsOpen={drawerIsOpen} />
                <BlogDrawer
                    drawerIsOpen={drawerIsOpen}
                    handleDrawerClose={this.handleDrawerClose}
                />
            </div>
        );
    }
}

(Blog as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(Blog);

