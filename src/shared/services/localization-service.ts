import { Dispatch, ReactNode, SetStateAction } from "react"
import { Localization, LocalizationKeys, danishLocalization, englishLocalization } from "../localization/localization"
import { HeaderLocalizationKeys } from "../localization/header-localization"
import { BaseService } from "./base-service"
import { ComponentGeneralInformationLocalizationKeys, EntityGeneralInformationLocalizationKeys } from "../localization/general-information-localization"
import { ComponentEmploymentLocalizationKeys, EntityEmploymentLocalizationKeys } from "../localization/employment-localization"
import { EntityLocalizationService } from "./value-objects/entity-localization-service"
import { GeneralInformationLocalizationService } from "./entity-localization/general-information-localization-service"
import { UnexpectedUndefinedException } from "../exceptions/unexpected-undefined-exception"
import { EmploymentLocalizationService } from "./entity-localization/employment-localization-service"
import { ProfileLocalizationService } from "./entity-localization/profile-localization-service"
import { ComponentProfileLocalizationKeys, EntityProfileLocalizationKeys } from "../localization/profile-localization"
import { SkillsLocalizationService } from "./entity-localization/skills-localization-service"
import { ComponentSkillsLocalizationKeys } from "../localization/skills-localization"
import { EntitySkillsLocalizationKeys } from '@/shared/localization/skills-localization';
import { LinksLocalizationService } from "./entity-localization/links-localization-service"
import { ComponentLinksLocalizationKeys, EntityLinksLocalizationKeys } from "../localization/links-localization"
import { ReferencesLocalizationService } from "./entity-localization/references-localization-service"
import { ComponentReferencesLocalizationKeys, EntityReferencesLocalizationKeys } from "../localization/references-localization"
import { LanguageLocalizationService } from "./entity-localization/language-localization-service"
import { ComponentLanguageLocalizationKeys, EntityLanguageLocalizationKeys } from "../localization/language-localization"

export enum Language {
    ENGLISH = 'en',
    DANISH = 'da',
}

export class LocalizationService extends BaseService<Language> {
    public static instance: LocalizationService = new LocalizationService()
    private currentLanguage: Language
    private readonly localizations: Record<Language, Localization>
    private readonly entittyLocalizationServices: Record<LocalizationKeys, EntityLocalizationService<unknown, unknown> | undefined>

    private constructor() {
        super()
        this.currentLanguage = Language.ENGLISH
        this.localizations = {
            da: danishLocalization,
            en: englishLocalization
        }
        this.entittyLocalizationServices = {
            generalInformation: new GeneralInformationLocalizationService(this.getCurrentLocalization.bind(this)),
            employment: new EmploymentLocalizationService(this.getCurrentLocalization.bind(this)),
            profile: new ProfileLocalizationService(this.getCurrentLocalization.bind(this)),
            education: undefined,
            skills: new SkillsLocalizationService(this.getCurrentLocalization.bind(this)),
            links: new LinksLocalizationService(this.getCurrentLocalization.bind(this)),
            references: new ReferencesLocalizationService(this.getCurrentLocalization.bind(this)),
            language: new LanguageLocalizationService(this.getCurrentLocalization.bind(this)),
            header: undefined,
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

    public getGeneralInformationLocalizationService(): EntityLocalizationService<
        ComponentGeneralInformationLocalizationKeys, 
        EntityGeneralInformationLocalizationKeys
    > {
        const service: EntityLocalizationService<
        ComponentGeneralInformationLocalizationKeys, 
        EntityGeneralInformationLocalizationKeys
        > | undefined = this.entittyLocalizationServices['generalInformation']

        if (!service) {
            throw new UnexpectedUndefinedException('Expected an Localization service for General Information to exist.')
        }

        return service
    }

    public getEmploymentLocalizationService(): EntityLocalizationService<
        ComponentEmploymentLocalizationKeys, 
        EntityEmploymentLocalizationKeys
    > {
        const service: EntityLocalizationService<
        ComponentEmploymentLocalizationKeys, 
        EntityEmploymentLocalizationKeys
        > | undefined = this.entittyLocalizationServices['employment']

        if (!service) {
            throw new UnexpectedUndefinedException('Expected an Localization service for Employment to exist.')
        }

        return service
    }

    public getSkillsLocalizationService(): EntityLocalizationService<
        ComponentSkillsLocalizationKeys, 
        EntitySkillsLocalizationKeys
    > {
        const service: EntityLocalizationService<
        ComponentSkillsLocalizationKeys, 
        EntitySkillsLocalizationKeys
        > | undefined = this.entittyLocalizationServices['skills']

        if (!service) {
            throw new UnexpectedUndefinedException('Expected an Localization service for Skills to exist.')
        }

        return service
    }

    public getProfileLocalizationService(): EntityLocalizationService<
        ComponentProfileLocalizationKeys, 
        EntityProfileLocalizationKeys
    > {
        const service: EntityLocalizationService<
        ComponentProfileLocalizationKeys, 
        EntityProfileLocalizationKeys
        > | undefined = this.entittyLocalizationServices['profile']

        if (!service) {
            throw new UnexpectedUndefinedException('Expected an Localization service for Profile to exist.')
        }

        return service
    }

    public getLinksLocalizationService(): EntityLocalizationService<
    ComponentLinksLocalizationKeys, 
    EntityLinksLocalizationKeys
    > {
        const service: EntityLocalizationService<
        ComponentLinksLocalizationKeys, 
        EntityLinksLocalizationKeys
        > | undefined = this.entittyLocalizationServices['links']

        if (!service) {
            throw new UnexpectedUndefinedException('Expected an Localization service for Links to exist.')
        }

        return service
}

    public getReferencesLocalizationService(): EntityLocalizationService<
    ComponentReferencesLocalizationKeys, 
    EntityReferencesLocalizationKeys
    > {
        const service: EntityLocalizationService<
        ComponentReferencesLocalizationKeys, 
        EntityReferencesLocalizationKeys
        > | undefined = this.entittyLocalizationServices['references']

        if (!service) {
            throw new UnexpectedUndefinedException('Expected an Localization service for References to exist.')
        }

        return service
    }

    public getLanguageLocalizationService(): EntityLocalizationService<
    ComponentLanguageLocalizationKeys, 
    EntityLanguageLocalizationKeys
    > {
        const service: EntityLocalizationService<
        ComponentLanguageLocalizationKeys, 
        EntityLanguageLocalizationKeys
        > | undefined = this.entittyLocalizationServices['language']

        if (!service) {
            throw new UnexpectedUndefinedException('Expected an Localization service for Language to exist.')
        }

        return service
    }


    private getCurrentLocalization(): Localization {
        return this.localizations[this.currentLanguage]
    }

    public getCurrentLanguage(): Language {
        return this.currentLanguage
    }
}