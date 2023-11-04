import { ThemeService } from "@/shared/services/theme-service";
import { Divider, Grid, Paper, ThemeProvider } from "@mui/material";
import { GeneralInformationSection } from "./components/general-information-section";
import { EmploymentSection } from "./components/employment-section";

export function CV(): JSX.Element {
    const themeService: ThemeService = ThemeService.instance    

    return (
        <ThemeProvider theme={themeService.getTheme()}>        
            <Paper elevation={8} sx={{margin: '20px', padding: '20px', height: '100%', display: 'flex'}}>
                    <Grid container width='100%'>
                        <Grid width={'69%'}>
                            <EmploymentSection/>
                        </Grid>
                        <Grid width={'2%'} display={"grid"}>
                            <Divider orientation='vertical' sx={{marginX: '10px', borderRightWidth: 5, width: '1px', justifySelf: 'center'}}/>
                        </Grid>
                        <Grid width={'29%'}>
                            <GeneralInformationSection/>
                        </Grid>                
                    </Grid>
            </Paper>
        </ThemeProvider>
        )
}