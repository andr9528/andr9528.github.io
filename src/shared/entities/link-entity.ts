import { EntityLinksLocalizationKeys } from "../localization/links-localization"

export interface LinkEntity {
    address: string
    titleKey: EntityLinksLocalizationKeys
    remarkKey: EntityLinksLocalizationKeys
    importance: number
}