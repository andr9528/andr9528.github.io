import { ComponentProfileLocalizationKeys, EntityProfileLocalizationKeys } from "@/shared/localization/profile-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive } from "./base-entity-localization-service";
import { ReactNode } from "react";

export class ProfileLocalizationService extends BaseEntityLocalizationSerive implements EntityLocalizationService<ComponentProfileLocalizationKeys, EntityProfileLocalizationKeys> {
    public getEntityText(key: EntityProfileLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().profile.entityLocalization[key]

    }
    public getComponentText(key: ComponentProfileLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().profile.componentLocalization[key]
    }
}