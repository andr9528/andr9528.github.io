import { EntityLinksLocalizationKeys } from "../localization/links-localization"
import { Importance } from "./common"

export interface LinkEntity extends Importance {
    address: string
    titleKey: EntityLinksLocalizationKeys
    remarkKey: EntityLinksLocalizationKeys
}