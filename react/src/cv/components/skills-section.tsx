import { SkillEntity } from "@/shared/entities/skill-entity"
import { EntityGenerationService } from "@/shared/services/entity-generation-service"
import { ApplicationLanguage, LocalizationService } from "@/shared/services/localization-service"
import { Box, Paper, Typography } from "@mui/material"
import { Skill } from "./skills-section/skill"
import { Page, Pages, usePrinter } from "react-pdf-printer"
import { PrintingService } from "@/shared/services/printing-service"

export function SkillsSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getSkillsLocalizationService()
    const skills: SkillEntity[] = EntityGenerationService.instance.getSkillsEntities()
    const { isPrinter } = usePrinter()
    const printService: PrintingService = PrintingService.instance

    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            {isPrinter ? getPrinterLayout() : getWebLayout()}
        </Paper>
    )

    function getPrinterLayout(): JSX.Element {
        return (
            <>
                {/* {printService.insertNewPageInPrintByLanguage(ApplicationLanguage.DANISH)}
                {printService.insertNewPageInPrintByLanguage(ApplicationLanguage.ENGLISH)} */}
                <Page>
                    {getSectionHeader()}
                </Page>
                <Box data-printer-divisible={false}>
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
        return skills.map((entity, index) => (<Skill skillEntity={entity} key={getUniqueKey(entity)} index={index}/>))
    }

    function getUniqueKey(skill: SkillEntity): number {
        return Math.floor(skill.importance * skill.level * skill.name.length)
    }
}