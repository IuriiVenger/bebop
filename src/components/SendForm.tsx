import { FormEvent, useState } from "react";
import styles from "../styles/SendForm.module.css";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: import("ethers").providers.ExternalProvider;
  }
}

interface StartPaymentProps {
  ether: string;
  addr: string;
}

interface errorType {
  code: string;
}

type StartPayment = (arg: StartPaymentProps) => void;

export const SendForm = () => {
  const [errorText, setErrorText] = useState("");

  const startPayment: StartPayment = async ({ ether, addr }) => {
    try {
      setErrorText("");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = {
        to: addr,
        value: ethers.utils.parseEther(ether),
      };

      await signer.sendTransaction(tx);
    } catch (err) {
      let error = (err as errorType).code;
      setErrorText(`Error ${error}. Try again`);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const ether = data.get("amount")?.toString();
    const addr = data.get("wallet")?.toString();
    addr && ether && startPayment({ ether, addr });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="wallet">Адрес:</label>
        <input type="text" id="wallet" name="wallet" />
        <label htmlFor="amount">Сумма:</label>
        <input type="text" id="amount" name="amount" />
        <button type="submit">SEND ETH</button>
        <p>{errorText}</p>
      </form>
    </>
  );
};
