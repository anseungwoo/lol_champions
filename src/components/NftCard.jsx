import { FaChessRook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NftCard = ({ tokenId, metadata, mintedNfts }) => {
  return (
    <Link to={`/${tokenId}`}>
      <div className=" rounded-2xl  bg-[#061c25] pb-3    group hover:bg-[#1a7092] transition-all">
        <div className="rounded-2xl   overflow-hidden">
          <img
            className="rounded-t-2xl bg-white group-hover:scale-[1.1]  transition-all  "
            src={metadata.image}
            alt="NFT"
          />
        </div>
        <div className="mt-4   font-bold flex items-center px-4 text-white text-3xl object-fit  group-hover:justify-center ">
          {metadata.name}
        </div>
      </div>
    </Link>
  );
};

export default NftCard;
