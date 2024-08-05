import { LabelledTypography } from "@/shared/components/labelled-typography";
import { PageBreak } from "@/shared/components/page-break";
import { EducationEntity } from "@/shared/entities/education-entity";
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { ReactNode } from "react";
import { IndexProps } from '../../../shared/props/index-props';
import { PrintingService } from "@/shared/services/printing-service";

interface EducationProps extends IndexProps {
    educationEntity: EducationEntity
}

export function Education(props: EducationProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const printService: PrintingService = PrintingService.instance
    const entityLocalizationService = localizationService.getEducationLocalizationService()
    const educationAsAt: string = buildEducationAsAtString()
    const educationPeriode: string = buildEducationPeriodeString()    

    return (
        <>
            {/* {insertNewPageInPrint(1, ApplicationLanguage.DANISH)}
            {insertNewPageInPrint(1, ApplicationLanguage.ENGLISH)} */}
            <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
                <Typography color={'Highlight'}>
                    {educationAsAt}
                </Typography>
                <Typography>
                    {educationPeriode}
                </Typography>
                <LabelledTypography 
                    labelText={entityLocalizationService.getComponentText("educationDescriptionLabel")}
                    labelProps={{color: 'GrayText'}}
                    mainText={entityLocalizationService.getEntityText(props.educationEntity.descriptionKey)}
                    mainProps={{variant: 'body1', style: {whiteSpace: 'pre-line'}}}/>     
            </Paper>
        </>
    )

    function buildEducationAsAtString(): string {
        const grade: ReactNode = entityLocalizationService.getEntityText(props.educationEntity.gradeKey)
        const joiningWord: ReactNode = entityLocalizationService.getComponentText("joiningWord")
        const schoolName: string = props.educationEntity.schoolName
        const city: string = props.educationEntity.city

        return `${grade} ${joiningWord} ${schoolName}, ${city}`
    }

    function buildEducationPeriodeString(): string {
        const start: string = getLocalizedDate(props.educationEntity.startDate)
        
        if (props.educationEntity.endDate && isDateInFuture(props.educationEntity.endDate)) {
            const currentEducation: ReactNode = entityLocalizationService.getComponentText('currentEducation')
            const expectedEnd: ReactNode = entityLocalizationService.getComponentText('expectedEnd')
            const endDate: string = getLocalizedDate(props.educationEntity.endDate)
            const end: string = `${currentEducation}, ${expectedEnd} ${endDate}`
            return `${start} - ${end}`
        }

        const end: ReactNode = props.educationEntity.endDate 
            ? getLocalizedDate(props.educationEntity.endDate) 
            : entityLocalizationService.getComponentText('currentEducation')

        return `${start} - ${end}`
    }

    function isDateInFuture(date: Date): boolean {
        return Date.now() < date.getTime()
    }

    function getLocalizedDate(date: Date): string {
        return date.toLocaleDateString(localizationService.getCurrentLanguage(), {dateStyle: "medium"})
    }
}