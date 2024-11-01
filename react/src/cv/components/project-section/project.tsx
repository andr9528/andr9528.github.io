import { PageBreak } from "@/shared/components/page-break"
import { ProjectEntity } from "@/shared/entities/project-entity"
import { IndexProps } from "@/shared/props/index-props"
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service"
import { PrintingService } from "@/shared/services/printing-service"
import { Paper, Typography } from "@mui/material"
import { ReactNode } from "react"

interface ProjectProps extends IndexProps {
    projectEntity: ProjectEntity
}

export function Project(props: ProjectProps): JSX.Element {
    const localizationService = LocalizationService.instance     
    const printService: PrintingService = PrintingService.instance
    
    return (
    <>
        {/* {printService.insertNewPageInPrintByProps(props, 0, ApplicationLanguage.DANISH)}
        {printService.insertNewPageInPrintByProps(props, 0, ApplicationLanguage.ENGLISH)} */}
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography color={'Highlight'}>
                {localizationService.getProjectLocalizationService().getEntityText(props.projectEntity.titleKey)}
            </Typography>
            <Typography>
                {localizationService.getProjectLocalizationService().getEntityText(props.projectEntity.descriptionKey)}
            </Typography>
        </Paper>
    </>
    )
}