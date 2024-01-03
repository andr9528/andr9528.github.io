import { ReactNode } from "react"

export interface EntityEducationLocalization {
    gradeBachelor: ReactNode
    gradeSoftware: ReactNode
    gradeHtx: ReactNode
    descriptionBachelor: ReactNode
    descriptionSoftware: ReactNode
    descriptionHtx: ReactNode
}

export type EntityEducationLocalizationKeys = keyof EntityEducationLocalization

export interface ComponentEducationLocalization {
    sectionHeader: ReactNode
    joiningWord: ReactNode
    currentEducation: ReactNode
    expectedEnd: ReactNode
    educationDescriptionLabel: ReactNode
}

export type ComponentEducationLocalizationKeys = keyof ComponentEducationLocalization

export interface EducationLocalization {
    entityLocalization: EntityEducationLocalization
    componentLocalization: ComponentEducationLocalization
}

const defaultEducationLocalization: EducationLocalization = {
    entityLocalization: {
        gradeBachelor: 'Bachelor in Software Development',
        gradeSoftware: 'Computer Science',
        gradeHtx: 'Higher Technical Exam',
        descriptionBachelor: 'Subjects I performed well in includes .Net Core, Database and Test.',
        descriptionSoftware: 'Learned about reading and creating a number of UML diagrams, in connection with learning to develop using SCRUM.',
        descriptionHtx: 'Was part of a small class on the Technology and Design line.'
    },
    componentLocalization: {
        sectionHeader: 'Education',
        currentEducation: 'Current education',
        expectedEnd: 'Expected end of education:',
        educationDescriptionLabel: 'Education description:',
        joiningWord: 'at'
    }
}

export const englishEducationLocalization: EducationLocalization = {
    ...defaultEducationLocalization
}

export const danishEducationLocalization: EducationLocalization = {
    ...defaultEducationLocalization,
    entityLocalization: {
        ...defaultEducationLocalization.entityLocalization,
        gradeBachelor: 'Professionsbachelor i Software Udvikling',
        gradeSoftware: 'Datamatiker',
        gradeHtx: 'Højere Teknisk Eksamen',
        descriptionBachelor: 'Fag jeg præstered specielt godt i inkludere .Net Core, Database og Test.',
        descriptionSoftware: 'Lærte at læse og skabe en længere række UML modeller i forbindelse med at blive oplært i udvikling ved brug af SCRUM.',
        descriptionHtx: 'Var del af en lille klasse på Teknologi og Design linjen.'
    },
    componentLocalization: {
        ...defaultEducationLocalization.componentLocalization,
        sectionHeader: 'Uddannelse',
        currentEducation: 'Nuværdende uddannelse',
        expectedEnd: 'Forventet afslutning af uddannelse:',
        educationDescriptionLabel: 'Uddannelse beskrivelse:',
        joiningWord: 'ved'
    }
}