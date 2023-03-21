import styles from "@/styles/Home.module.css";
import { useWeb3 } from "@3rdweb/hooks";
import MetaMaskOnboarding from "@metamask/onboarding";
import { useEffect, useState } from "react";
import { WalletInfo, Button } from "../components";

export default function Home() {
  let { address, balance } = useWeb3();
  const [isMetaMaskInstalled, setMetaMaskInstalled] = useState(false);

  useEffect(() => {
    setMetaMaskInstalled(MetaMaskOnboarding.isMetaMaskInstalled());
  },[]);

  return (
      <main className={styles.main}>
        <h1>Metamask authorization</h1>
        {address ? (
          <>
            <WalletInfo address={address}  balance={balance}/>
          </>
        ) : (
          <Button isMetamaskInstalled={isMetaMaskInstalled} />
        )}
      </main>
  );
}
