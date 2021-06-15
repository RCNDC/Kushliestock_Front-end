
import {Link } from 'react-router-dom';
import cowsImage from '../../images/cows.png';
import {useMediaQuery} from 'react-responsive';

const KushHomeRight = () => {

    const verticalLinks = useMediaQuery({ query: "(max-width: 650px)" });

    return <div className="kush-home-right">
         <div className="top">
            <div className={verticalLinks ? 'links vertical-links':'links'}>
                <Link className="link" to='/' >About Us</Link>
                <Link className="link" to='/' >Blog</Link>
                <Link className="link" to='/' >Contact Us</Link>
                <Link className="link" to='/' >Services</Link>
                <Link className="link" to='/' >Flash Deals</Link>
            </div>
         </div>
         <div className="bottom">
             <img src={cowsImage} className='img-fluid' alt="" />
         </div>
    </div>


}
export default KushHomeRight;