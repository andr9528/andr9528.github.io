// Template file whose content can be copied for when creating a new localization file.

import { ReactNode } from "react"

export interface EntityTemplateLocalization {

}

export type EntityTemplateLocalizationKeys = keyof EntityTemplateLocalization

export interface ComponentTemplateLocalization {
    sectionHeader: ReactNode
}

export type ComponentTemplateLocalizationKeys = keyof ComponentTemplateLocalization

export interface TemplateLocalization {
    entityLocalization: EntityTemplateLocalization
    componentLocalization: ComponentTemplateLocalization
}

const defaultTemplateLocalization: TemplateLocalization = {
    entityLocalization: {

    },
    componentLocalization: {
        sectionHeader: 'Placeholder'
    }
}

export const englishTemplateLocalization: TemplateLocalization = {
    ...defaultTemplateLocalization
}

export const danishTemplateLocalization: TemplateLocalization = {
    ...defaultTemplateLocalization,
    entityLocalization: {
        ...defaultTemplateLocalization.entityLocalization
    },
    componentLocalization: {
        ...defaultTemplateLocalization.componentLocalization,
        sectionHeader: 'Midlertidig'
    }
}