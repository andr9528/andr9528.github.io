import { LocalizationService } from "@/shared/services/localization-service"
import { Paper, Typography } from "@mui/material"

export function ProfileSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getEmploymentLocalizationService()
    
    return (
    <Paper elevation={2} sx={{padding: '5px'}}>
        {/* <Typography variant="h4" display={'flex'} justifyContent={"center"}>
            {entityLocalizationService.getComponentText("sectionHeader")}
        </Typography>    */}
    </Paper>
    )
}