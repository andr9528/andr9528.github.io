import { SkillEntity } from "@/shared/entities/skill-entity";
import { Paper, Rating, Typography } from "@mui/material";

interface SkillProps {
    skillEntity: SkillEntity
}

export function Skill(props: SkillProps): JSX.Element {
    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography>{props.skillEntity.name}</Typography>
            <Rating value={props.skillEntity.level} readOnly/>
        </Paper>
    )
}