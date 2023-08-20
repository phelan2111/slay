/** @format */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { PATH } from "utils/enums";
const LayoutKYCMobileComponent = React.lazy(() => import('device/mobile/layouts/kyc'));
const LoginComponent = React.lazy(() => import('device/mobile/pages/kyc/login'));


const rootRoutesMobile = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <LayoutKYCMobileComponent />,
        loader: () => <>Loading</>, 
        children: [
            {
                path: PATH.HOME,
                element: <LoginComponent />
            }
        ]
    }
]);

const rootRoutesDesktop = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <>Home desktop</>,
    }
]);

export { rootRoutesMobile, rootRoutesDesktop };
