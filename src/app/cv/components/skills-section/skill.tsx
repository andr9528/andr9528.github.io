import { SkillEntity } from "@/shared/entities/skill-entity";
// import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Rating, Typography } from "@mui/material";

interface SkillProps {
    skillEntity: SkillEntity
}

export function Skill(props: SkillProps): JSX.Element {
    // const localizationService: LocalizationService = LocalizationService.instance    
    // const entityLocalizationService = localizationService.getSkillsLocalizationService()

    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography>{props.skillEntity.name}</Typography>
            <Rating value={props.skillEntity.level} readOnly/>
        </Paper>
    )
}