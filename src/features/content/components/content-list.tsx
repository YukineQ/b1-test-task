import React from 'react'
import { InfiniteData } from "@tanstack/react-query"

import { ContentEntityBase } from "@/types";
import { ContentCard, ContentCardProps } from '@/features/content/components/content-card';

type ContentListProps = {
    data: InfiniteData<ContentEntityBase[], unknown>;
    children: (data: ContentEntityBase) => React.ReactNode;
}

export const ContentList = ({
    data,
    children
}: ContentListProps) => {

    const rendredData = () => {
        return data.pages.map((page, idx) => (
            <React.Fragment key={'page' + idx}>
                {page.map(item => (
                    <React.Fragment key={item.id}>
                        {children(item)}
                    </React.Fragment>
                ))}
            </React.Fragment>
        ))
    }

    return (
        <div className="grid grid-cols-7 gap-3">
            {rendredData()}
        </div>
    )
}