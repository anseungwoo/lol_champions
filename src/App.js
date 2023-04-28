import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import Detail from './pages/detail';
import Header from './components/Header';
import Web3 from 'web3';
import { useState } from 'react';
import { NFT_ABI, NFT_ADDRESS1 } from './web3.config';
import { useEffect } from 'react';
const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract(NFT_ABI, NFT_ADDRESS1);

function App() {
  const [account, setAccount] = useState('');
  const [page, setPage] = useState(0);
  const [totalNft, setTotalNft] = useState(0);

  const [myNfts, setMyNfts] = useState(0);
  const [mintedNfts, setMintedNfts] = useState(0);

  const getMyNft = async () => {
    try {
      if (!contract || !account) return;

      const response = await contract.methods.balanceOf(account).call();

      setMyNfts(response);
    } catch (error) {
      console.error(error);
    }
  };
  const getMintedNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalSupply().call();

      setMintedNfts(response);
      setPage(parseInt((parseInt(response) - 1) / 13) + 1);
    } catch (error) {
      console.error(error);
    }
  };

  const getTotalNft = async () => {
    try {
      if (!contract) return;

      const response = await contract.methods.totalNft().call();

      setTotalNft(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTotalNft();
    getMyNft();
    getMintedNft();
  }, [contract, account]);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-white">
        <div className=" bg-black ">
          <Header account={account} setAccount={setAccount} />
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <Main
                setPage={setPage}
                myNfts={myNfts}
                mintedNfts={mintedNfts}
                totalNft={totalNft}
                page={page}
              />
            }
          />
          <Route path="/:tokenId" element={<Detail account={account} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
