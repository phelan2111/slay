/** @format */

import { Outlet } from 'react-router-dom';
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
