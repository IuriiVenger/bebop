import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebWeb3Provider, ThirdwebWeb3ProviderProps } from "@3rdweb/hooks";
import { FC, ReactElement } from "react";

interface MyThirdwebWeb3ProviderProps extends ThirdwebWeb3ProviderProps {
  children: ReactElement
}

const MyThirdWeb3Provider: FC<MyThirdwebWeb3ProviderProps> = ThirdwebWeb3Provider

const supportedChainIds = [5];
const connectors = {
  injected: {},
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyThirdWeb3Provider
      supportedChainIds={supportedChainIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </MyThirdWeb3Provider>
  );
}
