import { EducationEntity } from "@/shared/entities/education-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { Education } from "./education-section/education";

export function EducationSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getEducationLocalizationService()
    const educations: EducationEntity[] = EntityGenerationService.instance.getEducationEntities()

    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
        
            {educations.map(entity => (
                <Education educationEntity={entity} key={entity.startDate.getTime()}/>
            ))}    
        </Paper>
    )
}