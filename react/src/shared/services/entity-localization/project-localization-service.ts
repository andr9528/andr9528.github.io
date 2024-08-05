import { ComponentProjectLocalizationKeys, EntityProjectLocalizationKeys } from "@/shared/localization/project-localization"
import { EntityLocalizationService } from "../value-objects/entity-localization-service"
import { BaseEntityLocalizationSerive as BaseEntityLocalizationService } from "./base-entity-localization-service"
import { ReactNode } from "react"

export class ProjectLocalizationService extends BaseEntityLocalizationService implements EntityLocalizationService<ComponentProjectLocalizationKeys, EntityProjectLocalizationKeys> {
    public getEntityText(key: EntityProjectLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().project.entityLocalization[key]
    }
    public getComponentText(key: ComponentProjectLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().project.componentLocalization[key]
    }
}