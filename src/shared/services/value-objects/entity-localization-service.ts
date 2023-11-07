import { ReactNode } from "react";

export interface EntityLocalizationService<ComponentKeys, EntityKeys> {
    getEntityText(key: EntityKeys): ReactNode
    getComponentText(key: ComponentKeys): ReactNode
}