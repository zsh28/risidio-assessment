//this page shows collections data from the figma canvas
//lists of the collection contains the following data title, tag, image, description, price range, artist, artist name
import nightSky from '../images/nightsky.png';
import future from '../images/future.png';
import motherNature from '../images/mothernature.png';
import leaArtist from '../images/leasmall.png';
import julienArtist from '../images/julien.png';
import mariaArtist from '../images/maria.png';

const collections = [
    {id: 1, 
        title: 'Night Sky', 
        tags: "120 NTF", 
        priceRange: "0.12BTC - 0.18BTC",
        image: nightSky,
        description: "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
        artistImage: leaArtist,
        artistName: "Lea Jacquot"},
    {id: 2, 
        title: 'Future', 
        tags: "120 NTF", 
        priceRange: "0.12BTC - 0.18BTC",
        image: future,
        description: "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
        artistImage: julienArtist,
        artistName: "Julien"},
    {id: 3,
        title: 'Mother Nature', 
        tags: "120 NTF", 
        priceRange: "0.12BTC - 0.18BTC",
        image: motherNature,
        description: "Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...",
        artistImage: mariaArtist,
        artistName: "Maria"}
    ]

export default collections;