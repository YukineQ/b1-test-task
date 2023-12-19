'use client'

import { useSearchParams, useRouter } from "next/navigation"
import qs from "query-string";
import { Button, Select, SelectPropsPassThrough } from "./ui";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Gallery, GalleryScrollContainer } from "./gallery";

type UseFilterProps = {
    valueKey: string;
}

const useFilter = ({ valueKey }: UseFilterProps) => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const selectedValue = searchParams.get(valueKey)

    const handleFilter = (value: string | number) => {
        const current = qs.parse(searchParams.toString())

        const query = {
            ...current,
            [valueKey]: value
        }

        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipNull: true })

        router.push(url)
    }

    return { handleFilter, selectedValue }
}

type FilterProps = React.HTMLAttributes<HTMLDivElement>

const Filter = ({ className, ...props }: FilterProps) => {
    return (
        <div
            className={twMerge('flex flex-row w-full gap-3 bg-secondary p-3 rounded-xl shadow', className)}
            {...props}
        />
    )
}

type FilterSelectProps = {
    valueKey: string;
    className?: string;
} & SelectPropsPassThrough

const FilterSelect = ({
    valueKey,
    options,
    placeholder,
    className,
}: FilterSelectProps) => {
    const { handleFilter, selectedValue } = useFilter({ valueKey })

    return (
        <Select
            className={className}
            options={options}
            defaultValue={selectedValue ?? undefined}
            placeholder={placeholder}
            callback={handleFilter}
        />
    )
}

type FilterButtonArrayProps = {
    data: (Record<string, unknown> & {
        id: number;
        name: string;
    })[];
    valueKey: string;
}

const FilterButtonArray = ({ data, valueKey }: FilterButtonArrayProps) => {
    const { handleFilter, selectedValue } = useFilter({ valueKey })

    return (
        <Gallery>
            <GalleryScrollContainer arrowClassName="h-8 w-8 top-4" scrollContainerClassName="px-0 py-2">
                {data.map((item) => (
                    <Button
                        key={item.id}
                        onClick={() => handleFilter(item.id)}
                        variant='bright'
                        className={twMerge(
                            "w-fit whitespace-nowrap",
                            selectedValue === String(item.id) && 'bg-primary text-white'
                        )}
                        size='sm'
                    >
                        {item.name}
                    </Button>
                ))}
            </GalleryScrollContainer>
        </Gallery>
    )
}

export { Filter, FilterSelect, FilterButtonArray }