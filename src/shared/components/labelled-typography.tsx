import { Typography, TypographyProps } from "@mui/material";

interface LabelledTypographyProps {
    labelProps?: TypographyProps
    mainProps?: TypographyProps
    labelText: string
    mainText: string
}

export function LabelledTypography(props: LabelledTypographyProps): JSX.Element {
    return (
        <>
            <Typography color={"Highlight"} {...props.labelProps}>{props.labelText}</Typography>
            <Typography {...props.mainProps}>{props.mainText}</Typography>
        </>
        )
}