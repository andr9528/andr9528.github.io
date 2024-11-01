import { ProjectEntity } from "@/shared/entities/project-entity"
import { EntityGenerationService } from "@/shared/services/entity-generation-service"
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service"
import { Box, Paper, Typography } from "@mui/material"
import React from "react"
import { Page, Pages, usePrinter } from "react-pdf-printer"
import { Project } from "./project-section/project"
import { PrintingService } from "@/shared/services/printing-service"

export function ProjectSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getProjectLocalizationService()
    const projects: ProjectEntity[] = EntityGenerationService.instance.getProjectEntities()
    const { isPrinter } = usePrinter()
    const printService: PrintingService = PrintingService.instance
   
   return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            {isPrinter ? getPrinterLayout() : getWebLayout()}
        </Paper>
    )

    function getPrinterLayout(): JSX.Element {
        return (
            <>
                {printService.insertNewPageInPrintByLanguage(ApplicationLanguage.DANISH)}
                {printService.insertNewPageInPrintByLanguage(ApplicationLanguage.ENGLISH)}
                <Page>
                    {getSectionStart()}
                </Page>
                <Box data-printer-divisible={false}>
                    <Pages>
                        {getProjectComponents()}
                    </Pages>
                </Box>
            </>
        )
    }

    function getWebLayout(): JSX.Element {
        return (
            <>
                {getSectionStart()}
            
                {getProjectComponents()}
            </>
        )
    }

    function getSectionStart(): React.ReactNode {
        return (<>
                <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                    {entityLocalizationService.getComponentText("sectionHeader")}
                </Typography>
                <Typography>
                    {entityLocalizationService.getComponentText("sectionDescription")}
                </Typography>
            </>
        )
    }

    function getProjectComponents(): React.ReactNode {
        return projects.map((entity, index) => (
            <Project data-printer-divisible={isPrinter} projectEntity={entity} key={entity.importance} index={index} />
        ))
    }
}