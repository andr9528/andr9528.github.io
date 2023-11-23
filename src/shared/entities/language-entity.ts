import { EntityLanguageLocalizationKeys } from "../localization/language-localization";
import { Importance } from "./common";

export enum LanguageLevel {
    NATIVE_SPEAKER = 5,
    HIGHLY_PROFICIENT = 4,
    VERY_GOOD_COMMAND = 3,
    GOOD_WORKING_KNOWLEDGE = 2,
    WORKING_KNOWLEDGE = 1,
}

export interface LanguageEntity extends Importance {
    nameKey: EntityLanguageLocalizationKeys
    level: LanguageLevel
}
