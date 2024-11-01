import { SkillEntity } from "@/shared/entities/skill-entity";
import { Paper, Rating, Typography } from "@mui/material";
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service";
import { PrintingService } from "@/shared/services/printing-service";
import { IndexProps } from "@/shared/props/index-props";

interface SkillProps extends IndexProps {
    skillEntity: SkillEntity
}

export function Skill(props: SkillProps): JSX.Element {
    const localizationService = LocalizationService.instance 
    const printService: PrintingService = PrintingService.instance
    
    return (
        <>
            {/* {printService.insertNewPageInPrintByProps(props, 3, ApplicationLanguage.DANISH)}
            {printService.insertNewPageInPrintByProps(props, 3, ApplicationLanguage.ENGLISH)} */}
            <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
                <Typography>{props.skillEntity.name}</Typography>
                <Rating value={props.skillEntity.level} readOnly/>
            </Paper>
        </>    
    )
}