export const filterConfig = {
    ByYear: {
        valueKey: 'season',
        options: [
            { label: 'All years', value: '', },
            { label: '2023 year', value: 2023, },
            { label: '2022 year', value: 2022, },
            { label: '2021 year', value: 2021, },
            { label: '2020 year', value: 2020, },
            { label: '2019 year', value: 2019, },
            { label: '2018 year', value: 2018, },
            { label: '2017 year', value: 2017, },
            { label: '2016 year', value: 2016, },
            { label: '2010-2015', value: '2010_2015', },
            { label: '2000-2010', value: '2000_2010', },
            { label: '1990-2000', value: '1990_2000', },
            { label: '1980-1990', value: '1980_1990', },
            { label: 'before 1980', value: '1900_1980', },
        ]
    },
    ByKind: {
        valueKey: 'kind',
        options: [
            { label: 'All kind', value: '', },
            { label: 'tv', value: 'tv', },
            { label: 'movie', value: 'movie', },
            { label: 'ova', value: 'ova', },
            { label: 'ona', value: 'ona', },
            { label: 'special', value: 'special', },
            { label: 'music', value: 'music', },
            { label: 'tv 13', value: 'tv_13', },
            { label: 'tv 24', value: 'tv_24', },
            { label: 'tv 48', value: 'tv_48', },
        ],
    },
    ByOrder: {
        valueKey: 'order',
        options: [
            { label: 'ranked', value: 'ranked', },
            { label: 'popularity', value: 'popularity', },
            { label: 'name', value: 'name', },
            { label: 'released date', value: 'aired_on', },
            { label: 'episodes', value: 'episodes', },
        ],
    },
    ByScore: {
        valueKey: 'score',
        options: [
            { label: 'All scores', value: '', },
            { label: 'More than 9', value: 9, },
            { label: 'More than 8', value: 8, },
            { label: 'More than 7', value: 7, },
            { label: 'More than 6', value: 6, },
        ],
    },
}
