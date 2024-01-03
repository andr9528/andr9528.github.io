import { GeneralInformationEntity } from "@/shared/entities/general-information-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { Paper, Typography } from "@mui/material";
import { LocalizationService } from '../../shared/services/localization-service';
import { LabelledTypography } from "@/shared/components/labelled-typography";

export function GeneralInformationSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getGeneralInformationLocalizationService()
    const generalInformation: GeneralInformationEntity = EntityGenerationService.instance.getGeneralInformationEntity()
    const fullName: string = `${generalInformation.firstName} ${generalInformation.middleName} ${generalInformation.lastName}`
    const fullAddress: string = 
        `${generalInformation.address}, ${generalInformation.postalNumber} ${generalInformation.city}, ${entityLocalizationService.getEntityText(generalInformation.countryKey)}`

    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
            <LabelledTypography 
                labelProps={{variant: 'h5'}} 
                labelText={entityLocalizationService.getComponentText("fullNameLabel")} 
                mainText={fullName}/>
            <LabelledTypography 
                labelProps={{variant: 'h5'}} 
                labelText={entityLocalizationService.getComponentText("dateOfBirthLabel")} 
                mainText={generalInformation.dateOfBirth.toLocaleDateString(localizationService.getCurrentLanguage(), {dateStyle: "full"})}/>
            <LabelledTypography 
                labelProps={{variant: 'h5'}} 
                labelText={entityLocalizationService.getComponentText("emailLabel")} 
                mainText={generalInformation.email}/>
            <LabelledTypography 
                labelProps={{variant: 'h5'}} 
                labelText={entityLocalizationService.getComponentText("phoneNumberLabel")} 
                mainText={generalInformation.phoneNumber.toString()}/>
            <LabelledTypography 
                labelProps={{variant: 'h5'}} 
                labelText={entityLocalizationService.getComponentText("fullAddressLabel")} 
                mainText={fullAddress}/>
            
        </Paper>
        )
}