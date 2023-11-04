import { Typography, TypographyProps } from "@mui/material";

export function HighlightedTypography(props: TypographyProps): JSX.Element {
    return (
    <Typography color={"Highlight"} {...props}>
        {props.children}
    </Typography>)
}