
export interface HeaderLocalization {
    siteTitle: string
    danishButton: string
    englishButton: string
    printButton: string
}

export type HeaderLocalizationKeys = keyof HeaderLocalization

const defaultHeaderLocalization: HeaderLocalization = {
    siteTitle: 'André Resume Site',
    danishButton: 'Dansk',
    englishButton: 'English',
    printButton: 'Download'
}

export const englishHeaderLocalization: HeaderLocalization = {
    ...defaultHeaderLocalization
}

export const danishHeaderLocalization: HeaderLocalization = {
    ...defaultHeaderLocalization,
    siteTitle: 'André CV Side',
}