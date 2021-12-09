import { Grid, Card, CardActionArea, makeStyles, CardContent, Typography, Button, CardMedia } from '@material-ui/core'

const ImageCard = (props) => {
    const { movie, key, handleDelete } = props
    const useStyles = makeStyles({

    })

    const classes = useStyles();
    return (
        <Grid item xs={12} md={4} container spacing={2}  >

            <CardActionArea componenet="a">
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardMedia
                            component="img"
                            height="400"
                            width="160"
                            image={movie.img}
                            alt={movie.movieName}
                        />
                        <CardContent>
                            <Typography componenet="h2" variant="h5">
                                {movie.movieName}
                            </Typography>
                            <Typography>  #{movie.ranking} </Typography>
                            <Button color="primary" onClick={() => {
                                handleDelete(movie.id)
                            }}
                            >delete</Button>

                        </CardContent>

                    </div>


                </Card>

            </CardActionArea>


        </Grid >

    )

}

export default ImageCard