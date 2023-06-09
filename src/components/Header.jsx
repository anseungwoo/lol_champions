import { GiMonsterGrasp } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Header = ({ account, setAccount }) => {
  const [coinPrice, setCoinPrice] = useState();

  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };
  const getPrice = async () => {
    try {
      const response = await axios.get(
        'https://api.upbit.com/v1/ticker?markets=KRW-BTC,%20KRW-ETH,%20KRW-MATIC'
      );

      setCoinPrice([
        { symbol: 'BTC', price: response.data[0].trade_price },
        { symbol: 'ETH', price: response.data[1].trade_price },
        { symbol: 'MATIC', price: response.data[2].trade_price },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPrice();
  }, []);

  return (
    <header className="max-w-screen-xl mx-auto p-4 flex justify-between items-center font-bold">
      <Link to="/">
        <div className="flex items-center text-main">
          <GiMonsterGrasp size={28} />
          <div className="ml-1 text-xl">LoL_champions</div>
        </div>
      </Link>
      <div className="flex items-center">
        {coinPrice && (
          <ul className="flex text-gray-400 text-sm">
            {coinPrice.map((v, i) => {
              return (
                <li key={i} className="ml-2">
                  {v.symbol}: {(v.price / 1000).toLocaleString()}K₩
                </li>
              );
            })}
          </ul>
        )}
        <div className="ml-8">
          {account ? (
            <div className="p-2 bg-gray-800 rounded-full flex items-center">
              <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
                <AiFillHeart />
              </div>
              <div className="ml-1">
                {account.substring(0, 4)}...
                {account.substring(account.length - 4)}
              </div>
            </div>
          ) : (
            <button
              className="flex items-center p-2 bg-gray-800 rounded-full"
              onClick={onClickAccount}
            >
              <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center">
                <BiWallet />
              </div>
              <div className="ml-1">Connect</div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
