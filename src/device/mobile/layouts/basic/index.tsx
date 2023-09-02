/** @format */

import ThemeComponent from 'device/mobile/components/theme';
import React from 'react';
import { Outlet } from 'react-router-dom';

const BasicLayoutComponent = () => {
    return (
        <ThemeComponent>
            <Outlet />
        </ThemeComponent>
    );
};

export default BasicLayoutComponent;
