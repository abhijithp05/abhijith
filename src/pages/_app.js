import { AppContextProvider } from "@/context/AppContext";
import { ThemeProvider } from "@/context/ThemeContext";
import "@/styles/globals.css";
import "@fontsource/quicksand";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abhijith - Frontend Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio for my frontend development journey."
        />
        <meta name="keywords" content="nextjs, seo, react, web development" />
      </Head>
      <ThemeProvider>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}
