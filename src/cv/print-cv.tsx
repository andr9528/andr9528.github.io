import { DocumentRef, Pages, Pagination, PortalDocument, Document, usePrinter } from "react-pdf-printer";
import { EducationSection } from "./components/education-section";
import { EmploymentSection } from "./components/employment-section";
import { GeneralInformationSection } from "./components/general-information-section";
import { LanguagesSection } from "./components/languages-section";
import { LinksSection } from "./components/links-section";
import { ProfileSection } from "./components/profile-section";
import { ReferencesSection } from "./components/references-section";
import { SkillsSection } from "./components/skills-section";
import { useEffect, useRef } from "react";

export function PrintCv(): JSX.Element {
    const documentRef = useRef<DocumentRef>(null);
    useEffect(() => {
        documentRef.current?.render()
        console.debug(documentRef)
    }, [])    

    return (
        <Document
            ref={documentRef}
            header={<></>} 
            footer={<Pagination/>}
            renderOnInit={true}
            screen={<></>}
        >
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
        </Document>
    )
}