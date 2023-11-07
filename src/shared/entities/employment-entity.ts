import { EntityEmploymentLocalizationKeys } from "../localization/employment-localization"

export interface EmploymentEntity {
    jobTitleKey: EntityEmploymentLocalizationKeys
    startDate: Date
    endDate?: Date
    employer: string
    city: string
    workDescriptionKey: EntityEmploymentLocalizationKeys
}