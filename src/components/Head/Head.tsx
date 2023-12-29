import NextImage from 'next/image';
import { Image } from '@mantine/core';
import classes from './Head.module.css';
import HeaderBackground1440 from '../../../public/HeaderBackground1440.png';

const Head = () => (
        <div className={classes.head}>
            <Image component={NextImage} priority h={120} fit="fill" src={HeaderBackground1440} alt="Header image of a red tank" />
        </div>
    );

export default Head;
