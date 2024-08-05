import { LanguageEntity } from "@/shared/entities/language-entity";
import { IndexProps } from "@/shared/props/index-props";
import { LocalizationService } from "@/shared/services/localization-service";
import { PrintingService } from "@/shared/services/printing-service";
import { Paper, Rating, Typography } from "@mui/material";

interface LanguageProps extends IndexProps {
    languageEntity: LanguageEntity
}

export function Language(props: LanguageProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const printService: PrintingService = PrintingService.instance
    const entityLocalizationService = localizationService.getLanguageLocalizationService()
    
    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography>{entityLocalizationService.getEntityText(props.languageEntity.nameKey)}</Typography>
            <Rating value={props.languageEntity.level} readOnly/>
        </Paper>
    )
}