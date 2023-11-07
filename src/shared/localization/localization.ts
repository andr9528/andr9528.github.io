import { EducationLocalization, danishEducationLocalization, englishEducationLocalization } from "./education";
import { EmploymentLocalization, danishEmploymentLocalization, englishEmploymentLocalization } from "./employment-localization";
import { GeneralInformationLocalization, danishGeneralLocalization, englishGeneralLocalization } from "./general-information-localization";
import { HeaderLocalization, danishHeaderLocalization, englishHeaderLocalization } from "./header-localization";
import { ProfileLocalization, danishProfileLocalization, englishProfileLocalization } from "./profile-localization";

export interface Localization {
    generalInformation: GeneralInformationLocalization
    education: EducationLocalization
    header: HeaderLocalization
    employment: EmploymentLocalization
    profile: ProfileLocalization
}

export type LocalizationKeys = keyof Localization

export const danishLocalization: Localization = {
    generalInformation: danishGeneralLocalization,
    education: danishEducationLocalization,
    header: danishHeaderLocalization,
    employment: danishEmploymentLocalization,
    profile: danishProfileLocalization
}

export const englishLocalization: Localization = {
    generalInformation: englishGeneralLocalization,
    education: englishEducationLocalization,
    header: englishHeaderLocalization,
    employment: englishEmploymentLocalization,
    profile: englishProfileLocalization
}