'use client'

import { Filter, FilterButtonArray, FilterButtonArrayLoader, FilterSelect } from "@/components/filter"
import { filterConfig } from "../config/filterConfig"
import { useGenres } from "@/features/genre/api/get-genres"

export const AnimeFilter = () => {
    const { data: genres, isLoading } = useGenres({ entry_type: 'Anime' })

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
            {isLoading && <FilterButtonArrayLoader />}
            {genres && (
                <FilterButtonArray
                    valueKey="genre"
                    data={genres}
                />
            )}
        </Filter>
    )
}