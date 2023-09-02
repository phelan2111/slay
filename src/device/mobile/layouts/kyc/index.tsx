/** @format */

import { Outlet } from 'react-router-dom';
import './_index.scss';
import ThemeComponent from 'device/mobile/components/theme';
import BasicLayout from 'device/mobile/components/basicLayout';

const LayoutKYCComponent = () => {
    return (
        <ThemeComponent>
            <BasicLayout>
                <Outlet />
            </BasicLayout>
        </ThemeComponent>
    );
};

export default LayoutKYCComponent;
