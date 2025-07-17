import { Box, Link, List, ListItem } from "@mui/material"
import { ReactNode } from "react"
import { PageBreak } from "../components/page-break"

export interface EntityEmploymentLocalization {
    jobTitleApps4All: ReactNode
    jobTitleTv2: ReactNode
    // jobTitleOwn: ReactNode
    jobTitleFashionheroInternship: ReactNode
    jobTitleNoergaardMikkelsenInternship: ReactNode
    jobTitleFlowpointInternship: ReactNode
    workDescriptionApps4All: ReactNode
    workDescriptionTv2: ReactNode
    workDescriptionNoergaardMikkelsenInternship : ReactNode
    workDescriptionFlowpointInternship : ReactNode
    // workDescriptionOwn: ReactNode
    workDescriptionFashionheroInternship: ReactNode
    employerApps4All: ReactNode
    employerTv2: ReactNode
    // employerOwn: ReactNode
    employerFashionheroInternship: ReactNode
    employerNoergaardMikkelsenInternship: ReactNode
    employerFlowpointInternship: ReactNode
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
        // employerOwn: 'Myself',
        jobTitleApps4All: 'Mobile Developer',
        jobTitleTv2: 'Software Developer',
        // jobTitleOwn: 'Software Developer',
        workDescriptionApps4All: `My primary task was to develop new mobile applications suitable to Android, for using in Point-of-Sale units. 
        Development of the mobile applications i did through the use of Xamarin Forms.
        In addition to this, i also develop some Microservices to support the mobile applications.
        The microservices was deployed to Google Cloud.        
        `,
        workDescriptionTv2: createTv2WorkDescription(
            `This position ended due to a contract running out, and it not being able to be renewed, not because i was fired.
            I was part of a team of developers who by use of SCRUM, developed on a number of internal tools, some of which are Open Source projects. 
        Some of the projects i have contributed to have since my contract ran out been changed to be Closed Source. I do know that this change is only temporary.
        Down below are links to projects i have contributed to. Some of those links might not work, because of the change to Closed Source. 

        On the Cliptool project, i rewrote the frontend side of the application, mainly to limit the amount of components per file to one.
        The rewrite was also done to apply a better file structure to the project, as it was difficult to know where different components were located beforehand.
        I also rewrote parts of the backend of Cliptool in the process, mainly to save changes to settings for between sessions better than before.
        During this rewrite, i managed to fix a number of smaller bugs, and introduce the ability to hide selected files from the GUI.
        
        On the Sofie project, i helped with creating parts of the backend, related to interacting with the underlying mongo database and the frontend facing presentation layer.
        I also helped with moving over parts of the company specific code from the old repository, to the new structure.        
        All in all, i went from newer having touched or used Typescript, to now feeling just as comfortable in that as i am in C#.`
        ),
        jobTitleFashionheroInternship: "Software Developer",
        workDescriptionFashionheroInternship: createFashionHeroInternshipDescription(
            `This position was a one month Company Internship. 
            Using C#, i worked on developing a program to load their storage, exported to an Xml file, into a local database.
            The loaded storage would then be export to a Xml in another format, for use by other sites to sell products from us.
            During this work i made use of Entity Framework Core to write to a Sqlite database
        `),
        employerFashionheroInternship: "Fashionhero",
        jobTitleNoergaardMikkelsenInternship: "Software Developer",
        jobTitleFlowpointInternship: "Software Developer",
        workDescriptionNoergaardMikkelsenInternship: createNoergaardMikkelsenInternshipDescription(
            `This position was a one month Company Internship.
            Using C# and Uno Platform as the frontend framework, i developed a program to register prompts for Ai's.
            These prompts was then able to be executed on registered Ai's, starting with Open Ai's ChatGPT, after which their responses would the saved to generate statistics from.
            The programs ultimate goal was to collect quantitative data about how Ai's responds to the same prompts, before attempts to influence the Ai's responses are made by adjusting the websites of Noergaard Mikkelsens customers.
            The project is Open Source, and i was allowed to fork to my own profile, before the end of my internship. A link to it can be found below.
            `),
        workDescriptionFlowpointInternship: 
        `This position was a one month Company Internship.
        Due to being under an NDA, i cannot tell much about what i did.
        I can say that i developed using C#, to automate some processes for the navy.
        `,
        employerNoergaardMikkelsenInternship: "Noergaard Mikkelsen",
        employerFlowpointInternship: "Flowpoint Defence A/S"
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
        // employerOwn: 'Mig selv',
        jobTitleApps4All: 'Mobil Udvikler',
        jobTitleTv2: 'Software Udvikler',
        // jobTitleOwn: 'Software Udvikler',
        workDescriptionApps4All: 
        `Min primære arbejdsopgave var at udvikle nye mobil applikationer egnet til Android, til brug på Point-of-sale enheder.
        Udviklingen af mobil applikationer gjorde jeg gennem Xamarim Forms.
        Dertil udviklet jeg også nogle Microservicer til at understøtte mobil applikationerne.
        Microservicerne blev sat i funktion via Google Cloud.        
        `,
        workDescriptionTv2: createTv2WorkDescription(
        `Denne stilling sluttet på grund af min kontrakt udløb, og ikke kunne blive fornyet, ikke på grund af jeg blev fyret.
        Jeg deltog i et team af udviklere hvor vi ved brug af SCRUM, udviklet og forbedret på en række interne værktøjer, hvor nogle af dem er Open Source.
         Siden min kontrakt udløb er nogle af projekterne blevet ændret til Closed Source, men jeg har hørt at det er kun en midlertidig ændring. 
         Nedenfor er der links til de projekter jeg har bidraget til. På grund af ændringen til Closed Source, vil nogle af de links til projekterne muligvis ikke virke.
         
         På Cliptool projected, genskrev jeg frontend siden af programmet, hovedsagelidt for at begrænse antallet af komponenter per fil til en.
         Omskrivningen betød også at en bedre fil struktur blev påført projektet, da det før var besværligt at finde komponenter man havde brug for at rette i.
         Under omskrivning blev backenden også rettet, hovedsageligt for at bedre gemme ændringer til indstillinger mellem sessioner, end det blev gjort før.
         I forbindelse med omskrivningen fik jeg også rettet en række fejl, og introduceret muligheden for at skjule valgte filer fra brugergrænsefladen.
         
         På Sofie Projektet, hjælp jeg med at skabe dele af backenden relateret til interaktionen med den underligende mongo database, samt den frontend rettet presentations lag.
         Jeg hjælp også med at flytte dele af den virksomheds specifikke kode fra det gamle repository over i den nye struktur.         
         Alt i alt, så er jeg gået fra ikke at have rørt eller anvendt Typescript, til nu at føle mig lige så komfortable i det som i C#.`
        ),        
        jobTitleFashionheroInternship: "Software Udvikler",
        workDescriptionFashionheroInternship: createFashionHeroInternshipDescription(
            `Denne stilling var en, en-måneds virksomhedpraktik.
            Ved brug af C#, arbejdet jeg på at udvikle et program der kunne loade deres lagerdata, fra den eksportered Xml fil, ind i en local Database.
            Det indlæste lager ville derefter kunne blive eksporteret til en Xml fil i et andet format, til brug for at få en anden side til at sælge vores produkter for os.
            Under dette arbejde gjorde jeg brug af Entity Framework Core til at skrive til den Sqlite Database jeg gjorde brug af.
        `),
        employerNoergaardMikkelsenInternship: "Nørgård Mikkelsen",
        jobTitleNoergaardMikkelsenInternship: "Software Udvikler",
        jobTitleFlowpointInternship: "Software Udvikler",
        workDescriptionFlowpointInternship: 
        `Denne stilling var en, en-måneds virksomhedpraktik.
        Da jeg er underlagt NDA, kan jeg kun nævne at jeg hjælp med udviklingen af Software i C#, til at automatisere processor for flåden.
        `,
        workDescriptionNoergaardMikkelsenInternship: createNoergaardMikkelsenInternshipDescription(
            `Denne stilling var en, en-måneds virksomhedpraktik.
            Ved brug af C# og Uno Platform from frontend framework, udviklet jeg et program til at registrere Prompts til AI's. Disse prompts kunne så blive sendt afsted til registrerede AI's, med udgangspunk i Open AI's ChatGPT, hvorefter deres svar bliver gemt til at danne statistik over.
Programmets endelige mål var at indsamle kvantitativ data på hvordan AI's svarer på den samme prompt, før at Nørgård Mikkelsen begynder at påvirke deres svar via justeringer på deres kunders sider.
Projektet er Open Source, og en udgave kan blive set på min GitHub profil her.
            `)
        // workDescriptionOwn: createOwnWorkDescription(
        //     {
        //         baseText: 
        //         `Deltidsarbejde på en række af mine egne projekter, som har været sat på sidelinjen mens jeg har været ansat ved Tv2.
        //         Disse projekter kan sætte tilbage på hylden med et øjebliks varsel, skulle jeg blive tilbudt en stilling.
        //         Da disse projekter er mine egne, tjener jeg ikke noget mens jeg arbejder på dem, andet end den støtte jeg får af staten.
        //         Orderen på projekter under her, er den order som jeg fokuserer på dem.
        //         `,
        //         tracker: 
        //         `Et højt modulært program til at holde styr på en række forskellige ting, defineret af de moduler der bliver lavet.
        //         Programmet vil blive lavet med C#, Entity Framework Core og Maui som frontend.
        //         Planlagte moduler inkludere madplanlægning, budget og tidsforbrug.
        //         `, 
        //         gameDev: 
        //         `Jeg har et spil i tankerne som jeg gerne vil langsomt begynde på.
        //         Har på nuværdene tidspunkt en længere række noter omkring spillet, men ikke noget aktuel kode til det.
        //         Jeg har et ønske om at bruge Godot som den valgte game engine, hovedsagelidt på grund af dens brug af C#, samt den kontrovers angående Unity som skete i løbet af 2023.
        //         Spillet vil være under genren Tower Defence / Rougelike, med inspiration fra en række mytologier, da jeg elsker spillet 'Age of Mythology'.
        //         `,
        //         moddingDev: 
        //         `Jeg har nogle ideer til nogle mods til mit nuværdene favorit spil, Oxygen Not Included, som jeg gerne vil bruge lidt tid på at bringe til live, hvis muligt.
        //         Nogle af disse ideer har jeg delt med andre moddere af spillet, og vil derfor muligvis kunne sparre med dem, hvis jeg har brug for det.
        //         Spillet er udviklet med Unity, derfor bliver C# brugt, som er en fordel.
        //         Modders interaction med spillet sker gennem 'Harmony', som jeg gerne vil lære om, da jeg muligvis kan bruge det til mit eget spil.
        //         `
        //     }
        // )
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


function createFashionHeroInternshipDescription(baseText: string): ReactNode {
    return <>
        {baseText}
    <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
            <Link href="https://github.com/FashionHeroOnGit/PortalProject">
            https://github.com/FashionHeroOnGit/PortalProject
            </Link>
        </ListItem>
    </List>
    </>
}


function createNoergaardMikkelsenInternshipDescription(baseText: string): ReactNode {
    return <>
        {baseText}
    <List sx={{ listStyleType: 'disc', pl: 4 }}>
        <ListItem sx={{ display: 'list-item' }}>
            <Link href="https://github.com/andr9528/gaio">
            https://github.com/andr9528/gaio
            </Link>
        </ListItem>
    </List>
    </>
}

// function createOwnWorkDescription(parts: {baseText: string, tracker: string, gameDev: string, moddingDev: string}): ReactNode {
//     return <>
//         {parts.baseText}
//     <List sx={{ listStyleType: 'disc', pl: 4 }}>
//         <ListItem sx={{ display: 'list-item' }}>
//             {parts.tracker}
//         </ListItem>
//         <ListItem sx={{ display: 'list-item' }}>
//             {parts.gameDev}
//         </ListItem>
//         <PageBreak/>
//         <ListItem sx={{ display: 'list-item' }}>
//             {parts.moddingDev}
//         </ListItem>
//     </List>
//     </>
// }