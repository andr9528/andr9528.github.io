import { LinkEntity } from "@/shared/entities/link-entity";
import { EntityGenerationService } from "@/shared/services/entity-generation-service";
import { LocalizationService } from "@/shared/services/localization-service";
import { Paper, Typography } from "@mui/material";
import { LinkHousing } from "./links-section/link-housing";

export function LinksSection(): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance
    const entityLocalizationService = localizationService.getLinksLocalizationService()
    const links: LinkEntity[] = EntityGenerationService.instance.getLinkEntities()
    
    return (
        <Paper elevation={2} sx={{padding: '5px', margin: '5px'}}>
            <Typography variant="h4" display={'flex'} justifyContent={"center"}>
                {entityLocalizationService.getComponentText("sectionHeader")}
            </Typography>
        
            {links.map(entity => (
                <LinkHousing linkEntity={entity} key={getUniqueKey(entity)}/>
            ))}    
        </Paper>
    )

    function getUniqueKey(link: LinkEntity): number {
        return Math.floor(link.importance * link.address.length)
    }
}