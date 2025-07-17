import { EmploymentEntity } from "@/shared/entities/employment-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service";
import { Box, Paper, Typography } from "@mui/material";
import { Employment } from "./employment-section/employment";
import { Page, Pages, usePrinter } from "react-pdf-printer";
import { useEffect } from "react";
import { PrintingService } from "@/shared/services/printing-service";

export function EmploymentSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getEmploymentLocalizationService()
    const employments: EmploymentEntity[] = EntityGenerationService.instance.getEmploymentEntities()
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
                    {getSectionHeader()}
                </Page>
                <Box data-printer-divisible={false}>
                    <Pages>
                        {getEmploymentComponents()}
                    </Pages>
                </Box>
            </>
        )
    }

    function getWebLayout(): JSX.Element {
        return (
            <>
                {getSectionHeader()}
            
                {getEmploymentComponents()}
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

    function getEmploymentComponents(): React.ReactNode {
        return employments.map((entity, index) => (
            <Employment data-printer-divisible={isPrinter} employmentEntity={entity} key={entity.startDate.getTime()} index={index}/>
        ))
    }
}