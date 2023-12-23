import defaultImg from '../images/blank.png'
const imgUrl=(url:string)=>{
    const imgUrl=url ? url.replace('/media/games/','/media/crop/600/400/games/') : defaultImg;
    return imgUrl;
}

export default imgUrl;