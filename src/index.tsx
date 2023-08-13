import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { rootRoutesDesktop, rootRoutesMobile } from 'routes';
import { Provider } from 'react-redux';
import { store } from 'stores';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isMobileDevice = window.innerWidth < 1024;


root.render(
  <React.StrictMode>
     <Provider store={store}>
        <RouterProvider
            router={isMobileDevice ? rootRoutesMobile : rootRoutesDesktop}
            fallbackElement={<>Not Founds 404</>}
        />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
