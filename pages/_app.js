import Layout from "@/conponents/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <NavBar /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
