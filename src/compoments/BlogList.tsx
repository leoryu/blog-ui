import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyles, Theme, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import classNames from 'classnames';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const drawerWidth = 240;

const styles = (theme: Theme) =>
    createStyles({
        content: {
            flexGrow: 1,
            top: theme.spacing.unit * 8,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        },
    });

interface PaperInfo {
    id: string;
    title: string;
    abstract: string;
}

export interface Props extends WithStyles<typeof styles> {
    drawerIsOpen: boolean;
}

interface State {
    papers: PaperInfo[];
}

const tmp1: PaperInfo = {
    id: "1",
    title: "title1",
    abstract: "abs1",
}
const tmp2: PaperInfo = {
    id: "2",
    title: "title2",
    abstract: "abs2",
}

class BlogList extends React.Component<Props, State> {
    state: State = {
        papers: [tmp1, tmp2],
    }
    getPaper(id: string) {
        alert(id)
    }
    render() {
        const { classes, drawerIsOpen } = this.props;
        const { papers } = this.state;
        return (
            < List
                className={classNames(classes.content, {
                    [classes.contentShift]: drawerIsOpen,
                })}
            >
                {
                    papers.map(paper =>
                        <li key={paper.id}>
                            <ListItem button alignItems="flex-start" onClick={() => this.getPaper(paper.id)}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h5" color="inherit">
                                            {paper.title}
                                        </Typography>
                                    }
                                    secondary={
                                        <React.Fragment>
                                            {paper.abstract}
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider />
                        </li>
                    )
                }
            </List >
        );
    };
}

(BlogList as React.ComponentClass<Props>).propTypes = {
    classes: PropTypes.object.isRequired,
} as any;

export default withStyles(styles)(BlogList);
