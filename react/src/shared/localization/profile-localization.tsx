import { List, ListItem } from "@mui/material"
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
        description: createDescription([
            "Easy to learn, logical thinking developer with a Bachelor in Software Development.",
            "Developed in C# / .Net since start of education in 2016.",
            "Learned and gained experience in developmen with TypeScrip / React during position at Tv2 Danmark, while also getting familiar with Angular.",
            "Trained in development under Scrum, with it many UML models. I gained experience working under this Agile method during my time at Tv2 Danmark.",
            "Will happily work by myself on task, or together with others. I do however like the opportunity to spar with other developers, should i get stuck with my own task.",
            "Will often make use of Entity Framework Core, if possible, using the Code First Princippet. Have previously used it up against MS-SQL, SQLite and PostgresSQL databases.",
            "Trained in Azure og Microservice Architecture during my Bachelor in Software Development. Also have a general interest in Cloud, which i sadly have not had much use of yet.",
            "Have experience using Uno Platform for frontend development. Uno Platform is a framework similar to .Net MAUI.",
            "During development i strive to follow DRY and SOLID, to my best ability.",
            "Have experience using GIT, which i have made use of since start of my education in 2016. I host all my code on GitHub, which there is a link to in this Resume.",
        ])
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
        description: createDescription([
            "Lærenem Logisk tænkende udvikler med Bachelor i Software Udvikling.",
            "Udviklet i C# / .Net siden start af uddannelse i 2016.",
            "Lært og erhvervet erfaring i TypeScript / React under Stilling ved Tv2 Danmark, samt kendskab til Angular.",
            "Oplært i udvikling under SCRUM, med dertilhørende UML modeller. Arbejdet under denne Agile metode under stilling ved Tv2 Danmark.",
            "Arbejder gerne alene på opgaver, eller sammen med andre. Kan godt lide muligheden for at spare med andre udviklere, i tilfælde af at jeg sidder fast i min opgave.",
            "Anvender ofte Entity Framework Core, med Code First Princippet til projekter. Har tidligere arbejdet op mod MS-SQL, SQLite og PostgresSQL databaser.",
            "Oplært i Azure og Microservice Architecture under min Bachelor i Software Udvikling. Har også en general interesse i Cloud, har bare ikke haft brug for den viden endnu.",
            "Har erfaring med at anvende Uno Platform til frontend udvikling, som er et framework alla .Net MAUI.",
            "Under udvikling følger jeg principperne DRY og SOLID, så godt som muligt.",
            "Erfaring med GIT, som jeg har anvendt siden start af min uddannelse i 2016. Jeg lagrer min kode på GitHub, som der er et link til i venstre kolonne af CV'et.",
        ])
    }
}

function createDescription(points: string[]): ReactNode {
    return (<List sx={{ listStyleType: 'disc', pl: 4 }}>
        {points.map((point, index) => <ListItem sx={{ display: 'list-item' }} key={index}>{point}</ListItem>)}
    </List>)
}