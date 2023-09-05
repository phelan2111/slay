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
        icon: <BsPersonPlus className="text-inherit" />,
        path: PATH.SLAY_HOME,
        id: ACTION_FOOTER.FRIENDS,
    },
    {
        icon: <BiMessageSquareDots className="text-inherit" />,
        path: PATH.SLAY_HOME,
        id: ACTION_FOOTER.MESSAGE,
    },
    {
        icon: <BiHomeAlt className="text-inherit" />,
        path: PATH.SLAY_HOME,
        id: ACTION_FOOTER.HOME,
    },
    {
        icon: <BsPersonVideo2 className="text-inherit" />,
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
        <Box className="fixed bottom-0 backdrop-blur-3xl bg-gradient-to-r from-blue-500 to-blue-700 w-full flex justify-center rounded-tr-3xl rounded-tl-3xl">
            <Box className="flex p-4">
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
                        <Box
                            className={`absolute ${
                                item.id === state.active ? 'text-black' : 'text-white'
                            }`}
                        >
                            {item.icon}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default FooterComponent;
