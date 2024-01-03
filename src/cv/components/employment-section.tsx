import { EmploymentEntity } from "@/shared/entities/employment-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { Employment } from "./employment-section/employment";

export function EmploymentSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getEmploymentLocalizationService()
    const employments: EmploymentEntity[] = EntityGenerationService.instance.getEmploymentEntities()
    
    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
            
            {employments.map(entity => (
                <Employment employmentEntity={entity} key={entity.startDate.getTime()}/>
            ))}    
        </Paper>
    )
}