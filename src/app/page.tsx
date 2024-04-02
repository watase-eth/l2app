import { ConnectButton } from "@/app/thirdweb";
import { CHAIN, appMetadata, client } from "../../utils/constants";
import { ClaimNFT } from "../../components/ClaimNFT";

export default function Home() {
  return (
    <main style={{ textAlign: "center"}}>
      <ConnectButton
        client={client}
        appMetadata={appMetadata}
        chain={CHAIN}
      />
      <ClaimNFT />
    </main>
  );
}
