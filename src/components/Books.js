import { Button, Grid, TextField } from '@material-ui/core'
import React from 'react'

export default function Books() {
    return (
        <Grid container>

            <Grid items xs={4} sm={4} md={4}>

            </Grid>
            <Grid items xs={4} sm={4} md={4}>
            <div>
            <h1>
                Books App
            </h1>
        <TextField 
        type="text"
        variant="outlined"
        label="Title"
        fullWidth
        margin="normal"
        required
        />
        <TextField 
        type="text"
        variant="outlined"
        label="Author"
        fullWidth
        margin="normal"
        required
        />
        <TextField 
        type="text"
        variant="outlined"
        label="Description"
        fullWidth
        margin="normal"
        required
        />
        <TextField 
        type="text"
        variant="outlined"
        label="Publisher"
        fullWidth
        margin="normal"
        required
        />
        <TextField 
        type="text"
        variant="outlined"
        label="Distriutor Name"
        fullWidth
        margin="normal"
        required
        />
        <Button 
        variant="contained" 
        color="primary" 
        fullWidth
        margin="normal"
        type="submit">Submit</Button>

        </div>

            </Grid>
            <Grid items xs={4} sm={4} md={4}>

            </Grid>

        </Grid>
    )
}
