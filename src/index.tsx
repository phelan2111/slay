/** @format */

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'assets/scss/global/_index.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { rootRoutesDesktop, rootRoutesMobile } from 'routes';
import { Provider } from 'react-redux';
import { store } from 'stores';
import LoadingPage from 'core/loading/page';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            refetchOnReconnect: false,
            retry: false,
            staleTime: 5 * 60 * 1000,
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const isMobileDevice = window.innerWidth < 1024;

const resizeOps = () => {
    document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
};

resizeOps();
window.addEventListener('resize', resizeOps);

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingPage />}>
                <Provider store={store}>
                    <RouterProvider
                        router={isMobileDevice ? rootRoutesMobile : rootRoutesDesktop}
                        fallbackElement={<>Not Founds 404</>}
                    />
                </Provider>
            </Suspense>
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
