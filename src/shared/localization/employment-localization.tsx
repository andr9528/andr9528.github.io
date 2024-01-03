import { Link, List, ListItem } from "@mui/material"
import { ReactNode } from "react"

export interface EntityEmploymentLocalization {
    jobTitleApps4All: ReactNode
    jobTitleTv2: ReactNode
    jobTitleOwn: ReactNode
    workDescriptionApps4All: ReactNode
    workDescriptionTv2: ReactNode
    workDescriptionOwn: ReactNode
    employerApps4All: ReactNode
    employerTv2: ReactNode
    employerOwn: ReactNode
}

export type EntityEmploymentLocalizationKeys = keyof EntityEmploymentLocalization

export interface ComponentEmploymentLocalization {
    sectionHeader: ReactNode
    joiningWord1: ReactNode
    joiningWord2: ReactNode
    currentEmployment: ReactNode
    expectedEnd: ReactNode
    expectedStart: ReactNode
    workDescriptionLabel: ReactNode
}

export type ComponentEmploymentLocalizationKeys = keyof ComponentEmploymentLocalization

export interface EmploymentLocalization {
    entityLocalization: EntityEmploymentLocalization
    componentLocalization: ComponentEmploymentLocalization
}

const defaultEmploymentLocalization: EmploymentLocalization = {
    entityLocalization: {
        employerApps4All: 'Apps4All',
        employerTv2: 'Tv2 Danmark',
        employerOwn: 'Myself',
        jobTitleApps4All: 'Junior Developer',
        jobTitleTv2: 'Junior Developer',
        jobTitleOwn: 'Software Developer',
        workDescriptionApps4All: 
        `My primary task was to develop new mobile applications suitable to Android, for using in Point-of-Sale units. 
        Development of the mobile applications i did through the use of Xamarin Forms.
        In addition to this, i also develop some Microservices to support the mobile applications.
        The microservices was deployed to Google Cloud.        
        `,
        workDescriptionTv2: createTv2WorkDescription(
        `I was part of a team of developers who by use of SCRUM, developed on a number of internal tools, some of which are Open Source projects. 
        Some of the projects i have contributed to include the repositories linked to below.

        On the Cliptool project, i rewrote the frontend side of the application, mainly to limit the amount of components per file to one.
        The rewrite was also done to apply a better file structure to the project, as it was difficult to know where different components were located beforehand.
        I also rewrote parts of the backend of Cliptool in the process, mainly to save changes to settings for between sessions better than before.
        During this rewrite, i managed to fix a number of smaller bugs, and introduce the ability to hide selected files from the GUI.
        
        On the Sofie project, i helped with creating parts of the backend, related to interacting with the underlying mongo database and the frontend facing presentation layer.
        I also helped with moving over parts of the company specific code from the old repository, to the new structure.
        
        All in all, i went from newer having touched or used Typescript, to now feeling just as comfortable in that as i am in C#.`
        ),
        workDescriptionOwn: createOwnWorkDescription(
            {
                baseText: 
                `Part time work on a number of my own projects, that has been sidelined during my time at Tv2.
                These can be shelved with moments notice, should a new job opportunity arise.
                As they are my own projects, I do not earn anything working on this, other than what support i get from the state.
                The order of the below listed projects, are the order that i focus on them.
                `,
                tracker: 
                `A highly modular program usable to track a number of things, depending on the modules included. 
                Will be developed using C#, Entity Framework Core and Maui as frontend.
                Planned modules include: Dining, Budget and Time.
                `,
                gameDev: 
                `I have a game in mind that i would like to slowly get started on.
                Currently i have noted down many details of the planned game, but have not started on any code for it yet.
                I am heavily leaning toward using Godot as the game engine of choice, mainly for the C# language, but also due to the controversy about Unity during 2023.
                The game genre will be Tower Defence / Rougelike, with inspiration from a number of Mythologies, as a nod to my liking of 'Age of Mythology'. 
                `,                
                moddingDev: 
                `I have some ideas for mods for one of my favorit games as of late, Oxygen Not Included, which i might spend some time on bringing to life.
                Some of the ideas i have shared with other modders for the game, and i will thus likely spar with them if needed.
                The game is developer using Unity, therefore C# is the language to be used, which is an advantage for me.
                It uses uses 'Harmony' as the access point for modders, which might help me learn it for use my own game, if Godot allows it.
                `
            }
        )
        
        
    },
    componentLocalization: {
        sectionHeader: 'Employment History',
        joiningWord1: 'at',
        joiningWord2: 'by',
        currentEmployment: 'Current employment',
        expectedEnd: 'Expected end of employment: ',
        expectedStart: 'Expected start of employment: ',
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
        employerOwn: 'Mig selv',
        jobTitleApps4All: 'Junior Udvikler',
        jobTitleTv2: 'Junior Udvikler',
        jobTitleOwn: 'Software Udvikler',
        workDescriptionApps4All: 
        `Min primære arbejdsopgave var at udvikle nye mobil applikationer egnet til Android, til brug på Point-of-sale enheder.
        Udviklingen af mobil applikationer gjorde jeg gennem Xamarim Forms.
        Dertil udviklet jeg også nogle Microservicer til at understøtte mobil applikationerne.
        Microservicerne blev sat i funktion via Google Cloud.        
        `,
        workDescriptionTv2: createTv2WorkDescription(
        `Jeg deltog i et team af udviklere hvor vi ved brug af SCRUM, udviklet og forbedret på en række interne værktøjer, hvor nogle af dem er Open Source. 
         Nogle af de Open Source projekter som jeg har bidraget til er listed længere nede.
         
         På Cliptool projected, genskrev jeg frontend siden af programmet, hovedsagelidt for at begrænse antallet af komponenter per fil til en.
         Omskrivningen betød også at en bedre fil struktur blev påført projektet, da det før var besværligt at finde komponenter man havde brug for at rette i.
         Under omskrivning blev backenden også rettet, hovedsageligt for at bedre gemme ændringer til indstillinger mellem sessioner, end det blev gjort før.
         I forbindelse med omskrivningen fik jeg også rettet en række fejl, og introduceret muligheden for at skjule valgte filer fra brugergrænsefladen.
         
         På Sofie Projektet, hjælp jeg med at skabe dele af backenden relateret til interaktionen med den underligende mongo database, samt den frontend rettet presentations lag.
         Jeg hjælp også med at flytte dele af den virksomheds specifikke kode fra det gamle repository over i den nye struktur.
         
         Alt i alt, så er jeg gået fra ikke at have rørt eller anvendt Typescript, til nu at føle mig lige så komfortable i det som i C#.`
        ),
        workDescriptionOwn: createOwnWorkDescription(
            {
                baseText: 
                `Deltidsarbejde på en række af mine egne projekter, som har været sat på sidelinjen mens jeg har været ansat ved Tv2.
                Disse projekter kan sætte tilbage på hylden med et øjebliks varsel, skulle jeg blive tilbudt en stilling.
                Da disse projekter er mine egne, tjener jeg ikke noget mens jeg arbejder på dem, andet end den støtte jeg får af staten.
                Orderen på projekter under her, er den order som jeg fokuserer på dem.
                `,
                tracker: 
                `Et højt modulært program til at holde styr på en række forskellige ting, defineret af de moduler der bliver lavet.
                Programmet vil blive lavet med C#, Entity Framework Core og Maui som frontend.
                Planlagte moduler inkludere madplanlægning, budget og tidsforbrug.
                `, 
                gameDev: 
                `Jeg har et spil i tankerne som jeg gerne vil langsomt begynde på.
                Har på nuværdene tidspunkt en længere række noter omkring spillet, men ikke noget aktuel kode til det.
                Jeg har et ønske om at bruge Godot som den valgte game engine, hovedsagelidt på grund af dens brug af C#, samt den kontrovers angående Unity som skete i løbet af 2023.
                Spillet vil være under genren Tower Defence / Rougelike, med inspiration fra en række mytologier, da jeg elsker spillet 'Age of Mythology'.
                `,
                moddingDev: 
                `Jeg har nogle ideer til nogle mods til mit nuværdene favorit spil, Oxygen Not Included, som jeg gerne vil bruge lidt tid på at bringe til live, hvis muligt.
                Nogle af disse ideer har jeg delt med andre moddere af spillet, og vil derfor muligvis kunne sparre med dem, hvis jeg har brug for det.
                Spillet er udviklet med Unity, derfor bliver C# brugt, som er en fordel.
                Modders interaction med spillet sker gennem 'Harmony', som jeg gerne vil lære om, da jeg muligvis kan bruge det til mit eget spil.
                `
            }
        )
    },
    componentLocalization: {
        ...defaultEmploymentLocalization.componentLocalization,
        sectionHeader: 'Ansættelseshistorik',
        joiningWord1: 'ved',
        joiningWord2: 'for',
        currentEmployment: 'Nuværdene Arbejde',
        expectedEnd: 'Forventet slutning på ansættelse: ',
        expectedStart: 'Forventet start på ansættelse: ',
        workDescriptionLabel: 'Beskrivelse af Arbejdsopgaver:'
    }
}

function createTv2WorkDescription(baseText: string): ReactNode {
    return <>
        {baseText}
    <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
            <Link href="https://github.com/tv2/casparcg-cliptool">
            https://github.com/tv2/casparcg-cliptool
            </Link>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
            <Link href="https://github.com/tv2/sofie-server">
            https://github.com/tv2/sofie-server
            </Link>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
            <Link href="https://github.com/tv2/ng-sofie">
            https://github.com/tv2/ng-sofie
            </Link>
        </ListItem>
    </List>
    </>
}

function createOwnWorkDescription(parts: {baseText: string, tracker: string, gameDev: string, moddingDev: string}): ReactNode {
    return <>
        {parts.baseText}
    <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
            {parts.tracker}
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
            {parts.gameDev}
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
            {parts.moddingDev}
        </ListItem>
    </List>
    </>
}