import { createThirdwebClient, defineChain, getContract } from "thirdweb";


export const appMetadata = {
    name: "Base NFT",
    url: "example.com",
};

export const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || "";
export const CHAIN = defineChain(84532);

export const client = createThirdwebClient({ 
    clientId: CLIENT_ID 
});

export const contractAddress = "0x75FB8F40888fb26208a18232706A90D0C6B1Ab92";

export const CONTRACT = getContract({
    client: client,
    chain: CHAIN,
    address: contractAddress,
});