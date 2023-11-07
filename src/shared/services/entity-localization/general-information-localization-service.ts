import { ComponentGeneralInformationLocalizationKeys, EntityGeneralInformationLocalizationKeys } from '@/shared/localization/general-information-localization';
import { EntityLocalizationService } from '../value-objects/entity-localization-service';
import { ReactNode } from 'react';
import { BaseEntityLocalizationSerive } from './base-entity-localization-service';
export class GeneralInformationLocalizationService extends BaseEntityLocalizationSerive implements EntityLocalizationService<ComponentGeneralInformationLocalizationKeys, EntityGeneralInformationLocalizationKeys> {

    public getEntityText(key: EntityGeneralInformationLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().generalInformation.entityLocalization[key]
    }
    public getComponentText(key: ComponentGeneralInformationLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().generalInformation.componentLocalization[key]
    }
}