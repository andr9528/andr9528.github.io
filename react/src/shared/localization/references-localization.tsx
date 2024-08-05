import { ReactNode } from "react"

export interface EntityReferencesLocalization {
    companyNameTv2: ReactNode
}

export type EntityReferencesLocalizationKeys = keyof EntityReferencesLocalization

export interface ComponentReferencesLocalization {
    sectionHeader: ReactNode
    phoneNumberLabel: ReactNode
    emailLabel: ReactNode
}

export type ComponentReferencesLocalizationKeys = keyof ComponentReferencesLocalization

export interface ReferencesLocalization {
    entityLocalization: EntityReferencesLocalization
    componentLocalization: ComponentReferencesLocalization
}

const defaultReferencesLocalization: ReferencesLocalization = {
    entityLocalization: {
        companyNameTv2: "Tv2 Denmark"
    },
    componentLocalization: {
        sectionHeader: 'References',
        phoneNumberLabel: 'Phone Number',
        emailLabel: 'Email'
    }
}

export const englishReferencesLocalization: ReferencesLocalization = {
    ...defaultReferencesLocalization
}

export const danishReferencesLocalization: ReferencesLocalization = {
    ...defaultReferencesLocalization,
    entityLocalization: {
        ...defaultReferencesLocalization.entityLocalization,
        companyNameTv2: "Tv2 Danmark"
    },
    componentLocalization: {
        ...defaultReferencesLocalization.componentLocalization,
        sectionHeader: 'Referencer',
        phoneNumberLabel: 'Telefonnummer',
    }
}