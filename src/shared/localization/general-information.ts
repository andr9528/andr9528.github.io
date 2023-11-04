export interface EntityGeneralInformationLocalization {
    country: string
}

export type EntityGeneralInformationLocalizationKeys = keyof EntityGeneralInformationLocalization

export interface ComponentGeneralInformationLocalization {
    fullNameLabel: string
    sectionHeader: string
}

export type ComponentGeneralInformationLocalizationKeys = keyof ComponentGeneralInformationLocalization


export interface GeneralInformationLocalization{
    entityLocalization: EntityGeneralInformationLocalization
    componentLocalization: ComponentGeneralInformationLocalization
}

const defaultGeneralLocalization: GeneralInformationLocalization = {
    entityLocalization: {
        country: 'Denmark',
    },
    componentLocalization: {
        fullNameLabel: 'Full Name:',
        sectionHeader: 'General Information'
    }
}

export const englishGeneralLocalization: GeneralInformationLocalization = {
    ...defaultGeneralLocalization
}

export const danishGeneralLocalization: GeneralInformationLocalization = {
    ...defaultGeneralLocalization,
    entityLocalization: {
        ...defaultGeneralLocalization.entityLocalization,
        country: 'Danmark'
    },
    componentLocalization: {
        ...defaultGeneralLocalization.componentLocalization,
        fullNameLabel: 'Fulde Navn:',
        sectionHeader: 'Generel information'
    }
}