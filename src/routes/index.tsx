/** @format */

import { createBrowserRouter } from "react-router-dom";
import { PATH } from "utils/enums";


const rootRoutesMobile = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <div className="text-red-400">Home</div>
    }
]);

const rootRoutesDesktop = createBrowserRouter([
    {
        path: PATH.HOME,
        element: <div className="text-red-400">Home</div>
    }
]);

export { rootRoutesMobile, rootRoutesDesktop };
