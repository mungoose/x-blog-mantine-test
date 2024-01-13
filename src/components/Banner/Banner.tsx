import NextImage from 'next/image';
import { Image, BackgroundImage } from '@mantine/core';
import classes from './Banner.module.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import MarMotLogo200 from '../../../public/MarMotLogo200.png';

const Banner = () => (
        <div className={classes.banner}>
            <BackgroundImage src="/BannerBackground1440.webp">
                <SocialMedia />
                <Image component={NextImage} priority h={100} w="auto" fit="contain" src={MarMotLogo200} alt="MarMot logo" />
                Text
            </BackgroundImage>
        </div>
    );

export default Banner;
