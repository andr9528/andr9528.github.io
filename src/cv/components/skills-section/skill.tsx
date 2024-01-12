import { PageBreak } from "@/shared/components/page-break";
import { SkillEntity } from "@/shared/entities/skill-entity";
import { Paper, Rating, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SkillProps {
    skillEntity: SkillEntity
}

export function Skill(props: SkillProps): JSX.Element {
    return (
        <>
            {insertNewPageInPrint('Java')}
            <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
                <Typography>{props.skillEntity.name}</Typography>
                <Rating value={props.skillEntity.level} readOnly/>
            </Paper>
        </>
        
    )

    function insertNewPageInPrint(skillName: string): ReactNode {
        if (props.skillEntity.name !== skillName) {
            return (<></>)
        } else {        
            return (<PageBreak/>)
        }
    }
}