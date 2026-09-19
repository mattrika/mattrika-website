import DateFnsUtils from '@date-io/date-fns'

export const DateUtil = new DateFnsUtils()

export type DateUnit =
    | 'millisecond'
    | 'milliseconds'
    | 'ms'
    | 'second'
    | 'seconds'
    | 's'
    | 'minute'
    | 'minutes'
    | 'm'
    | 'hour'
    | 'hours'
    | 'h'
    | 'day'
    | 'days'
    | 'd'
    | 'D'
    | 'week'
    | 'weeks'
    | 'w'
    | 'month'
    | 'months'
    | 'M'
    | 'year'
    | 'years'
    | 'y'

export function addDuration(value: number, unit: DateUnit): Date {
    switch (unit) {
        case 'millisecond':
        case 'milliseconds':
        case 'ms':
            return DateUtil.addSeconds(DateUtil.date(), value / 1000)

        case 'second':
        case 'seconds':
        case 's':
            return DateUtil.addSeconds(DateUtil.date(), value)

        case 'minute':
        case 'minutes':
        case 'm':
            return DateUtil.addMinutes(DateUtil.date(), value)

        case 'hour':
        case 'hours':
        case 'h':
            return DateUtil.addHours(DateUtil.date(), value)

        case 'day':
        case 'days':
        case 'd':
        case 'D':
            return DateUtil.addDays(DateUtil.date(), value)

        case 'week':
        case 'weeks':
        case 'w':
            return DateUtil.addWeeks(DateUtil.date(), value)

        case 'month':
        case 'months':
        case 'M':
            return DateUtil.addMonths(DateUtil.date(), value)

        case 'year':
        case 'years':
        case 'y':
            return DateUtil.addYears(DateUtil.date(), value)

        default:
            throw new Error(`Unsupported unit: ${unit}`)
    }
}
