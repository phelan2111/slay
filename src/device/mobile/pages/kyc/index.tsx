/** @format */

import React from 'react';
import WelcomeComponent from './form/welcome';
import { Box } from '@mui/material';
import Localize from 'localize';
import LoginComponent from './form/login';
import RegisterComponent from './form/register';
import ForgotPasswordComponent from './form/forgotpassword';

export enum ACTION_STEP_KYC {
    WELCOME = 0,
    LOGIN,
    REGISTER,
    FORGOT_PASSWORD,
    RESET_PASSWORD,
}

interface IStepForm {
    title: string | React.ReactNode;
    description: string | React.ReactNode;
    component: React.ReactNode;
    id: ACTION_STEP_KYC;
}

const stepsForm: (
    setState: React.Dispatch<React.SetStateAction<IState>>
) => IStepForm[] = (setState) => {
    return [
        {
            component: <WelcomeComponent setState={setState} />,
            description: <Localize til="kyc.welcome.description" />,
            id: ACTION_STEP_KYC.WELCOME,
            title: <Localize til="kyc.welcome.title" />,
        },
        {
            component: <LoginComponent setState={setState} />,
            description: <Localize til="kyc.signIn.description" />,
            id: ACTION_STEP_KYC.LOGIN,
            title: <Localize til="kyc.signIn.title" />,
        },
        {
            component: <RegisterComponent setState={setState} />,
            description: <Localize til="kyc.signIn.description" />,
            id: ACTION_STEP_KYC.REGISTER,
            title: <Localize til="kyc.welcome.signUp" />,
        },
        {
            component: <ForgotPasswordComponent setState={setState} />,
            description: <Localize til="kyc.forgotPassword.description" />,
            id: ACTION_STEP_KYC.FORGOT_PASSWORD,
            title: <Localize til="kyc.forgotPassword.title" />,
        },
        {
            component: <WelcomeComponent setState={setState} />,
            description: 'ewqe',
            id: ACTION_STEP_KYC.RESET_PASSWORD,
            title: 'wqeqwe',
        },
    ];
};

export interface IState {
    active: ACTION_STEP_KYC;
}

const initialState: IState = {
    active: ACTION_STEP_KYC.WELCOME,
};

const Index = () => {
    const [state, setState] = React.useState<IState>(initialState);

    return (
        <Box className={'flex flex-col gap-4 relative'}>
            {stepsForm(setState).map((item, index) => {
                return (
                    item.id === state.active && (
                        <Box
                            key={Index.name + index.toString()}
                            className="text-white flex flex-col gap-2"
                        >
                            <Box className={'text-3xl font-bold uppercase'}>
                                {item.title}
                            </Box>
                            <Box className="text-sm">{item.description}</Box>
                        </Box>
                    )
                );
            })}

            {stepsForm(setState)[state.active].component}
        </Box>
    );
};

export default Index;
