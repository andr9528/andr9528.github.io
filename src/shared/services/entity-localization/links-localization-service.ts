import { ComponentLinksLocalizationKeys, EntityLinksLocalizationKeys } from "@/shared/localization/links-localization";
import { EntityLocalizationService } from "../value-objects/entity-localization-service";
import { BaseEntityLocalizationSerive } from "./base-entity-localization-service";
import { ReactNode } from "react";

export class LinksLocalizationService extends BaseEntityLocalizationSerive implements EntityLocalizationService<ComponentLinksLocalizationKeys, EntityLinksLocalizationKeys> {
    getEntityText(key: EntityLinksLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().links.entityLocalization[key]
    }
    getComponentText(key: ComponentLinksLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().links.componentLocalization[key]
    }

}