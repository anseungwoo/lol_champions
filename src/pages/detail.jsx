import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaChessRook } from 'react-icons/fa';

const Detail = () => {
  const [metadata, setMetadata] = useState();

  const { tokenId } = useParams();

  const getNft = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_JSON_URL}/${tokenId}.json`
      );

      setMetadata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNft();
  }, []);

  return (
    <div className=" w-full flex flex-col justify-center items-center bg-gray-900 ">
      {metadata ? (
        <>
          <img
            className="w-full h-[80hv]   rounded-t-2xl"
            src={metadata.image}
            alt="no-img"
          />

          <h1 className=" -top-36 relative   py-8 rounded-b-2xl items-center text-center  ">
            <div className=" pb-10">
              <div className="text-4xl">{metadata.attributes[0].value}</div>

              <div className="mt-5  text-6xl font-bold ">{metadata.name}</div>
            </div>

            <div className="  h-72  flex flex-row  border-2  mx-10 ">
              <div className="flex flex-row justify-around  items-center  w-[50%]   ">
                <div className="flex flex-col">
                  <div className=" text-2xl">역할군</div>
                  <div className=" text-2xl text-[#d0a85c]">
                    {metadata.attributes[1].value}
                  </div>
                </div>
                <div className="flex flex-col  ">
                  <div className=" text-2xl ">난이도</div>
                  <div className=" text-2xl text-[#d0a85c]">
                    {metadata.attributes[2].value}
                  </div>
                </div>
              </div>
              <div className=" border-2  bg-[rgba(255, 255, 255, 0.2)] origin-center scale-50"></div>
              <div className="w-[50%] flex   items-center  ">
                <div className="justify-self-start text-lg font-bold mx-8">
                  {metadata.description}
                </div>
              </div>
            </div>
          </h1>
        </>
      ) : (
        <div>로딩중입니다...</div>
      )}
    </div>
  );
};

export default Detail;
