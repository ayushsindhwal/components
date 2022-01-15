import React from 'react'
import { Typography, Card,Link } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './sample.css'

const Samplecard = () => {

  return (
    <Card sx={{ maxWidth: 325, width: 300, borderRadius: "18px" }}>
      <ImageListItem>
        <img
          src="image/product_1.jpg"
          alt='hh'
          loading="lazy"
          style={{ width: '100%' }}
        />
        <ImageListItemBar
          sx={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
          }}
          position="top"
          actionIcon={
            <span className='css-1smkz5r'>
                Sale
            </span>
          }
          actionPosition="right"
        />
      </ImageListItem>
      <div className="css-ejcdc5">
        <Link href="#" underline="hover" alignItems='center' color='#000' variant='subtitle2' sx={{ marginLeft: '3px' }} >
          {'Nike Air Force 1 NDESTRUKT'}
        </Link> 
        <div className="css-1ialerq">

      <span className="css-149gbl6">
      <div className="css-n03y56"></div>
      <div className="css-1gjqijf"></div>
      </span>
          <div className='css-1iegyem'>
          <Typography variant="body1" gutterBottom component="div">
        $616
      </Typography>
          </div>
          </div>

      </div>
    </Card>
  );
}

export default Samplecard;

