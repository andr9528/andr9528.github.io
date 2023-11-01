import { EducationLocalization, danishEducationLocalization, englishEducationLocalization } from "./education";
import { GeneralInformationLocalization, danishGeneralLocalization, englishGeneralLocalization } from "./general-information";
import { HeaderLocalization, danishHeaderLocalization, englishHeaderLocalization } from "./header";
import { SummaryLocalization, danishSummaryLocalization, englishSummaryLocalization } from "./summary";

export interface Localization {
    generalInformation: GeneralInformationLocalization
    education: EducationLocalization
    summary: SummaryLocalization
    header: HeaderLocalization
}

export type LocalizationKeys = keyof Localization

export const danishLocalization: Localization = {
    generalInformation: danishGeneralLocalization,
    education: danishEducationLocalization,
    summary: danishSummaryLocalization,
    header: danishHeaderLocalization
}

export const englishLocalization: Localization = {
    generalInformation: englishGeneralLocalization,
    education: englishEducationLocalization,
    summary: englishSummaryLocalization,
    header: englishHeaderLocalization
}