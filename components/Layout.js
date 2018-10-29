import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default props => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet"/>
      <link rel="stylesheet" href="/static/app.css"/>
    </Head>
    <Header />
    {props.children}
    <Footer />
  </div>
);
