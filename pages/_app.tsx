import * as React from "react";
import Head from "next/head";
import { AppProps as NextAppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import { CircularProgress, Stack } from "@mui/material";
import LayoutWrapper from "./components/LayoutWrapper";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Suspense
          fallback={
            <Stack
              width="100vw"
              height="100vh"
              alignItems="center"
              justifyContent="center"
            >
              <CircularProgress />
            </Stack>
          }
        >
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </React.Suspense>
      </ThemeProvider>
    </CacheProvider>
  );
}
