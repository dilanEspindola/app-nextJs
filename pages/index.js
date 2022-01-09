import fetch from "isomorphic-fetch";
import Head from "next/head";
import Container from "../components/Container";
import Users from "../components/Users";

const Index = (props) => {
  const { users } = props;

  return (
    <>
      <Container>
        <Head>
          <title>NextJS Project - Home</title>
        </Head>
        <h1>Home</h1>
        <p>This web App is made with NextJs</p>
        <Users users={users} />
      </Container>
    </>
  );
};

Index.getInitialProps = async () => {
  const url = "https://reqres.in/api/users/";
  const res = await fetch(url);
  const data = await res.json();
  return { users: data };
};

export default Index;
