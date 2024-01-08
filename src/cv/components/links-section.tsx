import { LinkEntity } from "@/shared/entities/link-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Box, Paper, Typography } from "@mui/material";
import { LinkHousing } from "./links-section/link-housing";
import { Page, Pages, usePrinter } from "react-pdf-printer";

export function LinksSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getLinksLocalizationService()
    const links: LinkEntity[] = EntityGenerationService.instance.getLinkEntities()
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
                <Box data-printer-divisible={isPrinter}>
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
        return links.map(entity => (
            <LinkHousing linkEntity={entity} key={getUniqueKey(entity)}/>
        ))
    }

    function getUniqueKey(link: LinkEntity): number {
        return Math.floor(link.importance * link.address.length)
    }
}