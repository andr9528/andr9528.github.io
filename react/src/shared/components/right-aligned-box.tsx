import { Box, BoxProps } from "@mui/material"

export function RightAlignedBox(props: BoxProps): JSX.Element {
    return (
        <Box justifyContent={'right'} display={'flex'} alignItems={'center'} height={'100%'} margin={'10px'} {...props}>
            {props.children}
        </Box>
    )
}