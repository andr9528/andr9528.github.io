import { Dispatch, SetStateAction } from "react"
import { Localization, danishLocalization, englishLocalization } from "../localization/localization"
import { UnexpectedUndefinedException } from "../exceptions/unexpected-undefined-exception"
import { HeaderLocalizationKeys } from "../localization/header"

export enum Language {
    ENGLISH = 'en',
    DANISH = 'da',
}

export class LocalizationService {
    public static instance: LocalizationService = new LocalizationService()
    private currentLanguage: Language
    private readonly localizations: Record<Language, Localization>
    private stateUpdater?: Dispatch<SetStateAction<Language>> 

    private constructor() {
        this.currentLanguage = Language.ENGLISH
        this.localizations = {
            da: danishLocalization,
            en: englishLocalization
        }

        console.info(`Finished constructing ${LocalizationService.name}.`)
    }

    public setupLocalizationService(stateUpdater: Dispatch<SetStateAction<Language>>) {
        this.stateUpdater = stateUpdater        
        console.info(`Finished setup of ${LocalizationService.name}.`)
    }

    public setLanguage(language: Language): void {
        this.assertStateUpdaterNotUndefined(this.setLanguage.name)
        this.currentLanguage = language
        this.stateUpdater!(language)
    }

    private assertStateUpdaterNotUndefined(caller: string): void {
        if (!this.stateUpdater) {
            throw new UnexpectedUndefinedException(`Expected 'stateUpdater' to be set durring ${caller}.`)
        }
    }

    public getHeaderText(key: HeaderLocalizationKeys) {
        return this.getCurrentLocalization().header[key]
    }

    private getCurrentLocalization(): Localization {
        return this.localizations[this.currentLanguage]
    }
}