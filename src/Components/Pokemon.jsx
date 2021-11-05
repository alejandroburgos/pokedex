import React, {useState} from 'react'
import PropTypes from 'prop-types';

import {Link, useNavigate, useLocation} from "react-router-dom";
import { Grid,Button, Box, Tabs, Tab, Typography} from '@mui/material'
import { useTheme } from '@mui/material/styles';

import AsyncGetPokemon from './../asyncRequest/asyncGetPokemon'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export const Pokemon = (props) => {
    const theme = useTheme();

    let navigate = useNavigate();  // declare here, inside a React component. 
    let location = useLocation();
    
    const namePokemon = location.state.name;
    const url = location.state.url;

    const [listPokemon] = AsyncGetPokemon(url);

    console.log(listPokemon)

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className="p-4">
            <Grid>
                <div>
                    <Button title="Back"
                        onClick={() => {
                            navigate({ pathname: "/"});
                        }}
                    >Atrás</Button>
                </div>

                <Grid className="text-center">
                    <h1>{namePokemon}</h1>
                </Grid>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Habilidades" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>

                    <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2} dir={theme.direction}>
                    Item Three
                    </TabPanel>
                </Box>
            </Grid>
        </div>
    )
}
