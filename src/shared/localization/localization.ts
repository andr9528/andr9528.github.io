import { EducationLocalization, danishEducationLocalization, englishEducationLocalization } from "./education";
import { GeneralLocalization, danishGeneralLocalization, englishGeneralLocalization } from "./general";
import { HeaderLocalization, danishHeaderLocalization, englishHeaderLocalization } from "./header";
import { SummaryLocalization, danishSummaryLocalization, englishSummaryLocalization } from "./summary";

export interface Localization {
    general: GeneralLocalization
    education: EducationLocalization
    summary: SummaryLocalization
    header: HeaderLocalization
}

export type LocalizationKeys = keyof Localization

export const danishLocalization: Localization = {
    general: danishGeneralLocalization,
    education: danishEducationLocalization,
    summary: danishSummaryLocalization,
    header: danishHeaderLocalization
}

export const englishLocalization: Localization = {
    general: englishGeneralLocalization,
    education: englishEducationLocalization,
    summary: englishSummaryLocalization,
    header: englishHeaderLocalization
}