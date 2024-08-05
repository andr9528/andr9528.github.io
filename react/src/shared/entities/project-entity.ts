import { EntityProjectLocalizationKeys } from "../localization/project-localization";
import { Importance } from "./common";

export interface ProjectEntity extends Importance {
    descriptionKey: EntityProjectLocalizationKeys
    titleKey: EntityProjectLocalizationKeys
}