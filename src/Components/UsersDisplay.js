import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'

function UsersDisplay()
{
    const values = [1, 2, 4, 5, 6]
    return (
        <Grid container direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            {values.map(val =>
            {
                return (

                    <Grid item xs={3}>
                        <Card variant="outlined">{val}</Card>
                    </Grid>
                )
            })

            }
        </Grid>
    );
}

export { UsersDisplay };