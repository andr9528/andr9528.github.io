import { Dispatch, ReactNode, SetStateAction } from "react"
import { Localization, danishLocalization, englishLocalization } from "../localization/localization"
import { HeaderLocalizationKeys } from "../localization/header"
import { BaseService } from "./base-service"
import { ComponentGeneralInformationLocalizationKeys, EntityGeneralInformationLocalizationKeys } from "../localization/general-information-localization"
import { GeneralInformationEntity } from "../entities/general-information-entity"
import { ComponentEmploymentLocalizationKeys, EntityEmploymentLocalizationKeys } from "../localization/employment-localization"

export enum Language {
    ENGLISH = 'en',
    DANISH = 'da',
}

export class LocalizationService extends BaseService<Language> {
    public static instance: LocalizationService = new LocalizationService()
    private currentLanguage: Language
    private readonly localizations: Record<Language, Localization>

    private constructor() {
        super()
        this.currentLanguage = Language.ENGLISH
        this.localizations = {
            da: danishLocalization,
            en: englishLocalization
        }

        console.info(`Finished constructing ${LocalizationService.name}.`)
    }

    public setupStateUpdater(stateUpdater: Dispatch<SetStateAction<Language>>) {
        this.stateUpdater = stateUpdater        
        console.info(`Finished setup of ${LocalizationService.name}.`)
    }

    public setLanguage(language: Language): void {
        this.assertStateUpdaterNotUndefined(this.setLanguage.name)
        this.currentLanguage = language
        this.stateUpdater!(language)
    }


    public getHeaderText(key: HeaderLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().header[key]
    }

    public getEntityGeneralInformationText(key: EntityGeneralInformationLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().generalInformation.entityLocalization[key]
    }

    public getComponetGeneralInformationText(key: ComponentGeneralInformationLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().generalInformation.componentLocalization[key]
    }

    private getCurrentLocalization(): Localization {
        return this.localizations[this.currentLanguage]
    }

    public getCurrentLanguage(): Language {
        return this.currentLanguage
    }

    public getEntityEmploymentText(key: EntityEmploymentLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().employment.entityLocalization[key]
    }

    public getComponentEmploymentText(key: ComponentEmploymentLocalizationKeys): ReactNode {
        return this.getCurrentLocalization().employment.componentLocalization[key]
    }
}