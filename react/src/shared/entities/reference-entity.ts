import { EntityReferencesLocalizationKeys } from "../localization/references-localization"
import { Importance } from "./common"

export interface ReferenceEntity extends Importance {
    name: string
    companyNameKey: EntityReferencesLocalizationKeys
    email?: string
    phoneNumber?: string
}