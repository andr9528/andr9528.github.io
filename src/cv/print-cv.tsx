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
import { useNavigate } from 'react-router-dom';
import { Box } from "@mui/material";
import { OverflowStack } from "@/shared/components/overflow-stack";

export function PrintCv(): JSX.Element {
    const documentRef = useRef<DocumentRef>(null);   

    return (
        <Document
            ref={documentRef}
            header={<></>} 
            footer={<Pagination/>}
            renderOnInit={false}
            screen={<></>}
        >
            <OverflowStack>
                <GeneralInformationSection/>
                <ProfileSection/>
                <EmploymentSection/>
                <EducationSection/>
                <SkillsSection/>
                <LanguagesSection/>
                <ReferencesSection/>
                <LinksSection/>
            </OverflowStack>
        </Document>
    )
}