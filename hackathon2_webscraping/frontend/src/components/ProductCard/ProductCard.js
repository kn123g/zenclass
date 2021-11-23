import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';

export default function ProductCard(props) {
    return (
    <Grid item xs={3}>
      <Card sx={{ minWidth: 275 }}>
      <CardMedia
        component="img"
        height="250"
        image={props.image}
        alt={props.title}
      />
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography> */}
          <Typography variant="" component="b">
          {props.site}
          </Typography>
          <Typography variant="" component="div" noWrap={true}>
          {props.title}
          </Typography>
          <Rating
        name="simple-controlled"
        value={props.rating}
      />
      
      <Typography  color="text.secondary" style={{display:'inline-block' }}>
          {props.rating}
          </Typography>
      <br/>
          <Typography variant="h6" style={{ color:'red',display:'inline-block' }}>
            {props.final_price_with_offer}
          </Typography>
          <Typography variant="body2" style={{ color:'black',display:'inline-block',padding:'0 5%', 'text-decoration': 'line-through' }}>
            {props.price}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Grid>
    );
  }