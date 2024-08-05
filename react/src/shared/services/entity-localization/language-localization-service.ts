import { ComponentLanguageLocalizationKeys, EntityLanguageLocalizationKeys } from "@/shared/localization/language-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive as BaseEntityLocalizationService } from "./base-entity-localization-service";
import { ReactNode } from "react";

export class LanguageLocalizationService extends BaseEntityLocalizationService implements EntityLocalizationService<ComponentLanguageLocalizationKeys, EntityLanguageLocalizationKeys> {
    public getEntityText(key: EntityLanguageLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().language.entityLocalization[key]
    }
    public getComponentText(key: ComponentLanguageLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().language.componentLocalization[key]
    }

}