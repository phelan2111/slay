/** @format */

import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import Localize from 'localize';
import React from 'react';
import { CiBookmark, CiCircleRemove, CiClock2, CiSquareRemove, CiUnread } from 'react-icons/ci';
import { VscReport } from 'react-icons/vsc';

interface IItemExtend {
    icon: React.ReactNode;
    text: {
        primary: React.ReactNode;
        secondary: React.ReactNode;
    };
}

const items: IItemExtend[] = [
    {
        icon: <CiBookmark />,
        text: {
            primary: <Localize til='post.extended.savePost.primary' />,
            secondary: <Localize til='post.extended.savePost.secondary' />,
        },
    },
    {
        icon: <CiSquareRemove />,
        text: {
            primary: <Localize til='post.extended.hiddenPost.primary' />,
            secondary: <Localize til='post.extended.hiddenPost.secondary' />,
        },
    },
    {
        icon: <CiUnread />,
        text: {
            primary: <Localize til='post.extended.unFollow.primary' />,
            secondary: <Localize til='post.extended.unFollow.secondary' />,
        },
    },
    {
        icon: <CiClock2 />,
        text: {
            primary: <Localize til='post.extended.snooze.primary' />,
            secondary: <Localize til='post.extended.snooze.secondary' />,
        },
    },
    {
        icon: <VscReport />,
        text: {
            primary: <Localize til='post.extended.report.primary' />,
            secondary: <Localize til='post.extended.report.secondary' />,
        },
    },
    {
        icon: <CiCircleRemove />,
        text: {
            primary: <Localize til='post.extended.block.primary' />,
            secondary: <Localize til='post.extended.block.secondary' />,
        },
    },
];
const ExtendComponent = () => {
    return (
        <List>
            {items.map((item, index) => {
                return (
                    <ListItemButton key={ExtendComponent.name + index.toString()}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.text.primary}
                            secondary={item.text.secondary}
                        />
                    </ListItemButton>
                );
            })}
        </List>
    );
};

export default ExtendComponent;
