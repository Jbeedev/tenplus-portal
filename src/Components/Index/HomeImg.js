import HomeImg from '../assets/Images/home-img.png';
import './HomeImg.css';

const HomeImage = () => {
    return ( 
        <div className="cont">
            <div class="banner-innerpage" style={{backgroundImage:`url(${HomeImg})`}} >
                
            </div>
        </div>
     );
}
 
export default HomeImage;