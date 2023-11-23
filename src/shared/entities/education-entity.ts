import { EntityEducationLocalizationKeys } from "../localization/education-localization";
import { Location, Periode } from "./common";

export interface EducationEntity extends Periode, Location {
    schoolName: string
    descriptionKey: EntityEducationLocalizationKeys
    gradeKey: EntityEducationLocalizationKeys
}