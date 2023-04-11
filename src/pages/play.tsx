import { Center } from "@chakra-ui/react";
import Head from "next/head";

function PlayContent() {
    return <Center w={"100%"}>
        Placeholder
    </Center>
}

export default function Play() {
  return (
    <>
      <Head>
        <title>Guess the Song!</title>
      </Head>
      <main>
        <PlayContent />
      </main>
    </>
  );
}
