import "@/styles/globals.css";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";

function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ConfigProvider
                getPopupContainer={trigger =>
                    trigger?.parentElement || document.body
                }
            >
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link rel="shortcut icon" href="/download.png" />
                </Head>

                <Component {...pageProps} />
            </ConfigProvider>
        </>
    );
}

// Export App with SSR disabled
export default dynamic(() => Promise.resolve(App), { ssr: false });
