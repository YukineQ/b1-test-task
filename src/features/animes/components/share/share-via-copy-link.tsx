import { LuCopy } from "react-icons/lu";

import { CopyToClipboard } from "@/components/copy-to-clipboard";
import { ShareButton } from "./share-button";
import { useShareModal } from "../../hooks/use-share-modal";

export const ShareCopyLink = ({
    stringToCopy = ''
}: {
    stringToCopy: string
}) => {
    const { onClose } = useShareModal()
    return (
        <CopyToClipboard
            onCopy={() => {
                onClose()
            }}
            textToCopy={stringToCopy}
        >
            <ShareButton
                title="Copy link"
                icon={<LuCopy size={18} />}
            />
        </CopyToClipboard>
    )
}