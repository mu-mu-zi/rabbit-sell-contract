import { useAppSelector } from "./hooks";
import ConnectMask from "./useMetaMaskHooks";
import ConnectUniset from "./useUnisatHooks";

export default function useConnect() {
  const store = useAppSelector(store => store.App)
  const currentHooks = store.network === 'Ethereum' ? ConnectMask() : ConnectUniset()

  return currentHooks
}