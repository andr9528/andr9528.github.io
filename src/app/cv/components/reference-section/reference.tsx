
import { ReferenceEntity } from "@/shared/entities/reference-entity";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";

interface ReferenceProps {
    referenceEntity: ReferenceEntity
}

export function Reference(props: ReferenceProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getReferencesLocalizationService()
    const whoLine: string = buildWhoLine()
    const contactInfoLine: string = buildContactInfoLine()

    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography color={'Highlight'}>{whoLine}</Typography>
            <Typography>{contactInfoLine}</Typography>
        </Paper>
    )

    function buildWhoLine(): string {
        return `${props.referenceEntity.name}, ${entityLocalizationService.getEntityText(props.referenceEntity.companyNameKey)}`
    }

    function buildContactInfoLine(): string {
        const phoneNumber: string = props.referenceEntity.phoneNumber 
            ? `${entityLocalizationService.getComponentText("phoneNumberLabel")}: ${ props.referenceEntity.phoneNumber}` 
            : ''
        const email: string = props.referenceEntity.email
            ? `${entityLocalizationService.getComponentText("emailLabel")}: ${ props.referenceEntity.email}`
            : ''
        const joiningText: string = props.referenceEntity.phoneNumber ? '; ' : ''

        return `${phoneNumber}${joiningText}${email}`
    }
}