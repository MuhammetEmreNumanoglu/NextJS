import Head from "next/head";
import Home from "./home";
import Header from "@/components/layout/Header";

export default function Index() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div>
        <Header/>
        <Home />
      </div>
    </>
  );
}