import { SkillEntity } from "@/shared/entities/skill-entity"
import { EntityGenerationService } from "@/shared/services/entity-generation-service"
import { LocalizationService } from "@/shared/services/localization-service"
import { Paper, Typography } from "@mui/material"
import { Skill } from "./skills-section/skill"

export function SkillsSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getSkillsLocalizationService()
    const skills: SkillEntity[] = EntityGenerationService.instance.getSkillsEntities()

    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
            {skills.map(skill => (<Skill skillEntity={skill} key={getUniqueKey(skill)}/>))}
        </Paper>
        )

    function getUniqueKey(skill: SkillEntity): number {
        return Math.floor(skill.importance * skill.level * skill.name.length)
    }
}