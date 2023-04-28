import { FaChessRook } from 'react-icons/fa';
import { CONTRACT_ADDRESS } from '../web3.config';

const ranNum = Math.floor(Math.random() * 13) + 1;
const ranNum2 = Math.floor(Math.random() * 3);
const cardList = ['s', 'c', 'h', 'd'];

const Intro = ({ totalNft, myNfts, mintedNfts }) => {
  return (
    <div className="bg-gradient-to-b from-transparent  to-white pt-10 px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="text-3xl text-black">챔피언을</div>
        <div className="text-8xl font-bold my-2 text-black">선택하세요</div>
        <div className="text-3xl my-2 text-black">
          162여 명의 챔피언 중 자신의 플레이 스타일에 어울리는 챔피언을
          찾아보세요.
        </div>
        <div className="text-3xl my-2 text-black mb-7">
          한 명의 챔피언을 완벽히 익히거나 모든 챔피언을 사용해 볼 수도
          있습니다.
        </div>
      </div>
    </div>
  );
};

export default Intro;
