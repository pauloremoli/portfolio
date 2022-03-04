import  "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "https://gbnsaqju.api.sanity.io/v1/graphql/production/default",
    cache: new InMemoryCache(),
});

  return (
    <>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
    </>
  );
}

export default MyApp;
