import styles from "../styles/style";
import { Button } from "flowbite-react";
import { useConnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

const GetStarted: React.FC = () => {
  const { connect } = useConnect({ connector: new InjectedConnector(), })
    return (<div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[4px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <Button onClick={() => connect()} gradientMonochrome="info" className="mt-6">Connect MetaMask</Button>
      </div>
    </div>
  </div>);
};

export default GetStarted;
