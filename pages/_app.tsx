import { AppProps } from 'next/dist/next-server/lib/router/router';
import { FunctionComponent } from 'react';
import '../styles/globals.css';

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    return <Component {...pageProps} />;
};

export default MyApp;
