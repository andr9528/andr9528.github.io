import { EducationLocalization, danishEducationLocalization, englishEducationLocalization } from "./education";
import { EmploymentLocalization, danishEmploymentLocalization, englishEmploymentLocalization } from "./employment-localization";
import { GeneralInformationLocalization, danishGeneralLocalization, englishGeneralLocalization } from "./general-information-localization";
import { HeaderLocalization, danishHeaderLocalization, englishHeaderLocalization } from "./header";
import { SummaryLocalization, danishSummaryLocalization, englishSummaryLocalization } from "./summary";

export interface Localization {
    generalInformation: GeneralInformationLocalization
    education: EducationLocalization
    summary: SummaryLocalization
    header: HeaderLocalization
    employment: EmploymentLocalization
}

export type LocalizationKeys = keyof Localization

export const danishLocalization: Localization = {
    generalInformation: danishGeneralLocalization,
    education: danishEducationLocalization,
    summary: danishSummaryLocalization,
    header: danishHeaderLocalization,
    employment: danishEmploymentLocalization
}

export const englishLocalization: Localization = {
    generalInformation: englishGeneralLocalization,
    education: englishEducationLocalization,
    summary: englishSummaryLocalization,
    header: englishHeaderLocalization,
    employment: englishEmploymentLocalization
}