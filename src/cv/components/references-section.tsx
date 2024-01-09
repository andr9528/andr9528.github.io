import { ReferenceEntity } from "@/shared/entities/reference-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Box, Paper, Typography } from "@mui/material";
import { Reference } from "./reference-section/reference";
import { Page, Pages, usePrinter } from "react-pdf-printer";

export function ReferencesSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getReferencesLocalizationService()
    const references: ReferenceEntity[] = EntityGenerationService.instance.getReferencesEntities()
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
                        {getLinkComponents()}
                    </Pages>
                </Box>
            </>
        )
    }

    function getWebLayout(): JSX.Element {
        return (
            <>
                {getSectionHeader()}
            
                {getLinkComponents()}
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

    function getLinkComponents(): React.ReactNode {
        return references.map(entity => (
            <Reference referenceEntity={entity} key={getUniqueKey(entity)}/>
        ))
    }

    function getUniqueKey(reference: ReferenceEntity): number {
        return Math.floor(reference.importance * reference.name.length)
    }
}