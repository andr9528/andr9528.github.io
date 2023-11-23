import { ComponentEducationLocalizationKeys, EntityEducationLocalizationKeys } from "@/shared/localization/education-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive } from "./base-entity-localization-service";
import { ReactNode } from "react";

export class EducationLocalizationService extends BaseEntityLocalizationSerive implements EntityLocalizationService<ComponentEducationLocalizationKeys, EntityEducationLocalizationKeys> {
    public getEntityText(key: EntityEducationLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().education.entityLocalization[key]
    }
    public getComponentText(key: ComponentEducationLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().education.componentLocalization[key]
    }

}