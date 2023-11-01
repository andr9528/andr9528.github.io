import { Theme, createTheme } from "@mui/material"

export class ThemeService {
    public static instance = new ThemeService()
    private theme: Theme

    private constructor() {
        this.theme = createTheme({
            palette: {
                primary: {
                  main: '#004d40',
                },
                secondary: {
                  main: '#03a9f4',
                },
              },
        })        
    }

    public getTheme(): Theme {
        return this.theme
    }
}