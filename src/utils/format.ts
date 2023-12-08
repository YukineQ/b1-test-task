import {default as daysjs} from 'dayjs'

export const formatDate = (date: Date) => daysjs(date).year()