import { ThemeService } from "@/shared/services/theme-service";
import { Grid, Paper, ThemeProvider } from "@mui/material";
import { GeneralInformation } from "./components/general-information";

export function CV(): JSX.Element {
    const themeService: ThemeService = ThemeService.instance    

    return (
        <ThemeProvider theme={themeService.getTheme()}>        
            <Paper elevation={8} sx={{margin: '20px', padding: '20px', height: '100%', display: 'flex'}}>
                    <Grid container width='100%'>
                        <Grid width={'70%'}>

                        </Grid>
                        <Grid width={'30%'}>
                            <GeneralInformation/>
                        </Grid>                
                    </Grid>
            </Paper>
        </ThemeProvider>
        )
}