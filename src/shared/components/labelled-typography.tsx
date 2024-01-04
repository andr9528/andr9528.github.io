import { Typography, TypographyProps } from "@mui/material";
import { ReactNode } from "react";

interface LabelledTypographyProps {
    labelProps?: TypographyProps
    mainProps?: TypographyProps
    labelText: ReactNode
    mainText: ReactNode
}

export function LabelledTypography(props: LabelledTypographyProps): JSX.Element {
    const labelProps = props.labelProps && 'color' in props.labelProps ? props.labelProps : {...props.labelProps, color: 'Highlight'}

    return (
        <>
            <Typography {...labelProps}>{props.labelText}</Typography>
            <Typography component={'span'} {...props.mainProps}>{props.mainText}</Typography>
        </>
        )
}