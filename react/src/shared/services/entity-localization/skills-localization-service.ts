import { ComponentSkillsLocalizationKeys, EntitySkillsLocalizationKeys } from "@/shared/localization/skills-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive } from "./base-entity-localization-service";
import { ReactNode } from "react";

export class SkillsLocalizationService extends BaseEntityLocalizationSerive implements EntityLocalizationService<ComponentSkillsLocalizationKeys, EntitySkillsLocalizationKeys> {
    public getEntityText(key: EntitySkillsLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().skills.entityLocalization[key]
    }
    public getComponentText(key: ComponentSkillsLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().skills.componentLocalization[key]
    }

}