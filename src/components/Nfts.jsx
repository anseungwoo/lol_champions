import axios from 'axios';
import { useEffect, useState } from 'react';
import NftCard from './NftCard';

const Nfts = ({ page, mintedNfts }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const [nfts, setNfts] = useState();
  const [roleList, setRoleList] = useState();
  const getNfts = async (p) => {
    try {
      setNfts();

      let nftArray = [];

      for (let i = 1; i <= 162; i++) {
        const tokenId = i;

        let response = await axios.get(
          `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
        );

        nftArray.push({ tokenId, metadata: response.data });
      }

      setNfts(nftArray);
      setRoleList(nftArray);
    } catch (error) {
      console.error(error);
    }
  };

  const onClickRole = (role) => () => {
    if (role === 'all') {
      return setRoleList(nfts);
    }
    const result = nfts.filter((value, _) => {
      console.log(value.metadata.attributes[1].value);
      return value.metadata.attributes[1].value === role;
    });
    console.log(result);
    // const result = nfts.filter((value, _) => {
    //   return true;
    // });
    setRoleList(result);
  };

  useEffect(() => {
    console.log(nfts);
  }, [nfts]);

  useEffect(() => {
    getNfts(1);
  }, []);

  return (
    <>
      <div className="border-y-4 py-6">
        <div className="max-w-screen-xl mx-auto my-1  ">
          <div className="flex flex-row justify-center items-center  text-gray-500 font-bold text-2xl">
            <button
              className=" w-25   pr-14 border-r-2 border-black"
              onClick={onClickRole('all')}
            >
              전체 역할군
            </button>
            <button
              className="w-25    px-14 border-r-2 border-black"
              onClick={onClickRole('암살자')}
            >
              암살자
            </button>
            <button
              className="w-25   px-14 border-r-2 border-black"
              onClick={onClickRole('전사')}
            >
              전사
            </button>
            <button
              className="w-25  px-14 border-r-2 border-black"
              onClick={onClickRole('마법사')}
            >
              마법사
            </button>
            <button
              className="w-25   px-14 border-r-2 border-black"
              onClick={onClickRole('원거리 딜러')}
            >
              원거리 딜러
            </button>
            <button
              className="w-25  px-14 border-r-2 border-black"
              onClick={onClickRole('서포터')}
            >
              서포터
            </button>
            <button className="w-25   pl-14" onClick={onClickRole('탱커')}>
              탱커
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-8 pb-40 ">
        <div className="mt-8">
          {roleList ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 justify-items-center gap-8">
              {roleList.map((v, i) => {
                return (
                  <NftCard
                    key={i}
                    tokenId={v.tokenId}
                    metadata={v.metadata}
                    mintedNfts={mintedNfts}
                  />
                );
              })}
            </div>
          ) : (
            <div>로딩중입니다...</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Nfts;
