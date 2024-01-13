import NextImage from 'next/image';
import { Anchor, Image } from '@mantine/core';
import classes from './SocialMediaItem.module.css';

type Props = {
    url: string;
    logoPath: string;
    alt: string;
};

const SocialMediaItem = ({ url, logoPath, alt }: Props) => (
    <div className={classes.socialItem}>
        <Image className={classes.image} component={NextImage} priority height={25} width={25} fit="contain" src={logoPath} alt={`${alt} logo`} />
        <Anchor href={url} target="_blank">{url}</Anchor>
    </div>
);

export default SocialMediaItem;
