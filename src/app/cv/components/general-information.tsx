import { GeneralInformation } from "@/shared/entities/general-information";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { Paper, Typography } from "@mui/material";
import { LocalizationService } from '../../../shared/services/localization-service';
import { LabelledTypography } from "@/shared/components/labelled-typography";

export function GeneralInformation(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const generalInformation: GeneralInformation = EntityGenerationService.instance.getGeneralInformation()
    const fullName: string = `${generalInformation.firstName} ${generalInformation.middleName} ${generalInformation.lastName}`

    return (
        <Paper elevation={2} sx={{padding: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>{localizationService.getComponetGeneralInformationText("sectionHeader")}</Typography>
            <LabelledTypography 
                labelProps={{variant: 'h5'}} 
                labelText={localizationService.getComponetGeneralInformationText("fullName")} 
                mainText={fullName}/>
        </Paper>
        )
}