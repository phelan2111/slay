/** @format */

import React from 'react';
import { ACTION_STEP_KYC, IState } from '../..';
import { Box, Button, FormControl } from '@mui/material';
import From from 'core/form';
import InputKYC from '../../components/input';
import Localize from 'localize';

interface IRegisterComponent {
    setState: React.Dispatch<React.SetStateAction<IState>>;
}

const RegisterComponent: React.FC<IRegisterComponent> = ({ setState }) => {
    const onRedirectLogin = () => {
        setState({ active: ACTION_STEP_KYC.LOGIN });
    };

    return (
        <FormControl>
            <Box className="flex flex-col gap-4">
                <From onSubmit={(dataItem) => {}} filed={['name', 'email', 'phone']}>
                    <Box className="flex flex-col gap-6">
                        <InputKYC
                            label={<Localize til="kyc.signUp.firstName" />}
                            color="primary"
                            name="firstName"
                        />
                        <InputKYC
                            label={<Localize til="kyc.signUp.lastName" />}
                            color="primary"
                            name="lastName"
                        />
                        <InputKYC
                            color="primary"
                            label={<Localize til="kyc.signIn.numberPhone" />}
                            name="phoneNumber"
                        />
                        <InputKYC
                            label={<Localize til="kyc.signIn.password" />}
                            name="password"
                        />
                        <Button
                            className="h-14 bg-gradient-to-r from-purple-600 to-blue-600"
                            variant="contained"
                            type="submit"
                        >
                            <Localize til="kyc.welcome.signUp" />
                        </Button>
                    </Box>
                </From>
                <Box className="text-white text-sm">
                    <span>
                        <Localize til="kyc.forgotPassword.goBack" />
                    </span>
                    <span className="px-2" onClick={onRedirectLogin}>
                        <u>
                            <Localize til="kyc.signIn.title" />
                        </u>
                    </span>
                </Box>
            </Box>
        </FormControl>
    );
};

export default RegisterComponent;
