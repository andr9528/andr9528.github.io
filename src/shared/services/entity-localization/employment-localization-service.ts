import { ComponentEmploymentLocalization, ComponentEmploymentLocalizationKeys, EntityEmploymentLocalization } from "@/shared/localization/employment-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive as BaseEntityLocalizationService } from "./base-entity-localization-service";
import { EntityEmploymentLocalizationKeys } from '../../localization/employment-localization';
import { ReactNode } from "react";

export class EmploymentLocalizationService extends BaseEntityLocalizationService implements EntityLocalizationService<ComponentEmploymentLocalizationKeys, EntityEmploymentLocalizationKeys> {
    public getEntityText(key: EntityEmploymentLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().employment.entityLocalization[key]
    }
    public getComponentText(key: ComponentEmploymentLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().employment.componentLocalization[key]
    }
}