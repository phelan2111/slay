/** @format */

import { Box, IconButton } from '@mui/material';
import { BiMessageSquareDots } from 'react-icons/bi';

const HeaderComponents = () => {
    return (
        <Box className="flex items-center justify-between px-4 py-2 dark:bg-gradient-to-r from-purple-600 to-blue-600 rounded-bl-3xl rounded-br-3xl">
            <Box className="text-3xl text-black dark:text-white">
                SLAY.<span className="text-sm">hello</span>
            </Box>
            <IconButton>
                <BiMessageSquareDots className="text-black dark:text-white bg-inherit" />
            </IconButton>
        </Box>
    );
};

export default HeaderComponents;
