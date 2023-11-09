export enum SkillLevel {
    Novice = 1,
    Beginner = 2,
    Skillfull = 3,
    Experienced = 4,
    Expert = 5
}

export interface SkillEntity {
    level: SkillLevel
    importance: number
    name: string
}