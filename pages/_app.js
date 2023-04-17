import NavBar from "@/conponents/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        nav {
          /* background-color: tomato; */
        }
        span {
          text-decoration: none;
        }
        .active {
          color: blue;
        }
      `}</style>
    </>
  );
}
