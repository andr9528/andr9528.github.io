import { EducationLocalization, danishEducationLocalization, englishEducationLocalization } from "./education-localization";
import { EmploymentLocalization, danishEmploymentLocalization, englishEmploymentLocalization } from "./employment-localization";
import { GeneralInformationLocalization, danishGeneralLocalization, englishGeneralLocalization } from "./general-information-localization";
import { HeaderLocalization, danishHeaderLocalization, englishHeaderLocalization } from "./header-localization";
import { LanguageLocalization, danishLanguageLocalization, englishLanguageLocalization } from "./language-localization";
import { LinksLocalization, danishLinksLocalization, englishLinksLocalization } from "./links-localization";
import { ProfileLocalization, danishProfileLocalization, englishProfileLocalization } from "./profile-localization";
import { ProjectLocalization, danishProjectLocalization, englishProjectLocalization } from './project-localization';
import { ReferencesLocalization, danishReferencesLocalization, englishReferencesLocalization } from "./references-localization";
import { SkillsLocalization, danishSkillsLocalization, englishSkillsLocalization } from "./skills-localization";

export interface Localization {
    generalInformation: GeneralInformationLocalization
    header: HeaderLocalization
    employment: EmploymentLocalization
    education: EducationLocalization
    skills: SkillsLocalization
    profile: ProfileLocalization
    links: LinksLocalization
    references: ReferencesLocalization
    language: LanguageLocalization
    project: ProjectLocalization
}

export type LocalizationKeys = keyof Localization

export const danishLocalization: Localization = {
    generalInformation: danishGeneralLocalization,
    header: danishHeaderLocalization,
    employment: danishEmploymentLocalization,
    education: danishEducationLocalization,
    skills: danishSkillsLocalization,
    profile: danishProfileLocalization,
    links: danishLinksLocalization,
    references: danishReferencesLocalization,
    language: danishLanguageLocalization,
    project: danishProjectLocalization
}

export const englishLocalization: Localization = {
    generalInformation: englishGeneralLocalization,
    header: englishHeaderLocalization,
    employment: englishEmploymentLocalization,
    education: englishEducationLocalization,
    skills: englishSkillsLocalization,
    profile: englishProfileLocalization,
    links: englishLinksLocalization,
    references: englishReferencesLocalization,
    language: englishLanguageLocalization,
    project: englishProjectLocalization
}