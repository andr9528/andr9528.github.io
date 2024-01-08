import { LanguageEntity } from "@/shared/entities/language-entity";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Rating, Typography } from "@mui/material";

interface LanguageProps {
    languageEntity: LanguageEntity
}

export function Language(props: LanguageProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getLanguageLocalizationService()
    
    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography>{entityLocalizationService.getEntityText(props.languageEntity.nameKey)}</Typography>
            <Rating value={props.languageEntity.level} readOnly/>
        </Paper>
    )
}