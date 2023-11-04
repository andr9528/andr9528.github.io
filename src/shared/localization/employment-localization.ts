export interface EntityEmploymentLocalization {
    jobTitleApps4All: string
    jobTitleTv2: string
    workDescriptionApps4All: string
    workDescriptionTv2: string
}

export type EntityEmploymentLocalizationKeys = keyof EntityEmploymentLocalization

export interface ComponentEmploymentLocalization {
    sectionHeader: string
    joiningWord: string
    currentEmployment: string
    expectedEnd: string
    workDescriptionLabel: string
}

export type ComponentEmploymentLocalizationKeys = keyof ComponentEmploymentLocalization

export interface EmploymentLocalization {
    entityLocalization: EntityEmploymentLocalization
    componentLocalization: ComponentEmploymentLocalization
}

const defaultEmploymentLocalization: EmploymentLocalization = {
    entityLocalization: {
        jobTitleApps4All: 'Junior Developer',
        jobTitleTv2: 'Junior Developer',
        workDescriptionApps4All: 
        `My primary task was to develop new mobile applications suitable to Android, for using in Point-of-Sale units. 
        Development of the mobile applications i did throught the use of Xamarin Forms.
        In addition to this, i also develop some microserivces to support the mobile applications.
        The microservices was deployed to Google Cloud.        
        `,
        workDescriptionTv2: 
        `I was part of a team of developers who by use of SCRUM, developed on a number of internal tools, some of which are Open Source porjects. 
            Some of the projects i have contributed to include the following.
            - https://github.com/tv2/casparcg-cliptool
            - https://github.com/tv2/sofie-server
        `
    },
    componentLocalization: {
        sectionHeader: 'Employment History',
        joiningWord: 'at',
        currentEmployment: 'Current Employment',
        expectedEnd: 'Expected end of employment: ',
        workDescriptionLabel: 'Description of Performed Work:'
    }
}

export const englishEmploymentLocalization: EmploymentLocalization = {
    ...defaultEmploymentLocalization
}

export const danishEmploymentLocalization: EmploymentLocalization = {
    ...defaultEmploymentLocalization,
    entityLocalization: {
        ...defaultEmploymentLocalization.entityLocalization,
        jobTitleApps4All: 'Junior Udvikler',
        jobTitleTv2: 'Junior Udvikler',
        workDescriptionApps4All: 
        `Min primære arbejdsopgave var at udvikle nye mobil applikationer egnet til Android, til brug på Point-of-sale enheder.
        Udviklingen af mobil applikationer gjorde jeg gennem Xamarim Forms.
        Dertil udviklet jeg også nogle Microservicer til at understøtte mobil applikationerne.
        Microservicerne blev sat i funktion via Google Cloud.        
        `,
        workDescriptionTv2: 
        `Jeg deltog i et team af udviklere hvor vi ved brug af SCRUM, udviklet og forbedret på en række interne værktøjer, hvor nogle af dem er Open Source. 
         Nogle af de Open Source projekter som jeg har bidraget til er de følgende.
         - https://github.com/tv2/casparcg-cliptool 
         - https://github.com/tv2/sofie-server
        `
    },
    componentLocalization: {
        ...defaultEmploymentLocalization.componentLocalization,
        sectionHeader: 'Ansættelseshistorik',
        joiningWord: 'ved',
        currentEmployment: 'Nuværdene Arbejde',
        expectedEnd: 'Forvented slutning på ansættelse: ',
        workDescriptionLabel: 'Beskrivelse af Arbejdsopgaver:'
    }
}