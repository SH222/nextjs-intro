import Head from "next/head";

export default function Seo({ title }) {
  return (
    <>
      {/* html에서 <head>의 영역</head> */}
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </>
  );
}
