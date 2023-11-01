export interface EntityGeneralInformationLocalization {
    firstName: string
    middleName: string
    lastName: string
    phoneNumber: string
    email: string
    dateOfBirth: string
    city: string
    country: string
    address: string
    postalNumber: string
}

export type EntityGeneralInformationLocalizationKeys = keyof EntityGeneralInformationLocalization

export interface ComponentGeneralInformationLocalization {
    fullName: string
    sectionHeader: string
}

export type ComponentGeneralInformationLocalizationKeys = keyof ComponentGeneralInformationLocalization


export interface GeneralInformationLocalization{
    entityLocalization: EntityGeneralInformationLocalization
    componentLocalization: ComponentGeneralInformationLocalization
}

const defaultGeneralLocalization: GeneralInformationLocalization = {
    entityLocalization: {
        firstName: 'André',
        middleName: 'Steenhoff',
        lastName: 'Madsen',
        phoneNumber: '22287257',
        email: 'andre@steenhoff.dk',
        dateOfBirth: new Date(3,1,1996).toString(),
        city: 'Odense',
        country: 'Denmark',
        address: 'Duftrankevej 17 2. mf',
        postalNumber: '5200'
    },
    componentLocalization: {
        fullName: 'Full Name:',
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
        fullName: 'Fulde Navn:',
        sectionHeader: 'Generel information'
    }
}