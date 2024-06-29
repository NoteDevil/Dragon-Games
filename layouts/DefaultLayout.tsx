import Head from "next/head";
import Header from "../components/layout/Header";

import {Providers} from "../pages/providers";
import Navbars from "../components/layout/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Head>
            <title>NextJs, Steam & Iron</title>
        </Head>

        <Providers>
            {/*<Header />*/}
            <Navbars/>
            {children}
        </Providers>

    </>
  );
}
