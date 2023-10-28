
import { Language, LocalizationService } from '../../shared/services/localization-service';
import './header.scss'

export function Header(): JSX.Element {
    const localizationService = LocalizationService.instance
    
    return (<>
        <div className="header">
            {localizationService.getHeaderText('helloWorld')}
        </div>
        <div className="header">
            <button onClick={() => localizationService.setLanguage(Language.DANISH)}>
                {localizationService.getHeaderText('danish')}
            </button>
            <button onClick={() => localizationService.setLanguage(Language.ENGLISH)}>
                {localizationService.getHeaderText('english')}
            </button>
        </div>    
    </>
    )
}
