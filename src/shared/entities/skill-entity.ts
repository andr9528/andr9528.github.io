import { Importance } from "./common"

export enum SkillLevel {
    Novice = 1,
    Beginner = 2,
    Skillfull = 3,
    Experienced = 4,
    Expert = 5
}

export interface SkillEntity extends Importance {
    level: SkillLevel
    name: string
}