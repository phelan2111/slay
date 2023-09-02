/** @format */

import React from 'react';
import SpeedDialComponent from './speedDial';
import './_index.scss';
import { langSelector, setLangs } from 'stores/reducer/lang';
import { useDispatch, useSelector } from 'react-redux';

interface IThemeComponent {
    children: React.ReactNode;
}

export enum ACTION_SPEED_DIAL {
    THEME = 1,
    LANGUE,
    PROFILE,
    POST,
}

interface IState {
    open: boolean;
    theme: boolean;
}

const ThemeComponent = ({ children }: IThemeComponent) => {
    const initial: IState = {
        open: false,
        theme: false,
    };

    const [state, setState] = React.useState<IState>(initial);
    const { lang } = useSelector(langSelector);
    const dispatch = useDispatch();

    const handleOpen = () => setState({ ...state, open: !state.open });
    const handleClose = () => setState({ ...state, open: !state.open });
    const handleOnClickDiaAction = (action: ACTION_SPEED_DIAL) => {
        switch (action) {
            case ACTION_SPEED_DIAL.THEME: {
                setState({ open: !state.open, theme: !state.theme });
                break;
            }
            case ACTION_SPEED_DIAL.LANGUE:
                if (lang === 'en') {
                    dispatch(setLangs({ lang: 'vn' }));
                } else {
                    dispatch(setLangs({ lang: 'en' }));
                }
                setState({ ...state, open: !state.open });
                break;
            case ACTION_SPEED_DIAL.PROFILE:
                break;
            case ACTION_SPEED_DIAL.POST:
                break;
            default:
                break;
        }
    };

    return (
        <section className="w-full relative ThemeM-height">
            <article className={state.theme ? 'dark' : ''}>{children}</article>
            <article>
                <SpeedDialComponent
                    theme={state.theme}
                    onAction={handleOnClickDiaAction}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={state.open}
                    lang={lang}
                />
            </article>
        </section>
    );
};

export default ThemeComponent;
