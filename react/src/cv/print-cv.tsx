import { DocumentRef, Pages, Pagination, PortalDocument, Document, usePrinter, Page } from "react-pdf-printer";
import { EducationSection } from "./components/education-section";
import { EmploymentSection } from "./components/employment-section";
import { GeneralInformationSection } from "./components/general-information-section";
import { LanguagesSection } from "./components/languages-section";
import { LinksSection } from "./components/links-section";
import { ProfileSection } from "./components/profile-section";
import { ReferencesSection } from "./components/references-section";
import { SkillsSection } from "./components/skills-section";
import { useRef } from "react";
import { OverflowStack } from "@/shared/components/overflow-stack";
import { ProjectSection } from "./components/project-section";

export function PrintCv(): JSX.Element {
    const documentRef = useRef<DocumentRef>(null);   

    return (
        <Document
            ref={documentRef}
            header={<></>} 
            footer={<Pagination/>}
            renderOnInit={true}
            screen={<></>}
        >
            <OverflowStack>
                <Page>
                    <GeneralInformationSection/>
                    <ProfileSection/>
                </Page>                
                <EmploymentSection/>
                <ProjectSection/>
                <EducationSection/>
                <SkillsSection/>
                <Page>
                    <LanguagesSection/>
                    {/* <ReferencesSection/> */}
                    <LinksSection/>
                </Page>
            </OverflowStack>
        </Document>
    )
}