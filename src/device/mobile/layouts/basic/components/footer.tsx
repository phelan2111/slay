/** @format */

import React, { useCallback, useState } from 'react';
import { PATH } from 'utils/enums';
import { BsPersonPlus, BsPersonVideo2 } from 'react-icons/bs';
import { Box } from '@mui/material';
import { BiHomeAlt, BiMessageSquareDots } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

enum ACTION_FOOTER {
    FRIENDS = 0,
    MESSAGE,
    HOME,
    WATCH,
}

interface IItemFooter {
    icon: React.ReactNode;
    path: PATH;
    id: ACTION_FOOTER;
}

const itemFooter: IItemFooter[] = [
    {
        icon: <BsPersonPlus />,
        path: PATH.SLAY_HOME,
        id: ACTION_FOOTER.FRIENDS,
    },
    {
        icon: <BiMessageSquareDots />,
        path: PATH.SLAY_HOME,
        id: ACTION_FOOTER.MESSAGE,
    },
    {
        icon: <BiHomeAlt />,
        path: PATH.SLAY_HOME,
        id: ACTION_FOOTER.HOME,
    },
    {
        icon: <BsPersonVideo2 />,
        path: PATH.SLAY_HOME,
        id: ACTION_FOOTER.WATCH,
    },
];

interface IStateFooterComponent {
    active: ACTION_FOOTER;
}

const initialStateFooterComponent: IStateFooterComponent = {
    active: ACTION_FOOTER.HOME,
};

const FooterComponent = () => {
    const [state, setState] = useState<IStateFooterComponent>(
        initialStateFooterComponent
    );
    const navigate = useNavigate();

    const onActive = useCallback(
        (item: IItemFooter) => {
            setState({ active: item.id });
            navigate(item.path);
        },
        [state.active]
    );

    return (
        <Box className="flex p-4 ">
            {itemFooter.map((item, index) => (
                <Box
                    onClick={() => onActive(item)}
                    key={FooterComponent.name + index.toString()}
                    className={
                        'flex items-center justify-center rounded-full h-14 w-14 relative'
                    }
                >
                    {item.id === state.active && (
                        <Box className="layout-Basic-footer-active rounded-full"></Box>
                    )}
                    <Box className="absolute">{item.icon}</Box>
                </Box>
            ))}
        </Box>
    );
};

export default FooterComponent;
