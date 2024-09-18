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
        `I am an easy-to-learn, logically thinking developer with experience in C# / .Net. During my most recent position at Tv2 Danmark, I also gained experience with TypeScript / React.

        As a background, I have a Computer Science degree and on top of that a Bachelor in Software Development. This education, along with my sense of logic, allows me to understand other coding languages to some degree, even if I have no previous experience with them.

        When I develop I strive to adhere to the DRY and SOLID principles as much as possible. With these principles in focus, I fell that code gets a good quality.`
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
        `Jeg er en lærenem logisk tænkende udvikler, med erfaring i C# / .Net. Jeg har også under min seneste stilling ved Tv2 Danmark fået erfaring med TypeScript / React. Fra min uddannelse og stilling ved Tv2 Danmark har jeg også fået erfaring i udvikling under SCRUM.

        Som baggrund har jeg en Datamatiker og oven på den en Bachelor i Softwareudvikling. Denne uddannelse sammen med min logiske sans, tillader mig at forstå andre kodesprog i en vis grad, også selvom jeg ingen tidligere erfaring har med dem.
        
        Når jeg udvikler stræber jeg efter at overholde principperne DRY og SOLID, så godt som muligt. Med disse principper i fokus, føler jeg at kode får en god kvalitet.`
    }
}