import { LinkEntity } from "@/shared/entities/link-entity";
import { LocalizationService } from "@/shared/services/localization-service";
import { Link, Paper, Typography } from "@mui/material";

interface LinkHousingProps {
    linkEntity: LinkEntity
}

export function LinkHousing(props: LinkHousingProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance    
    const entityLocalizationService = localizationService.getLinksLocalizationService()
    
    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography color={'Highlight'}>
                {entityLocalizationService.getEntityText(props.linkEntity.titleKey)}
            </Typography>
            <Link>
                {props.linkEntity.address}
            </Link>
            <Typography>
                {entityLocalizationService.getEntityText(props.linkEntity.remarkKey)}
            </Typography>            
        </Paper>
    )
}