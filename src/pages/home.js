import Carousel from "../extensions/carousel";
import Cgrid from "../extensions/cgrid";

function Home() {
    return (
        <div className="max-w-[1920px] mx-auto px-5">
        <Carousel />
        <br/>
        <div className="w-full">
        <div className="text-black text-2xl font-extrabold">
            Collections
        </div>
        <br/>
        <Cgrid />
        </div>

        </div>
    );
    }

export default Home;