import Head from "next/head";
import { Spotify } from "@/assets/Spotify";
import {
  Center,
  Grid,
  GridItem,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";

function CreditLink() {
  return (
    <Center whiteSpace={"pre-wrap"} w={"100%"}>
      <Link target={"_blank"} href={"https://icons8.com/icon/11116/spotify"}>
        Spotify
      </Link>
      <Text> icon by </Text>
      <Link target={"_blank"} href={"https://icons8.com"}>
        Icons8
      </Link>
    </Center>
  );
}

function HomeContent() {
  return (
    <Grid w={"100vw"} h={"100vh"} gridTemplateRows={"1fr 100px"}>
      <GridItem>
        <Center h={"100%"}>
          <Link href={"./api/"}>
            <IconButton aria-label={"authorise"} icon={<Spotify />} />
          </Link>
        </Center>
      </GridItem>
      <GridItem>
        <CreditLink />
      </GridItem>
    </Grid>
  );
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Guess the Song!</title>
      </Head>
      <main>
        <HomeContent />
      </main>
    </>
  );
}
