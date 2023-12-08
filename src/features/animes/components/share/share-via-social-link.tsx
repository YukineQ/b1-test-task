import { FaTelegramPlane, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Anime } from "../../types";
import { ShareButton } from "./share-button";

type ShareSocialLinkProps = {
    link: string;
    anime: Anime;
}

export const ShareSocialLink = ({ link, anime }: ShareSocialLinkProps) => {
    //TODO: curring
    const encodePinterestUrl = () => {
        const pinterestBase = `http://pinterest.com/pin/create/link/?description=        `
        const pinterestTitle = `${anime.name}`
        const pinterestParams = `&url=${link}`
        const pinterestMedia = `&media=https://shikimori.one/${anime.image.original}`
        return pinterestBase + pinterestTitle + pinterestParams + pinterestMedia
    }

    const encodeTelegramUrl = () => {
        const telegramBase = `https://telegram.me/share/url?text=`
        const telegramText = `${anime.name}`
        const telegramParams = `&url=${link}`
        return telegramBase + telegramText + telegramParams
    }

    const encodeTweetUrl = () => {
        const twitterBase = `https://twitter.com/intent/tweet/?text=`
        const tweetText = `${anime.name} on @aniDB`
        const tweetParams = `&url=${link}`
        return twitterBase + tweetText + tweetParams
    }

    return (
        <div className='flex flex-col'>
            <ShareButton
                icon={<FaTelegramPlane size={18} />}
                title="Telegram"
                link={encodeTelegramUrl()}
                className="rounded-b-none"
            />
            <ShareButton
                icon={<FaPinterest size={18} />}
                title="Pinterest"
                link={encodePinterestUrl()}
                className="rounded-none"
            />
            <ShareButton
                icon={<FaXTwitter />}
                title="Twitter"
                link={encodeTweetUrl()}
                className="rounded-t-none"
            />
        </div>
    )
}