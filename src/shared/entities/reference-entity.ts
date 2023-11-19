import { EntityReferencesLocalizationKeys } from "../localization/references-localization"

export interface ReferenceEntity {
    name: string
    companyNameKey: EntityReferencesLocalizationKeys
    importance: number
    email?: string
    phoneNumber?: string
}