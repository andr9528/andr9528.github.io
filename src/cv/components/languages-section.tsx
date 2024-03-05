import { LanguageEntity } from "@/shared/entities/language-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { Language } from "./language-section/language";
import { Page, usePrinter } from "react-pdf-printer";
import { PageBreak } from "@/shared/components/page-break";
import { ReactNode } from "react";

export function LanguagesSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getLanguageLocalizationService()
    const languages: LanguageEntity[] = EntityGenerationService.instance.getLanguageEntities()
    const { isPrinter } = usePrinter()

    return (
    <>
        {/* {insertNewPageInPrint(ApplicationLanguage.DANISH)} */}
        {/* {insertNewPageInPrint(ApplicationLanguage.ENGLISH)} */}
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            {isPrinter ? getPrinterLayout() : getWebLayout()}
        </Paper>    
    </>
        
    )

    function getPrinterLayout(): JSX.Element {
        return (
            <Page>
                {getSectionHeader()}
                {getLanguageComponents()}
            </Page>
        )
    }

    function getWebLayout(): JSX.Element {
        return (
            <>
                {getSectionHeader()}
            
                {getLanguageComponents()}
            </>
        )
    }

    function getSectionHeader(): React.ReactNode {
        return (
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
        )
    }

    function getLanguageComponents(): React.ReactNode {
        return languages.map(entity => (
            <Language languageEntity={entity} key={getUniqueKey(entity)}/>
        ))
    }

    function getUniqueKey(language: LanguageEntity): number {
        return Math.floor(language.importance * language.level * language.nameKey.length)
    }

    function insertNewPageInPrint(language: ApplicationLanguage): ReactNode {
        if (localizationService.getCurrentLanguage() === language) {
            return (<PageBreak/>)
        }  

        return (<></>)        
    }
}