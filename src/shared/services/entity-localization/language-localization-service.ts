import { ComponentLanguageLocalizationKeys, EntityLanguageLocalizationKeys } from "@/shared/localization/language-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive } from "./base-entity-localization-service";
import { ReactNode } from "react";

export class LanguageLocalizationService extends BaseEntityLocalizationSerive implements EntityLocalizationService<ComponentLanguageLocalizationKeys, EntityLanguageLocalizationKeys> {
    getEntityText(key: EntityLanguageLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().language.entityLocalization[key]
    }
    getComponentText(key: ComponentLanguageLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().language.componentLocalization[key]
    }

}