import { ReactNode } from "react"

export interface EntityProjectLocalization {
    trackerDescription: ReactNode
    trackerTitle: ReactNode
    towerDefenceDevDescription: ReactNode
    towerDefenceDevTitle: ReactNode
    oniModdingDescription: ReactNode
    oniModdingTitle: ReactNode
}

export type EntityProjectLocalizationKeys = keyof EntityProjectLocalization

export interface ComponentProjectLocalization {
    sectionHeader: ReactNode
    sectionDescription: ReactNode
}

export type ComponentProjectLocalizationKeys = keyof ComponentProjectLocalization

export interface ProjectLocalization {
    entityLocalization: EntityProjectLocalization
    componentLocalization: ComponentProjectLocalization
}

const defaultProjectLocalization: ProjectLocalization = {
    entityLocalization: {
        trackerTitle: 'Tracker Application',
        trackerDescription:  
        `A highly modular program usable to track a number of things, depending on the modules included. 
        Will be developed using C#, Entity Framework Core and Maui as frontend.
        Planned modules include: Dining, Budget and Time.
        `,
        towerDefenceDevTitle: 'Roguelike Tower Defence Game',
        towerDefenceDevDescription: 
        `I have a game in mind that i would like to slowly get started on.
        Currently i have noted down many details of the planned game, but have not started on any code for it yet.
        I am heavily leaning toward using Godot as the game engine of choice, mainly for the C# language, but also due to the controversy about Unity during 2023.
        The game genre will be Tower Defence / Rougelike, with inspiration from a number of Mythologies, as a nod to my liking of 'Age of Mythology'. 
        `,
        oniModdingTitle: 'Oxygen Not Included Modding',
        oniModdingDescription: 
        `I have some ideas for mods for one of my favorit games as of late, Oxygen Not Included, which i might spend some time on bringing to life.
        Some of the ideas i have shared with other modders for the game, and i will thus likely spar with them if needed.
        The game is developer using Unity, therefore C# is the language to be used, which is an advantage for me.
        It uses uses 'Harmony' as the access point for modders, which might help me learn it for use my own game, if Godot allows it.
        `
    },
    componentLocalization: {
        sectionHeader: 'Projects',
        sectionDescription: 
        `In my spare time, between employments and if i can find time also during employments, i have a few projects that i spend some time on here and there.
        Below those projects are listed, in order of most to least focus.        
        `        
    }
}

export const englishProjectLocalization: ProjectLocalization = {
    ...defaultProjectLocalization
}

export const danishProjectLocalization: ProjectLocalization = {
    ...defaultProjectLocalization,
    entityLocalization: {
        ...defaultProjectLocalization.entityLocalization,
        trackerTitle: 'Sporings Applikation',
        trackerDescription: 
        `Et højt modulært program til at holde styr på en række forskellige ting, defineret af de moduler der bliver lavet.
        Programmet vil blive lavet med C#, Entity Framework Core og Maui som frontend.
        Planlagte moduler inkludere madplanlægning, budget og tidsforbrug.
        `,
        towerDefenceDevTitle: 'Roguelike Tårn Forsvars Spil',
        towerDefenceDevDescription: 
        `Jeg har et spil i tankerne som jeg gerne vil langsomt begynde på.
        Har på nuværdene tidspunkt en længere række noter omkring spillet, men ikke noget aktuel kode til det.
        Jeg har et ønske om at bruge Godot som den valgte game engine, hovedsagelidt på grund af dens brug af C#, samt den kontrovers angående Unity som skete i løbet af 2023.
        Spillet vil være under genren Tower Defence / Rougelike, med inspiration fra en række mytologier, da jeg elsker spillet 'Age of Mythology'.
        `,
        oniModdingDescription: 
        `Jeg har nogle ideer til nogle mods til mit nuværdene favorit spil, Oxygen Not Included, som jeg gerne vil bruge lidt tid på at bringe til live, hvis muligt.
        Nogle af disse ideer har jeg delt med andre moddere af spillet, og vil derfor muligvis kunne sparre med dem, hvis jeg har brug for det.
        Spillet er udviklet med Unity, derfor bliver C# brugt, som er en fordel.
        Modders interaction med spillet sker gennem 'Harmony', som jeg gerne vil lære om, da jeg muligvis kan bruge det til mit eget spil.
        `
    },
    componentLocalization: {
        ...defaultProjectLocalization.componentLocalization,
        sectionHeader: 'Projekter',
        sectionDescription: 
        `I min fritid, mellem ansættelser og hvis jeg kan finde tid også under ansættelser, bruger jeg lidt tid her og der på et par af mine egne projekter.
        Herunder er disse projekter listed, i rækkefølge af mest til mindst fokus.
        `
    }
}