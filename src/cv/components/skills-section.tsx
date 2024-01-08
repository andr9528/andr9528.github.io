import { SkillEntity } from "@/shared/entities/skill-entity"
import { EntityGenerationService } from "@/shared/services/entity-generation-service"
import { LocalizationService } from "@/shared/services/localization-service"
import { Box, Paper, Typography } from "@mui/material"
import { Skill } from "./skills-section/skill"
import { Page, Pages, usePrinter } from "react-pdf-printer"

export function SkillsSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getSkillsLocalizationService()
    const skills: SkillEntity[] = EntityGenerationService.instance.getSkillsEntities()
    const { isPrinter } = usePrinter()

    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            {isPrinter ? getPrinterLayout() : getWebLayout()}
        </Paper>
    )

    function getPrinterLayout(): JSX.Element {
        return (
            <>
                <Page>
                    {getSectionHeader()}
                </Page>
                <Box data-printer-divisible={isPrinter}>
                    <Pages>
                        {getSkillComponents()}
                    </Pages>
                </Box>
            </>
        )
    }

    function getWebLayout(): JSX.Element {
        return (
            <>
                {getSectionHeader()}
            
                {getSkillComponents()}
            </>
        )
    }

    function getSectionHeader(): React.ReactNode {
        return (
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
        )
    }

    function getSkillComponents(): React.ReactNode {
        return skills.map(entity => (<Skill skillEntity={entity} key={getUniqueKey(entity)}/>))
    }

    function getUniqueKey(skill: SkillEntity): number {
        return Math.floor(skill.importance * skill.level * skill.name.length)
    }
}