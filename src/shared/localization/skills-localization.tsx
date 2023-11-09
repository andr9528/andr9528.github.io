import { ReactNode } from "react"

export interface EntitySkillsLocalization {

}

export type EntitySkillsLocalizationKeys = keyof EntitySkillsLocalization

export interface ComponentSkillsLocalization {
    sectionHeader: ReactNode
}

export type ComponentSkillsLocalizationKeys = keyof ComponentSkillsLocalization

export interface SkillsLocalization {
    entityLocalization: EntitySkillsLocalization
    componentLocalization: ComponentSkillsLocalization
}

const defaultSkillsLocalization: SkillsLocalization = {
    entityLocalization: {

    },
    componentLocalization: {
        sectionHeader: 'Skills'
    }
}

export const englishSkillsLocalization: SkillsLocalization = {
    ...defaultSkillsLocalization
}

export const danishSkillsLocalization: SkillsLocalization = {
    ...defaultSkillsLocalization,
    entityLocalization: {
        ...defaultSkillsLocalization.entityLocalization
    },
    componentLocalization: {
        ...defaultSkillsLocalization.componentLocalization,
        sectionHeader: 'Evner'
    }
}