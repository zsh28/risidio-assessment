import Nftbanner from '../extensions/nftbanner';
import NGrid from '../extensions/ngrid';

function Collectionspage() {
    return (
        <div className="max-w-[1920px] mx-auto px-5">
        <Nftbanner />
        <br/>
        <div className="w-full">
        <div className="text-black text-2xl font-extrabold">
            NFTs
        </div>
        <br/>
        <NGrid />
        </div>
        </div>
    );
    }

export default Collectionspage;