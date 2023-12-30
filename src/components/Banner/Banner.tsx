import NextImage from 'next/image';
import { Image } from '@mantine/core';
import classes from './Banner.module.css';
import BannerBackground1440 from '../../../public/BannerBackground1440.png';

const Banner = () => (
        <div className={classes.banner}>
            <Image component={NextImage} priority h={120} fit="fill" src={BannerBackground1440} alt="Banner image of a red tank" />
        </div>
    );

export default Banner;
