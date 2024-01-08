import { LocalizationService } from "@/shared/services/localization-service"
import { Paper, Typography } from "@mui/material"
import { Page, usePrinter } from "react-pdf-printer"

export function ProfileSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getProfileLocalizationService()
    const { isPrinter } = usePrinter()
    
    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            {isPrinter ? getPrinterLayout() : getWebLayout()}
        </Paper>
    )

    function getPrinterLayout(): JSX.Element {
        return (
            <Page>
                {getSectionHeader()}
                {getDescriptionComponents()}
            </Page>                
        )
    }

    function getWebLayout(): JSX.Element {
        return (
            <>
                {getSectionHeader()}            
                {getDescriptionComponents()}
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

    function getDescriptionComponents(): React.ReactNode {
        return (
            <Typography variant="body1" style={{whiteSpace: 'pre-line'}}>
                {entityLocalizationService.getComponentText("description")}
            </Typography>
        )
    }
}