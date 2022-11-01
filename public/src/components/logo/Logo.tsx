// import Image from 'next/image';
import Style from './logo.module.scss';
import { LogoProps } from './types';


const Logo=({ width, height, ...rest }: LogoProps)=> {
    return (
        <div style={{ 'height': height, 'width': width }} {...rest}>
            <img className={ Style.img } alt='siteLogo' src='https://cdn.logo.com/hotlink-ok/logo-social.png'/>
        </div>
    );
};

export default Logo;
