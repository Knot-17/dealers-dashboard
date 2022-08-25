import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import './../assets/css/icon.css'

import destination from './../assets/images/weddinghall.jpg'
import ella from './../assets/images/ella.jpg'
import beach from './../assets/images/beachwedding.jpg'

export default function Events() {
  return (
    <div>
            <div className='destination__button'>
                <Button variant="contained"  color="success" href="http://localhost:3001/add/dest" endIcon={<AddIcon />}>
                    Add Destination
                </Button>  
            </div> 
        <div className='row'>
            
            <div className='col-4'>
                <Card sx={{ maxWidth: 345 ,minHeight:420 }}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            N
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Noori Wedding hall"
                        subheader="August 25,2022"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={destination}
                        alt="Destination Wedding Hall"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Newly renovated and modern, this hotel is a 5-star hotel with a 
                            full Air conditioned wedding hall.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <div className='star__icon_wrapper'>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 }}/>
                        </div>
                    </CardActions>
                </Card>
            </div>
            <div className='col-4'>
                <Card sx={{ maxWidth: 345,minHeight:420 }}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            M
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Mountlavania Beach hotel"
                        subheader="August 25,2022"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={beach}
                        alt="Beach wedding"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            Good view of the beach and the sea. With the less capacity of seating,
                            also affiliate with 5 star hotel.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <div className='star__icon_wrapper'>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                        </div>
                    </CardActions>
                </Card>
            </div>
            <div className='col-4'>
                <Card sx={{ maxWidth: 345 ,minHeight:420}}>
                    <CardHeader
                        avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            B
                        </Avatar>
                        }
                        action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                        }
                        title="Ela Mountain Range"
                        subheader="August 25,2022"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={ella}
                        alt="Ella"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This is a beautiful mountain range with a view of sunrise.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <div className='star__icon_wrapper'>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 , color:"#01bf71"}}/>
                            <StarIcon sx={{fontSize:30 }}/>
                            <StarIcon sx={{fontSize:30 }}/>
                        </div>
                    </CardActions>
                </Card>
            </div>
        </div>
    </div>
   
  );
}