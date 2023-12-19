'use client'

import { Filter, FilterButtonArray, FilterSelect } from "@/components/filter"
import { filterConfig } from "../config/filterConfig"
import { useGenres } from "@/features/genre/api/get-genres"

export const AnimeFilter = () => {
    const { data: genres } = useGenres({ entry_type: 'Anime' })
    console.log(genres)
    if (!genres) return null
    return (
        <Filter className="flex flex-col">
            <div className="flex flex-row gap-2">
                <FilterSelect
                    placeholder="Order"
                    valueKey={filterConfig.ByOrder.valueKey}
                    options={filterConfig.ByOrder.options}
                />
                <FilterSelect
                    placeholder="Year"
                    valueKey={filterConfig.ByYear.valueKey}
                    options={filterConfig.ByYear.options}
                />
                <FilterSelect
                    placeholder="Kind"
                    valueKey={filterConfig.ByKind.valueKey}
                    options={filterConfig.ByKind.options}
                />
                <FilterSelect
                    placeholder="Score"
                    valueKey={filterConfig.ByScore.valueKey}
                    options={filterConfig.ByScore.options}
                />
            </div>
            <FilterButtonArray
                valueKey="genre"
                data={genres}
            />
        </Filter>
    )
}