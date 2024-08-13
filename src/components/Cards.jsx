import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function MyComponent() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '50px' }}>
      <Box>
        <Grid 
          container 
          columnSpacing={{xs: 0, sm: 2, md: 3, lg: 4}}
          rowSpacing={{xs: 2, sm: 2, md: 3, lg: 4}}
          justifyContent="flex-start"
        >
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

        
          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          
          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={4} >
            <Card 
              sx={{ 
                width: '100%', 
                height: '100%', 
                border: '1px solid blue', 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between' 
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image="https://picsum.photos/200/300"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          
        </Grid>
      </Box>
    </Container>
  );
}

export default MyComponent;
