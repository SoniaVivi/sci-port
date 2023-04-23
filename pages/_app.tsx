import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { FormspreeProvider } from "@formspree/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FormspreeProvider project="2191591939483106935">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormspreeProvider>
  );
}
