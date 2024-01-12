import { ReactNode } from "react"

export interface EntityLanguageLocalization {
    danishLanguage: ReactNode,
    englishLanguage: ReactNode
    germanLanguage: ReactNode
}

export type EntityLanguageLocalizationKeys = keyof EntityLanguageLocalization

export interface ComponentLanguageLocalization {
    sectionHeader: ReactNode
}

export type ComponentLanguageLocalizationKeys = keyof ComponentLanguageLocalization

export interface LanguageLocalization {
    entityLocalization: EntityLanguageLocalization
    componentLocalization: ComponentLanguageLocalization
}

const defaultLanguageLocalization: LanguageLocalization = {
    entityLocalization: {
        danishLanguage: 'Danish',
        englishLanguage: 'English',
        germanLanguage: 'German'
    },
    componentLocalization: {
        sectionHeader: 'Languages'
    }
}

export const englishLanguageLocalization: LanguageLocalization = {
    ...defaultLanguageLocalization
}

export const danishLanguageLocalization: LanguageLocalization = {
    ...defaultLanguageLocalization,
    entityLocalization: {
        ...defaultLanguageLocalization.entityLocalization,
        danishLanguage: 'Dansk',
        englishLanguage: 'Engelsk',
        germanLanguage: 'Tysk'
    },
    componentLocalization: {
        ...defaultLanguageLocalization.componentLocalization,
        sectionHeader: 'Sprog'
    }
}