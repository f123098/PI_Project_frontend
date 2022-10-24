import type { AppProps } from 'next/app';
import '@styles/global.scss';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { wrapper } from '@store/index';
import 'antd/dist/antd.css';

import WithLayout from '@utils/withLayout/WithLayout';

const cache = createCache({
    key: 'css',
    prepend: true,
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CacheProvider value={cache}>
            <WithLayout>
                <Component {...pageProps} />
            </WithLayout>
        </CacheProvider>


    );
}

export default wrapper.withRedux(MyApp);
