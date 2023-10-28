
export interface HeaderLocalization {
    helloWorld: string
    danish: string
    english: string
}

export type HeaderLocalizationKeys = keyof HeaderLocalization

const defaultHeaderLocalization: HeaderLocalization = {
    helloWorld: 'Hello World',
    danish: 'Danish',
    english: 'English'
}

export const englishHeaderLocalization: HeaderLocalization = {
    ...defaultHeaderLocalization
}

export const danishHeaderLocalization: HeaderLocalization = {
    ...defaultHeaderLocalization,
    helloWorld: 'Hej Verden',
    danish: 'Dansk',
    english: 'Engelsk'
}