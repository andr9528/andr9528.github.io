import { ReferenceEntity } from "@/shared/entities/reference-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { Reference } from "./reference-section/reference";

export function ReferencesSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getReferencesLocalizationService()
    const references: ReferenceEntity[] = EntityGenerationService.instance.getReferencesEntities()
    
    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
        
            {references.map(entity => (
                <Reference referenceEntity={entity} key={getUniqueKey(entity)}/>
            ))}    
        </Paper>
    )

    function getUniqueKey(reference: ReferenceEntity): number {
        return Math.floor(reference.importance * reference.name.length)
    }
}