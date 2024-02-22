import { ProjectEntity } from "@/shared/entities/project-entity"
import { LocalizationService } from "@/shared/services/localization-service"
import { Paper, Typography } from "@mui/material"

interface ProjectProps {
    projectEntity: ProjectEntity
}

export function Project(props: ProjectProps): JSX.Element {
    const localizationService = LocalizationService.instance     
    
    return (<>
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography color={'Highlight'}>
                {localizationService.getProjectLocalizationService().getEntityText(props.projectEntity.titleKey)}
            </Typography>
            <Typography>
                {localizationService.getProjectLocalizationService().getEntityText(props.projectEntity.descriptionKey)}
            </Typography>
        </Paper>
    </>)
}