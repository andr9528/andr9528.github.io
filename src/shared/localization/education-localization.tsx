import { ReactNode } from "react"

export interface EntityEducationLocalization {

}

export type EntityEducationLocalizationKeys = keyof EntityEducationLocalization

export interface ComponentTemplateLocalization {
    sectionHeader: ReactNode
}

export type ComponentEducationLocalizationKeys = keyof ComponentTemplateLocalization

export interface EducationLocalization {
    entityLocalization: EntityEducationLocalization
    componentLocalization: ComponentTemplateLocalization
}

const defaultEducationLocalization: EducationLocalization = {
    entityLocalization: {

    },
    componentLocalization: {
        sectionHeader: 'Education'
    }
}

export const englishEducationLocalization: EducationLocalization = {
    ...defaultEducationLocalization
}

export const danishEducationLocalization: EducationLocalization = {
    ...defaultEducationLocalization,
    entityLocalization: {
        ...defaultEducationLocalization.entityLocalization
    },
    componentLocalization: {
        ...defaultEducationLocalization.componentLocalization,
        sectionHeader: 'Uddanelse'
    }
}