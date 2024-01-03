import { Pages, usePrinter } from "react-pdf-printer";
import { EducationSection } from "./components/education-section";
import { EmploymentSection } from "./components/employment-section";
import { GeneralInformationSection } from "./components/general-information-section";
import { LanguagesSection } from "./components/languages-section";
import { LinksSection } from "./components/links-section";
import { ProfileSection } from "./components/profile-section";
import { ReferencesSection } from "./components/references-section";
import { SkillsSection } from "./components/skills-section";

export function PdfCv(): JSX.Element {
    const { isPrinter } = usePrinter()
    return (
        <Pages>
            <GeneralInformationSection/>
            <ProfileSection/>
            <EmploymentSection/>
            <EducationSection/>
            <SkillsSection/>
            <LanguagesSection/>
            <ReferencesSection/>
            <LinksSection/>
        </Pages>
    )
}