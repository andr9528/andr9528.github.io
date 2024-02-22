import { EducationEntity } from "@/shared/entities/education-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Box, Paper, Typography } from "@mui/material";
import { Education } from "./education-section/education";
import { Page, Pages, usePrinter } from "react-pdf-printer";

export function EducationSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getEducationLocalizationService()
    const educations: EducationEntity[] = EntityGenerationService.instance.getEducationEntities()
    const { isPrinter } = usePrinter()

    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            {isPrinter ? getPrinterLayout() : getWebLayout()}
        </Paper>
    )

    function getPrinterLayout(): JSX.Element {
        return (
            <>
                <Page>
                    {getSectionHeader()}
                </Page>
                <Box data-printer-divisible={false}>
                    <Pages>
                        {getEducationComponents()}
                    </Pages>
                </Box>
            </>
        )
    }

    function getWebLayout(): JSX.Element {
        return (
            <>
                {getSectionHeader()}
            
                {getEducationComponents()}
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

    function getEducationComponents(): React.ReactNode {
        return educations.map((entity, index) => (
            <Education educationEntity={entity} key={entity.startDate.getTime()} index={index}/>
        ))
    }
}