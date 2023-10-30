
export interface HeaderLocalization {
    siteTitle: string
    danishButton: string
    englishButton: string
    printButton: string
}

export type HeaderLocalizationKeys = keyof HeaderLocalization

const defaultHeaderLocalization: HeaderLocalization = {
    siteTitle: 'André CV Site',
    danishButton: 'Danish',
    englishButton: 'English',
    printButton: 'Print'
}

export const englishHeaderLocalization: HeaderLocalization = {
    ...defaultHeaderLocalization
}

export const danishHeaderLocalization: HeaderLocalization = {
    ...defaultHeaderLocalization,
    siteTitle: 'André CV Side',
    danishButton: 'Dansk',
    englishButton: 'Engelsk',
    printButton: 'Udskriv'
}