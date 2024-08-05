import { ReactNode } from "react"

export interface EntityLinksLocalization {
    remarkGitHub: string
    remarkLinkedIn: string
    remarkPersonalPage: string
    titleGitHub: string,
    titleLinkedIn: string
    titlePersonalPage: string
}

export type EntityLinksLocalizationKeys = keyof EntityLinksLocalization

export interface ComponentLinksLocalization {
    sectionHeader: ReactNode
}

export type ComponentLinksLocalizationKeys = keyof ComponentLinksLocalization

export interface LinksLocalization {
    entityLocalization: EntityLinksLocalization
    componentLocalization: ComponentLinksLocalization
}

const defaultLinksLocalization: LinksLocalization = {
    entityLocalization: {
        remarkGitHub: "Take a peek at my previous code.",
        remarkLinkedIn: "Don't mind the weird looking link, LinkedIn doesn't like my apostrophe.",
        remarkPersonalPage: "To view this CV online.",
        titleGitHub: "GitHub",
        titleLinkedIn: "LinkedIn",
        titlePersonalPage: "Personal Webpage",
    },
    componentLocalization: {
        sectionHeader: 'Links'
    }
}

export const englishLinksLocalization: LinksLocalization = {
    ...defaultLinksLocalization
}

export const danishLinksLocalization: LinksLocalization = {
    ...defaultLinksLocalization,
    entityLocalization: {
        ...defaultLinksLocalization.entityLocalization,
        remarkGitHub: "Tag et kig på min tidligere kode.",
        remarkLinkedIn: "Tag dig ikke af at linket ser lidt underlidt ud, LinkedIn kan ikke lide min apostrof.",
        remarkPersonalPage: "Til at se dette CV online.",
        titlePersonalPage: "Personlig hjemmeside"
    },
    componentLocalization: {
        ...defaultLinksLocalization.componentLocalization,        
    }
}