import { Heading, Page , Button} from "@shopify/polaris";
import { ethers } from "ethers";

const handleOnClick = async () => {
  console.log('BanklessDAO crypto payments plugin')
  //request and get user's address//
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = await provider.getSigner();
  console.log('signer', signer)
  const addr = await signer.getAddress();
  console.log('addr', addr)
}
const Index = () => (
  <Page>
    <Heading>Shopify app with Node and React 🎉</Heading>
    <Button onClick={handleOnClick}>Checkout with Crypto</Button>
  </Page>
);

export default Index;
