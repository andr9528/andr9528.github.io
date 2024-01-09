import { ThemeService } from "@/shared/services/theme-service";
import { ThemeProvider } from "@mui/material";
import { PrinterProvider } from "react-pdf-printer";

interface ProvidersProps {
    children: React.ReactNode;
  }

export function Providers(props: ProvidersProps): JSX.Element {
    const themeService: ThemeService = ThemeService.instance    
    
    return (
    <ThemeProvider theme={themeService.getTheme()}>
        <PrinterProvider configuration={{ useAsync: false}}>                
            {props.children}
        </PrinterProvider>
    </ThemeProvider>
    )
}