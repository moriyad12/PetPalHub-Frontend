import {useState} from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
<<<<<<< HEAD
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
=======
// import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
// import {TabList} from "@mui/lab";
>>>>>>> 94c5de568ac52e086d892181e46994185dcd1c14

export default function Tabs({setTabIndex}) {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setTabIndex(newValue)
    };

    return (
        <Box sx={{width: '100%', typography: 'body1'}}>
<<<<<<< HEAD
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider', width: '100%'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab sx={{width: '50%',maxWidth:"100%"}} label="Launched Events" value="1"/>
                        <Tab sx={{width: '50%',maxWidth:"100%"}} label="Drafted Events" value="2"/>
                    </TabList>
                </Box>
            </TabContext>
=======
            {/*<TabContext value={value}>*/}
            {/*    <Box sx={{borderBottom: 1, borderColor: 'divider', width: '100%'}}>*/}
            {/*        <TabList onChange={handleChange} aria-label="lab API tabs example">*/}
            {/*            <Tab sx={{width: '50%',maxWidth:"100%"}} label="Launched Events" value="1"/>*/}
            {/*            <Tab sx={{width: '50%',maxWidth:"100%"}} label="Drafted Events" value="2"/>*/}
            {/*        </TabList>*/}
            {/*    </Box>*/}
            {/*</TabContext>*/}
>>>>>>> 94c5de568ac52e086d892181e46994185dcd1c14
        </Box>
    );
}