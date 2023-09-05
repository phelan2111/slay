/** @format */

import React from 'react';
import { HiAcademicCap, HiCurrencyBangladeshi } from 'react-icons/hi';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { Box, Backdrop, SpeedDial, SpeedDialAction } from '@mui/material';
import { PiCloudMoon, PiSunBold, PiTranslate } from 'react-icons/pi';
import { ACTION_SPEED_DIAL } from '..';
import Localize from 'localize';

interface ISpeedDialComponent {
    onClose: () => void;
    open: boolean;
    onOpen: () => void;
    onAction: (action: ACTION_SPEED_DIAL) => void;
    theme: boolean;
    lang: 'vn' | 'en';
}

const SpeedDialComponent = ({
    onAction,
    onClose,
    onOpen,
    open,
    theme,
    lang,
}: ISpeedDialComponent) => {
    const actions = [
        {
            icon: <HiCurrencyBangladeshi className="text-sky-600" />,
            name: <Localize til="profile" />,
            action: ACTION_SPEED_DIAL.PROFILE,
        },
        {
            icon: <HiAcademicCap className="text-sky-600" />,
            name: <Localize til="post" />,
            action: ACTION_SPEED_DIAL.POST,
        },
        {
            icon: <PiTranslate className="text-sky-600" />,
            name:
                lang === 'en' ? (
                    <Localize til="langues.vn" />
                ) : (
                    <Localize til="langues.en" />
                ),
            action: ACTION_SPEED_DIAL.LANGUE,
        },
        {
            icon: theme ? (
                <PiSunBold className="text-sky-600" />
            ) : (
                <PiCloudMoon className="text-sky-600" />
            ),
            name: theme ? <Localize til="theme.dark" /> : <Localize til="theme.light" />,
            action: ACTION_SPEED_DIAL.THEME,
        },
    ];

    return (
        <React.Fragment>
            <Backdrop
                sx={{
                    backgroundColor: 'white',
                    zIndex: 1000,
                }}
                onClick={onClose}
                open={open}
            />
            <SpeedDial
                className="fixed right-6 bottom-14"
                ariaLabel="SpeedDial tooltip example"
                icon={
                    open ? (
                        <AiOutlineClose onClick={onClose} />
                    ) : (
                        <AiOutlinePlus onClick={onOpen} />
                    )
                }
                open={open}
            >
                {actions.map((item, index) => (
                    <SpeedDialAction
                        sx={{
                            '.MuiSpeedDialAction-staticTooltipLabel': {
                                boxShadow: 'none',
                                textAlign: 'end',
                            },
                            button: {
                                boxShadow:
                                    '0px 50px 100px -20px rgba(50, 50, 93, 0.25), 0px 30px 60px -30px rgba(0, 0, 0, 0.3), inset 0px -2px 6px 0px rgba(10, 37, 64, 0.35)',
                            },
                        }}
                        key={`${item.action}-${index}`}
                        icon={item.icon}
                        tooltipTitle={<Box className={'w-28'}>{item.name}</Box>}
                        tooltipOpen
                        onClick={() => onAction(item.action)}
                    />
                ))}
            </SpeedDial>
        </React.Fragment>
    );
};

export default SpeedDialComponent;
