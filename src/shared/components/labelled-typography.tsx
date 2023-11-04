import { Typography, TypographyProps } from "@mui/material";
import { HighlightedTypography } from "./highlidghted-typography";

interface LabelledTypographyProps {
    labelProps?: TypographyProps
    mainProps?: TypographyProps
    labelText: string
    mainText: string
}

export function LabelledTypography(props: LabelledTypographyProps): JSX.Element {
    return (
        <>
            <HighlightedTypography {...props.labelProps}>{props.labelText}</HighlightedTypography>
            <Typography {...props.mainProps}>{props.mainText}</Typography>
        </>
        )
}