/** @format */

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { PATH } from 'utils/enums';
const LayoutBasicComponent = React.lazy(() => import('device/mobile/layouts/basic'));
const LayoutKYCMobileComponent = React.lazy(() => import('device/mobile/layouts/kyc'));
const KYCComponent = React.lazy(() => import('device/mobile/pages/kyc'));
const HomeComponent = React.lazy(() => import('device/mobile/pages/home'));

const rootRoutesMobile = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <LayoutKYCMobileComponent />,
        loader: () => <>Loading</>,
        children: [
            {
                path: PATH.HOME,
                element: <KYCComponent />,
            },
        ],
    },
    {
        path: PATH.SLAY_HOME,
        element: <LayoutBasicComponent />,
        loader: () => <>Loading</>,
        children: [
            {
                path: PATH.SLAY_HOME,
                element: <HomeComponent />,
            },
        ],
    },
]);

const rootRoutesDesktop = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <>Home desktop</>,
    },
]);

export { rootRoutesMobile, rootRoutesDesktop };
