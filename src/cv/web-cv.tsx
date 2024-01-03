import { Divider, Grid, Paper } from "@mui/material";
import { EducationSection } from "./components/education-section";
import { EmploymentSection } from "./components/employment-section";
import { GeneralInformationSection } from "./components/general-information-section";
import { LanguagesSection } from "./components/languages-section";
import { LinksSection } from "./components/links-section";
import { ProfileSection } from "./components/profile-section";
import { ReferencesSection } from "./components/references-section";
import { SkillsSection } from "./components/skills-section";

export function WebCv(): JSX.Element {
    return (
        <Paper elevation={8} sx={{margin: '20px', padding: '20px', height: '100%', display: 'flex'}}>
            <Grid container width='100%'>
                <Grid width={'69%'}>
                    <ProfileSection/>
                    <EmploymentSection/>
                    <EducationSection/>
                    <ReferencesSection/>
                </Grid>
                <Grid width={'2%'} display={"grid"}>
                    <Divider orientation='vertical' sx={{marginX: '10px', borderRightWidth: 5, width: '1px', justifySelf: 'center'}}/>
                </Grid>
                <Grid width={'29%'}>
                    <GeneralInformationSection/>
                    <LinksSection/>
                    <SkillsSection/>
                    <LanguagesSection/>
                </Grid>                
            </Grid>
        </Paper>
    )
}