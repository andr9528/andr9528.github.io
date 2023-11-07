import { ReactNode } from "react"

export interface EntityProfileLocalization {

}

export type EntityProfileLocalizationKeys = keyof EntityProfileLocalization

export interface ComponentProfileLocalization {
    sectionHeader: ReactNode
    description: ReactNode
}

export type ComponentProfileLocalizationKeys = keyof ComponentProfileLocalization

export interface ProfileLocalization {
    entityLocalization: EntityProfileLocalization
    componentLocalization: ComponentProfileLocalization
}

const defaultProfileLocalization: ProfileLocalization = {
    entityLocalization: {

    },
    componentLocalization: {
        sectionHeader: 'Profile',
        description: 
        `Young logical thinking quick learning developer who is seeking a new job. Additionally i am also a problemsolver, who generally thinks innovatively.
        Lastly i am educated in the use of Scrum, and the use of its many UML models.`
    }
}

export const englishProfileLocalization: ProfileLocalization = {
    ...defaultProfileLocalization
}

export const danishProfileLocalization: ProfileLocalization = {
    ...defaultProfileLocalization,
    entityLocalization: {
        ...defaultProfileLocalization.entityLocalization
    },
    componentLocalization: {
        ...defaultProfileLocalization.componentLocalization,
        sectionHeader: 'Profil',
        description: 
        `Ung lærenem logisk tænkende udvikler der søger job. Er en rigtig god problemløser, som tænker innovativt. 
        Er også oplært i brugen af Scrum, med dens dertil mange UML modeller.`
    }
}