import { FaTelegramPlane, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { ShareButton } from "./share-button";
import { ContentEntityBase } from "@/types";

type ShareSocialLinkProps = {
    link: string;
    data: ContentEntityBase;
}

export const ShareSocialLink = ({ link, data }: ShareSocialLinkProps) => {
    //TODO: curring
    const encodePinterestUrl = () => {
        const pinterestBase = `http://pinterest.com/pin/create/link/?description=        `
        const pinterestTitle = `${data.name}`
        const pinterestParams = `&url=${link}`
        const pinterestMedia = `&media=https://shikimori.one/${data.image.original}`
        return pinterestBase + pinterestTitle + pinterestParams + pinterestMedia
    }

    const encodeTelegramUrl = () => {
        const telegramBase = `https://telegram.me/share/url?text=`
        const telegramText = `${data.name}`
        const telegramParams = `&url=${link}`
        return telegramBase + telegramText + telegramParams
    }

    const encodeTweetUrl = () => {
        const twitterBase = `https://twitter.com/intent/tweet/?text=`
        const tweetText = `${data.name} on @aniDB`
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