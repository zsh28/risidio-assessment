import nightIscoming from '../images/nightiscoming.png';
import withThestars from '../images/stars_nft.png';
import summer from '../images/summer.png';
import quiet from '../images/quiet.png';
import travel from '../images/travel.png';
import theRain from '../images/rain.png';

//id, title, price, image
//set nfts like this in order not to repeat the same code


const nfts = [
    {id: 1, 
        title: 'Night is coming', 
        price: 0.12,
        image: nightIscoming},
    {id: 2, 
        title: 'With the stars', 
        price: 0.12,
        image: withThestars},
    {id: 3,
        title: 'Summer', 
        price: 0.12,
        image: summer},
    {id: 4,
        title: 'Quiet', 
        price: 0.14,
        image: quiet},
    {id: 5,
        title: 'Travel', 
        price: 0.12,
        image: travel},
    {id: 6,
        title: 'The rain', 
        price: 0.18,
        image: theRain}
    ]

export default nfts;