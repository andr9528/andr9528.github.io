import { EntityEmploymentLocalizationKeys } from "../localization/employment-localization"
import { Location, Periode } from "./common"

export interface EmploymentEntity extends Periode, Location {
    jobTitleKey: EntityEmploymentLocalizationKeys
    employer: string
    workDescriptionKey: EntityEmploymentLocalizationKeys
}