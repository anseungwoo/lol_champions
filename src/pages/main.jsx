import Intro from '../components/Intro';
import Nfts from '../components/Nfts';
const Main = ({ setPage, myNfts, mintedNfts, totalNft, page }) => {
  return (
    <>
      <Intro
        setPage={setPage}
        myNfts={myNfts}
        mintedNfts={mintedNfts}
        totalNft={totalNft}
      />
      <Nfts page={page} mintedNfts={mintedNfts} />
    </>
  );
};

export default Main;
