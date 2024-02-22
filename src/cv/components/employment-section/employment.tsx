import { LabelledTypography } from "@/shared/components/labelled-typography";
import { PageBreak } from "@/shared/components/page-break";
import { EmploymentEntity } from "@/shared/entities/employment-entity";
import { EntityEmploymentLocalizationKeys } from "@/shared/localization/employment-localization";
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

interface EmploymentProps {
    employmentEntity: EmploymentEntity
}

export function Employment(props: EmploymentProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance    
    const entityLocalizationService = localizationService.getEmploymentLocalizationService()
    const employedAsAt: string = buildEmployedAsAtString()
    const employmentPeriode: string = buildEmploymentPeriodeString()
    
    return (
        <>
            <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
                <Typography color={'Highlight'}>
                    {employedAsAt}
                </Typography>
                <Typography>
                    {employmentPeriode}
                </Typography>
                <LabelledTypography 
                    labelText={entityLocalizationService.getComponentText("workDescriptionLabel")}
                    labelProps={{color: 'GrayText'}}
                    mainText={entityLocalizationService.getEntityText(props.employmentEntity.workDescriptionKey)}
                    mainProps={{variant: 'body1', style: {whiteSpace: 'pre-line'}}}/>
            </Paper>
        </>
    )

    function buildEmployedAsAtString(): string {
        const title: ReactNode = entityLocalizationService.getEntityText(props.employmentEntity.jobTitleKey)
        const joiningWord: ReactNode = entityLocalizationService.getComponentText(props.employmentEntity.joiningWordKey)
        const employer: ReactNode = entityLocalizationService.getEntityText(props.employmentEntity.employerKey)
        const city: string = props.employmentEntity.city

        return `${title} ${joiningWord} ${employer}, ${city}`
    }
    
    function buildEmploymentPeriodeString(): string {
        const start: string = getLocalizedDate(props.employmentEntity.startDate)
        
        if (isDateInFuture(props.employmentEntity.startDate)) {
            const expectedStart: ReactNode = entityLocalizationService.getComponentText('expectedStart')
            return `${expectedStart} ${start}`
        }

        if (props.employmentEntity.endDate && isDateInFuture(props.employmentEntity.endDate)) {
            const currentEmployment: ReactNode = entityLocalizationService.getComponentText('currentEmployment')
            const expectedEnd: ReactNode = entityLocalizationService.getComponentText('expectedEnd')
            const endDate: string = getLocalizedDate(props.employmentEntity.endDate)
            const end: string = `${currentEmployment}, ${expectedEnd} ${endDate}`
            return `${start} - ${end}`
        }

        const end: ReactNode = props.employmentEntity.endDate 
            ? getLocalizedDate(props.employmentEntity.endDate) 
            : entityLocalizationService.getComponentText('currentEmployment')

        return `${start} - ${end}`
    }

    function isDateInFuture(date: Date): boolean {
        return Date.now() < date.getTime()
    }

    function getLocalizedDate(date: Date): string {
        return date.toLocaleDateString(localizationService.getCurrentLanguage(), {dateStyle: "medium"})
    }

    function insertNewPageInPrint(employerKey: EntityEmploymentLocalizationKeys, language: ApplicationLanguage): ReactNode {
        if (props.employmentEntity.employerKey === employerKey && localizationService.getCurrentLanguage() === language) {
            return (<PageBreak/>)
        }  

        return (<></>)        
    }
}