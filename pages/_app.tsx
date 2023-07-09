import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import ScrollObserver from "../utils/scroll_observer";
import SizeObserver from "../utils/size_observer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SizeObserver>
      <ScrollObserver>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ScrollObserver>
    </SizeObserver>
  );
};

export default App;
