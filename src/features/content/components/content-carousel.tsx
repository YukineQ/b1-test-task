import { Carousel, CarouselContent, CarouselItem, CarouselLink, CarouselNext, CarouselPrevious } from "@/components/ui"
import { ContentEntityBase } from "@/types"

type ContentCardProps<T> = {
    data: T[];
    href: string | URL;
    title: string;
    CardComponent: ({
        data,
        imagePriority
    }: {
        data: T,
        imagePriority: boolean
    }) => React.JSX.Element;
}

export const ContentCarousel = <
    T extends ContentEntityBase,
>({
    data,
    href,
    title,
    CardComponent
}: ContentCardProps<T>) => {
    return (
        <Carousel
            opts={{
                slidesToScroll: 7,
                align: 'center'
            }}
        >
            <CarouselLink href={href}>
                {title}
            </CarouselLink>
            <CarouselContent>
                {data.map((item, index) => (
                    <CarouselItem key={item.id} className="basis-[0.1428]">
                        <CardComponent
                            data={item}
                            imagePriority={index < 7}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext className="top-[calc(50%-0.5rem)]" />
            <CarouselPrevious className="top-[calc(50%-0.5rem)]" />
        </Carousel>
    )
}