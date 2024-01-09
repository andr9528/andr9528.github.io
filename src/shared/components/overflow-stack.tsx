import { Stack } from "@mui/material"

interface OverflowStackProps {
    children: React.ReactNode
}

export function OverflowStack(props: OverflowStackProps): JSX.Element {
    return (
        <Stack height={'100%'} overflow={"hidden"} margin={0}>
            {props.children}
        </Stack>
    )
}