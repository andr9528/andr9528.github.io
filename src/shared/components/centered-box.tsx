import { Box, BoxProps } from "@mui/material"

export function CenteredBox(props: BoxProps): JSX.Element {
    return (
        <Box justifyContent={'center'} display={'flex'} alignItems={'center'} height={'100%'} margin={'10px'} {...props}>
            {props.children}
        </Box>
    )
}