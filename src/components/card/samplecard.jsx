import React from 'react'
import { Typography, Card,Link } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './sample.module.css';
import { style } from '@mui/system';

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
            <span className={styles.saleLogo}>
                Sale
            </span>
          }
          actionPosition="right"
        />
      </ImageListItem>
      <div className={styles.itemName}>
        <Link href="#" underline="hover" alignItems='center' color='#000' variant='subtitle2' sx={{ marginLeft: '3px' }} >
          {'Nike Air Force 1 NDESTRUKT'}
        </Link> 
        <div className={styles.footerCard}>

      <span className={styles.colorOption}>
      <div className={styles.colorGreen}></div>
      <div className={styles.colorBlack}></div>
      </span>
          <div className={styles.price}>
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

