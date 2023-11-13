import { Paper, Typography } from "@mui/material";

export function ReferencesSection(): JSX.Element {
    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {/* {entityLocalizationService.getComponentText("sectionHeader")} */}
            </Typography>
        
            {/* {employments.map(entity => (
                <Employment employmentEntity={entity} key={entity.startDate.getTime()}/>
            ))}     */}
        </Paper>
    )
}