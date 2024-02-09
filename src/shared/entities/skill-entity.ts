import { Importance } from "./common"

export enum SkillLevel {
    Novice = 1,
    Beginner = 2,
    Skillful = 3,
    Experienced = 4,
    Expert = 5
}

export enum SkillName {
    C_SHARP = 'C#',
    TYPESCRIPT = 'Typescript',
    SCRUM = 'Scrum',
    GIT = 'Git',
    ENTITY_FRAMEWORK_CORE = 'Entity Framework Core',
    C_PLUS_PLUS = 'C++',
    JAVA = 'Java',
    PYTHON = 'Python',
    SQL = 'SQL',
    ANGULAR = 'Angular',
    XAMARIN_FORMS = 'Xamarin Forms'
}

export interface SkillEntity extends Importance {
    level: SkillLevel
    name: SkillName
}