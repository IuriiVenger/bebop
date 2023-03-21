import { useWeb3 } from "@3rdweb/hooks";
import metamaskIcon from "@/assets/img/metamask.svg";
import Image from "next/image";
import styles from '@/styles/Button.module.css'

interface ButtonProps {
  isMetamaskInstalled: boolean | undefined;
}

export const Button: React.FC<ButtonProps> = ({ isMetamaskInstalled }) => {
  const { connectWallet } = useWeb3();
  const handleClick = isMetamaskInstalled
    ? () => connectWallet("injected")
    : () => window.open('https://metamask.io/download/');

  const text = isMetamaskInstalled ? "Login with Metamask" : "Install metamask";

  return (
    <button onClick={handleClick} className={styles.button}>
      <Image src={metamaskIcon} alt="metamask" />
      <span> {text}</span>
    </button>
  );
};
