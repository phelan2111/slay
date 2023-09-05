/** @format */

import { Box, IconButton } from '@mui/material';
import { BiSearchAlt } from 'react-icons/bi';

const HeaderComponents = () => {
    return (
        <Box className="flex items-center justify-between px-4 py-2 backdrop-blur-3xl dark:bg-gradient-to-r from-purple-600 to-blue-600 rounded-bl-3xl rounded-br-3xl">
            <Box className="text-3xl text-white">
                SLAY.<span className="text-sm">hello</span>
            </Box>
            <IconButton>
                <BiSearchAlt className="text-white bg-inherit" />
            </IconButton>
        </Box>
    );
};

export default HeaderComponents;
