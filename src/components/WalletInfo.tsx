import { requiredWallets } from "@/helpers/wallets";
import { SendForm } from "./SendForm";
import { Web3ContextInterface, useWeb3 } from "@3rdweb/hooks";
import { BigNumber } from "ethers";


interface WalletInfoProps {
  address: string;
  balance?: {
    value?: BigNumber;
    formatted: string;
  }
}

export const WalletInfo: React.FC<WalletInfoProps> = ({ address, balance }) => {
  const isRequiredWallet = requiredWallets.includes(address);
  const balanceText = balance?.value ? `Your balance: ${balance.formatted} ETH` : ''
  const titleText = isRequiredWallet ? balanceText : "Адрес не зарегистрирован"
  
  return (
    <>
      <h2>
        {titleText}
      </h2>
      {isRequiredWallet && <SendForm />}
    </>
  );
};
