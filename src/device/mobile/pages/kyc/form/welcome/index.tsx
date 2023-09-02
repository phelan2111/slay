/** @format */

import React from 'react';
import { ACTION_STEP_KYC, IState } from '../..';
import { Box, CardMedia } from '@mui/material';
import Localize from 'localize';
import layer0 from 'assets/images/kyc/welcome/layer0.png';

interface IWelcomeComponent {
    setState: React.Dispatch<React.SetStateAction<IState>>;
}

const WelcomeComponent: React.FC<IWelcomeComponent> = ({ setState }) => {
    const onRedirectLogin = () => {
        setState({ active: ACTION_STEP_KYC.LOGIN });
    };
    const onRedirectRegister = () => {
        setState({ active: ACTION_STEP_KYC.REGISTER });
    };

    return (
        <section className="flex flex-col gap-4">
            <article className="relative">
                <CardMedia className="object-contain" component={'img'} src={layer0} />
                <Box
                    onClick={onRedirectLogin}
                    className="absolute bottom-11 right-0 p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl font-bold text-white text-sm"
                >
                    <Localize til="kyc.welcome.signInNow" />
                </Box>
            </article>
            <article className="flex flex-col gap-1">
                <Box className="text-white text-sm">
                    <Localize til="kyc.welcome.haveAnAccount" />
                </Box>
                <Box
                    onClick={onRedirectRegister}
                    className="text-xl text-purple-200 font-bold"
                >
                    <Localize til="kyc.welcome.signUp" />
                </Box>
            </article>
        </section>
    );
};

export default WelcomeComponent;
