import {
    Grid,
    Container,
    Button,
    TextField,
    AppBar, Toolbar, Typography, Card, CardContent, CardActions
} from "@mui/material";

const MaterialPage = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" >Material UI</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Typography variant="h4">Material Page</Typography>

                <Grid container spacing={2}>
                    <Grid size={{xs: 12, md: 6, lg: 4}}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5">Contact info</Typography>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Name"
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email"
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" style={{backgroundColor: "red"}}>
                                    Send
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default MaterialPage;