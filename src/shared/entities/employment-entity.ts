import { ComponentEmploymentLocalizationKeys, EntityEmploymentLocalizationKeys } from "../localization/employment-localization"
import { Location, Periode } from "./common"

export interface EmploymentEntity extends Periode, Location {
    jobTitleKey: EntityEmploymentLocalizationKeys
    employerKey: EntityEmploymentLocalizationKeys
    workDescriptionKey: EntityEmploymentLocalizationKeys
    joiningWordKey: ComponentEmploymentLocalizationKeys
}