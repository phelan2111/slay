/** @format */

import React from 'react';
import { ACTION_STEP_KYC, IState } from '../..';
import { Box, Button, FormControl } from '@mui/material';
import From from 'core/form';
import InputKYC from '../../components/input';
import Localize from 'localize';

interface ILoginComponent {
    setState: React.Dispatch<React.SetStateAction<IState>>;
}

const LoginComponent: React.FC<ILoginComponent> = ({ setState }) => {
    const onRedirectRegister = () => {
        setState({ active: ACTION_STEP_KYC.REGISTER });
    };
    return (
        <FormControl>
            <Box className="flex flex-col gap-4">
                <From onSubmit={(dataItem) => {}} filed={['name', 'email', 'phone']}>
                    <Box className="flex flex-col gap-6">
                        <InputKYC
                            color="primary"
                            label={<Localize til="kyc.signIn.numberPhone" />}
                            name="phoneNumber"
                        />
                        <InputKYC
                            label={<Localize til="kyc.signIn.password" />}
                            name="email"
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
                        <Localize til="kyc.signIn.doNotHaveAccount" />
                    </span>
                    <span className="px-2" onClick={onRedirectRegister}>
                        <u>
                            <Localize til="kyc.welcome.signUp" />
                        </u>
                    </span>
                </Box>
            </Box>
        </FormControl>
    );
};

export default LoginComponent;
