import React, {useState} from 'react'
import { Grid,Button, Box, Tabs, Tab, Typography} from '@mui/material'
import AsyncGetMovement from '../../asyncRequest/asyncGetMovement'

export const Movements = (props) => {    

    return (
        <div>
            <Grid container spacing={0}>
            {props.pokemonInfo?.moves?.map((moves) => {
                return (
                    <>
                        <Grid md={2} className="p-1">
                            <h4>{moves.move.name}</h4>
                        </Grid>
                    </>
                )
            })}
            </Grid>
        </div>
    )
}
