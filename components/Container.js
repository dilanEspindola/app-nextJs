import Navigation from "./navigation";
import Head from "next/head";

const Container = (props) => {
  return (
    <>
      <Head>
        <title>NextJS Project</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/cyborg/bootstrap.min.css"
        ></link>
      </Head>
      <Navigation />
      <div className="container p-4">{props.children}</div>
    </>
  );
};

export default Container;
