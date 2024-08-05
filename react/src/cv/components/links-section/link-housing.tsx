import { LinkEntity } from "@/shared/entities/link-entity";
import { IndexProps } from "@/shared/props/index-props";
import { LocalizationService } from "@/shared/services/localization-service";
import { PrintingService } from "@/shared/services/printing-service";
import { Link, Paper, Typography } from "@mui/material";

interface LinkHousingProps extends IndexProps {
    linkEntity: LinkEntity
}

export function LinkHousing(props: LinkHousingProps): JSX.Element {
    const localizationService: LocalizationService = LocalizationService.instance    
    const printService: PrintingService = PrintingService.instance
    const entityLocalizationService = localizationService.getLinksLocalizationService()
    
    return (
        <Paper elevation={1} sx={{padding: '5px', margin: '5px'}}>
            <Typography color={'Highlight'}>
                {entityLocalizationService.getEntityText(props.linkEntity.titleKey)}
            </Typography>
            <Link href={props.linkEntity.address}>
                {props.linkEntity.address}
            </Link>
            <Typography>
                {entityLocalizationService.getEntityText(props.linkEntity.remarkKey)}
            </Typography>            
        </Paper>
    )
}