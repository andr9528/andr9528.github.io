
import { Button, ButtonGroup, Divider, Grid, Paper, Theme, ThemeProvider, Typography } from '@mui/material';
import { Language, LocalizationService } from '../shared/services/localization-service';
import { CenteredBox } from '@/shared/components/centered-box';
import { RightAlignedBox } from '@/shared/components/right-aligned-box';
import { ThemeService } from '../shared/services/theme-service';
import { PrintingService } from '@/shared/services/printing-service';

export function Header(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const themeService: ThemeService = ThemeService.instance
    const printingService: PrintingService = PrintingService.instance

    return (
        <ThemeProvider theme={themeService.getTheme()}>
            <Grid container width='100%'>
                <Grid width={'30%'}>

                </Grid>
                <Grid width={'40%'}>
                    <CenteredBox>
                        <Paper elevation={4} sx={{padding: '10px'}}>
                            <Typography variant='h5'>{localizationService.getHeaderText('siteTitle')}</Typography>
                        </Paper>
                    </CenteredBox>
                </Grid>
                <Grid width={'30%'}>
                    <RightAlignedBox>
                        <ButtonGroup >
                            <Button onClick={() => setLanguageToDanish()}>
                                <Typography>{localizationService.getHeaderText('danishButton')}</Typography>
                            </Button>
                            <Button onClick={() => setLanguageToEnglish()}>
                                <Typography>{localizationService.getHeaderText('englishButton')}</Typography>
                            </Button>
                        </ButtonGroup>
                        <Divider orientation='vertical' sx={{marginX: '10px', borderRightWidth: 5}}/>
                        <ButtonGroup>
                            <Button onClick={() => printCv()}>
                                <Typography>{localizationService.getHeaderText('printButton')}</Typography>
                            </Button>
                        </ButtonGroup>
                    </RightAlignedBox>     
                </Grid>
            </Grid>
        </ThemeProvider>
    )

    function setLanguageToDanish(): void {
        localizationService.setLanguage(Language.DANISH)
    }

    function setLanguageToEnglish(): void {
        localizationService.setLanguage(Language.ENGLISH)
    }

    async function printCv(): Promise<void> {
        printingService.PrintPdf()
    }
}
