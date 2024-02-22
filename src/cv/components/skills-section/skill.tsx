import { PageBreak } from "@/shared/components/page-break";
import { SkillEntity, SkillName } from "@/shared/entities/skill-entity";
import { Paper, Rating, Typography } from "@mui/material";
import { ReactNode } from "react";
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service";

interface SkillProps {
    skillEntity: SkillEntity
}

export function Skill(props: SkillProps): JSX.Element {
    const localizationService = LocalizationService.instance 
    
    return (
        <>
            {/* {insertNewPageInPrint(SkillName.JAVA, Language.DANISH)} */}
            <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
                <Typography>{props.skillEntity.name}</Typography>
                <Rating value={props.skillEntity.level} readOnly/>
            </Paper>
        </>
        
    )

    function insertNewPageInPrint(skillName: SkillName, language: ApplicationLanguage): ReactNode {
        if (props.skillEntity.name === skillName && localizationService.getCurrentLanguage() === language) {
            return (<PageBreak/>)
        }  

        return (<></>)        
    }
}