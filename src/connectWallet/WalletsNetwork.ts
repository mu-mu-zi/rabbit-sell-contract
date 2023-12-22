import ConnectMask from "../hook/useMetaMaskHooks";
import ConnectUniset from "../hook/useUnisatHooks";


export type supportWallets =
    "Ethereum" | "Bitcoin";
export const WALLETS: {[key in supportWallets]: IWallet} = {
    Ethereum: {
        name: "Ethereum",
        download: "https://metamask.io/download/",
        hooks: ConnectMask,
    },
    Bitcoin: {
        name: "Bitcoin",
        download: "https://metamask.io/download/",
        hooks: ConnectUniset,
    },
};
export type IWallet = {
    name: string,
    download: string,
    hooks: any,
};

export type WalletHooks = {
    address: string
    chains: number
    getBalance(): Promise<number>
    name: string
    haveWallet: boolean
    connect(): Promise<void>
    switch?(): Promise<void>
}

