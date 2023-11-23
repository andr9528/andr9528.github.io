import { LanguageEntity } from "@/shared/entities/language-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { Language } from "./language-section/language";

export function LanguagesSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getLanguageLocalizationService()
    const languages: LanguageEntity[] = EntityGenerationService.instance.getLanguageEntities()

    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
        
            {languages.map(entity => (
                <Language languageEntity={entity} key={getUniqueKey(entity)}/>
            ))}    
        </Paper>
    )

    function getUniqueKey(language: LanguageEntity): number {
        return Math.floor(language.importance * language.level * language.nameKey.length)
    }
}