import Head from "next/head";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Whatsapp Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
    </Container>
  );
}

const Container = styled.div``;
