import { Dispatch, SetStateAction } from "react"
import { Localization, danishLocalization, englishLocalization } from "../localization/localization"
import { HeaderLocalizationKeys } from "../localization/header"
import { BaseService } from "./base-service"
import { ComponentGeneralInformationLocalizationKeys, EntityGeneralInformationLocalizationKeys } from "../localization/general-information"
import { GeneralInformation } from "../entities/general-information"

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


    public getHeaderText(key: HeaderLocalizationKeys): string {
        return this.getCurrentLocalization().header[key]
    }

    public getEntityGeneralInformationText(key: EntityGeneralInformationLocalizationKeys): string {
        return this.getCurrentLocalization().generalInformation.entityLocalization[key]
    }

    public getComponetGeneralInformationText(key: ComponentGeneralInformationLocalizationKeys): string {
        return this.getCurrentLocalization().generalInformation.componentLocalization[key]
    }


    private getCurrentLocalization(): Localization {
        return this.localizations[this.currentLanguage]
    }
}