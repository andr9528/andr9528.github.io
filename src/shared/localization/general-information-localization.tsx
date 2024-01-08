export interface EntityGeneralInformationLocalization {
    country: string
}

export type EntityGeneralInformationLocalizationKeys = keyof EntityGeneralInformationLocalization

export interface ComponentGeneralInformationLocalization {
    sectionHeader: string
    fullNameLabel: string
    dateOfBirthLabel: string
    emailLabel: string
    phoneNumberLabel: string
    fullAddressLabel: string
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
        emailLabel: "Email:",
        sectionHeader: 'General Information',
        fullNameLabel: 'Full Name:',
        dateOfBirthLabel: "Date of Birth:",
        phoneNumberLabel: "Phone Number:",
        fullAddressLabel: "Home Address:"
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
        sectionHeader: 'Generel Information',
        fullNameLabel: 'Fulde Navn:',
        dateOfBirthLabel: "Fødselsdag:",
        phoneNumberLabel: "Telefon Nummer:",
        fullAddressLabel: "Hjemme Adresse:"
    }
}