import { ComponentReferencesLocalization, ComponentReferencesLocalizationKeys, EntityReferencesLocalizationKeys } from "@/shared/localization/references-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive } from "./base-entity-localization-service";
import { ReactNode } from "react";

export class ReferencesLocalizationService extends BaseEntityLocalizationSerive implements EntityLocalizationService<ComponentReferencesLocalizationKeys, EntityReferencesLocalizationKeys> {
    public getEntityText(key: EntityReferencesLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().references.entityLocalization[key]
    }
    public getComponentText(key: keyof ComponentReferencesLocalization): ReactNode {
        return this.getCurrentLocalization().references.componentLocalization[key]
    }
}