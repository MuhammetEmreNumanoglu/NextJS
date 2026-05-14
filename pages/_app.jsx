import "@fortawesome/fontawesome-free/css/all.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Layout from "../layout/Layout";
import store from "@/redux/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <ToastContainer />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;