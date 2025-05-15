import { useUser } from "@account-kit/react"
import { useState } from "react";
import { CheckIcon } from "../icons/CheckIcon";
import { CopyIcon } from "../icons/CopyIcon";

const formatAddress = (address: string | undefined) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const AlchemyAccountCard = () => {
    const user = useUser();
    const userAddress = user?.address;
    const [copied, setCopied] = useState(false);

    const handleCopyAddress = async () => {
        if (userAddress) {
            await navigator.clipboard.writeText(userAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
        }
    };

    return (
        <div className="box-border flex w-full items-center px-2 py-3 gap-2.5 border border-[#424242] rounded-2xl flex-grow-0 z-[5]">
        <img src="/alchemy-logo.svg" alt="Ethereum" className="w-6 h-6" />
        <div className="flex flex-col items-start center gap-2">
            <div className="text-[#C3C3C3] text-xs font-medium">EVM Address</div>
            <div className="text-white text-sm font-semibold">{formatAddress(userAddress)}</div>
        </div>
        <button
            onClick={handleCopyAddress}
            className="ml-auto hover:opacity-80 transition-opacity"
            title={copied ? "Copied!" : "Copy address"}
        >
            {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
    </div>
    )
}