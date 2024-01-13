import { Box } from '@mantine/core';
import classes from './SocialMedia.module.css';
import SocialMediaItem from './SocialMediaItem/SocialMediaItem';

const SocialMedia = () => {
    const site: { [index: string]: string } = {
        youtube: 'https://www.youtube.com/@margusmoto',
        instagram: 'https://www.instagram.com/margusmoto',
        reddit: 'https://www.reddit.com/r/margusmoto',
    };

    return (
      <Box className={classes.social} px="25px" py="22px" my="30px" mr="140px">
          <SocialMediaItem
            url={site.youtube}
            logoPath={`/${Object.keys(site)[0]}.webp`}
            alt={Object.keys(site)[0]}
          />
          <SocialMediaItem
            url={site.instagram}
            logoPath={`/${Object.keys(site)[1]}.webp`}
            alt={Object.keys(site)[1]}
          />
          <SocialMediaItem
            url={site.reddit}
            logoPath={`/${Object.keys(site)[2]}.webp`}
            alt={Object.keys(site)[2]}
          />
      </Box>
);
};

export default SocialMedia;
