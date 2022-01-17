import React from 'react'
import { Typography, Card,Link } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './sample.module.css';
import { style } from '@mui/system';
const Samplecard = ({ product, index }) => {
const {cover, price, name, priceSale, tags, status} = product
  return (
    <Card sx={{ maxWidth: 325, width: 280, borderRadius: "18px"}}>
      <ImageListItem>
        <img
          src={cover}
          alt='hh'
          loading="lazy"
          style={{ width: '100%', height:'300px' }}
        />
        <ImageListItemBar
          sx={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            display: (product.status === '') ? "none" : "block"
          }}
          position="top"
          actionIcon={
            <span className={styles.saleLogo} >
             {product.status}
            </span>
          }
          actionPosition="right"
        />
      </ImageListItem>
      <div className={styles.itemName}>
        <Link href="#" underline="hover" alignItems='center' color='#000' variant='subtitle2' className={styles.links} >
          {name}
        </Link> 
        <div className={styles.footerCard}>

      <span className={styles.colorOption}>
      <div className={styles.colorGreen}></div>
      <div className={styles.colorBlack}></div>
      </span>
          <div className={styles.price}>
          <span className={styles.salePrice}>
          {priceSale ? `$${priceSale}` : null }          
          </span>
          <Typography variant="body1" gutterBottom component="div" sx={{fontWeight:600, marginLeft:0.5}} >
        ${price}
      </Typography>
          </div>
          </div>

      </div>
    </Card>
  );
}

export default Samplecard;

