import { LabelledTypography } from "@/shared/components/labelled-typography";
import { EmploymentEntity } from "@/shared/entities/employment-entity";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";

interface EmploymentProps {
    employmentEntity: EmploymentEntity
}

export function Employment(props: EmploymentProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance    
    const employedAsAt: string = buildEmployedAsAtString()
    const employmentPeriode: string = buildEmploymentPeriodeString()
    
    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography color={'Highlight'}>
                {employedAsAt}
            </Typography>
            <Typography>
                {employmentPeriode}
            </Typography>
            <LabelledTypography 
                labelText={localizationService.getComponentEmploymentText("workDescriptionLabel")}
                labelProps={{color: 'GrayText'}}
                mainText={props.employmentEntity.workDescription}
                mainProps={{variant: 'body1', style: {whiteSpace: 'pre-line'}}}/>
        </Paper>
    )

    function buildEmployedAsAtString(): string {
        const title: string = props.employmentEntity.jobTitle
        const joiningWord: string = localizationService.getComponentEmploymentText('joiningWord')
        const employer: string = props.employmentEntity.employer
        const city: string = props.employmentEntity.city

        return `${title} ${joiningWord} ${employer}, ${city}`
    }
    
    function buildEmploymentPeriodeString(): string {
        const start: string = getLocalizedDate(props.employmentEntity.startDate)
        
        if (props.employmentEntity.endDate && isDateInFuture(props.employmentEntity.endDate)) {
            const currentEmplyment: string = localizationService.getComponentEmploymentText('currentEmployment')
            const expectedEnd: string = localizationService.getComponentEmploymentText('expectedEnd')
            const endDate: string = getLocalizedDate(props.employmentEntity.endDate)
            const end: string = `${currentEmplyment}, ${expectedEnd} ${endDate}`
            return `${start} - ${end}`
        }

        const end: string = props.employmentEntity.endDate 
            ? getLocalizedDate(props.employmentEntity.endDate) 
            : localizationService.getComponentEmploymentText('currentEmployment')

        return `${start} - ${end}`
    }

    function isDateInFuture(date: Date): boolean {
        return Date.now() < date.getTime()
    }

    function getLocalizedDate(date: Date): string {
        return date.toLocaleDateString(localizationService.getCurrentLanguage(), {dateStyle: "medium"})
    }
}