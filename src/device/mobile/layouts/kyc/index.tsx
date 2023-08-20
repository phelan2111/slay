/** @format */

import { Outlet } from 'react-router-dom';
import 'assets/images/kyc/images-kycM.jpg';
import './_index.scss';
import ThemeComponent from 'device/mobile/components/theme';

const LayoutKYCComponent = () => {
    return (
        <ThemeComponent>
            <Outlet />
        </ThemeComponent>
    );
};

export default LayoutKYCComponent;
