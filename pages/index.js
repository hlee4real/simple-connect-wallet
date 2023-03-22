import { injected } from "@/components/wallet/connector"
import { useWeb3React } from "@web3-react/core"
export default function Home() {

  const { active, account, library, connector, activate, deactivate, activeNetwork, error } = useWeb3React()
  async function connect() {
    try {
      await activate(injected)
    } catch (error) {
      console.log(error);
    }
  }
  function disConnect() {
    try {
      deactivate(injected)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <button onClick={connect}>Connect to MetaMask</button>
      {active ? <span>Connected with {account}</span> : <span>Not connected</span>}
      <button onClick={disConnect}>Disconnect</button>
    </div>
  )
}
