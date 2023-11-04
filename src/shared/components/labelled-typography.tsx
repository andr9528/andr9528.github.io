import { Color, Typography, TypographyProps } from "@mui/material";

interface LabelledTypographyProps {
    labelProps?: TypographyProps
    mainProps?: TypographyProps
    labelText: string
    mainText: string
}

export function LabelledTypography(props: LabelledTypographyProps): JSX.Element {
    const labelProps = props.labelProps && 'color' in props.labelProps ? props.labelProps : {...props.labelProps, color: 'Highlight'}

    return (
        <>
            <Typography {...labelProps}>{props.labelText}</Typography>
            <Typography {...props.mainProps}>{props.mainText}</Typography>
        </>
        )
}