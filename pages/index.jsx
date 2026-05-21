import Head from "next/head";
import Header from "../components/layout/Header";
import Home from "./home/index";
import Input from "@/components/form/Input";
import axios from "axios";

export default function Index({categoryList}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
      </Head>
      <Home categoryList={categoryList} />
    </div>
  );
}
export const getServerSideProps = async () => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );

  return {
    props: {
      categoryList: res.data || [],
    },
  };
};