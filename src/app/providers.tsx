import { ThemeService } from "@/shared/services/theme-service";
import { ThemeProvider } from "@mui/material";
import { PrinterProvider } from "react-pdf-printer";

interface ProvidersProps {
    children: React.ReactNode;
  }

export function Providers(props: ProvidersProps): JSX.Element {
    const themeService: ThemeService = ThemeService.instance    
    
    return (
    <PrinterProvider configuration={{ useAsync: true }}>
        <ThemeProvider theme={themeService.getTheme()}> 
            {props.children}
        </ThemeProvider>
    </PrinterProvider>
    )
}