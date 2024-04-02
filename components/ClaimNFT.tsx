'use client';

import { TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { CONTRACT } from "../utils/constants";
import { balanceOf, claimTo, getOwnedNFTs } from "thirdweb/extensions/erc721";

export const ClaimNFT = () => {
    const address = useActiveAccount()?.address;
    
    const { data, isLoading } = useReadContract(getOwnedNFTs, {
        contract: CONTRACT,
        owner: address || "",
        queryOptions: {
            enabled: !!address,
        },
    });
    console.log("Data: " + data);
    
    const { data: nftBalance, isLoading: loadingNFTBalance } = useReadContract(
        balanceOf, 
        {
            contract: CONTRACT,
            owner: address || "",
            queryOptions: {
                enabled: !!address,
            },
        }
    );
    
    return (
        <div>
            {address && (
                <div>
                    <h3>Claim Base NFT</h3>
                    <TransactionButton
                        transaction={() => (
                            claimTo({
                                contract: CONTRACT,
                                to: address,
                                quantity: BigInt(1),
                            })
                        )}
                        onTransactionConfirmed={() => (
                            alert("NFT claimed!")
                        )}
                    >Claim</TransactionButton>
                    <div>
                        <h3>Owned NFTs:</h3>
                        {loadingNFTBalance? (
                            <h4>...</h4>
                        ) : (
                            <h4>Balance: {nftBalance?.toString()}</h4>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
};