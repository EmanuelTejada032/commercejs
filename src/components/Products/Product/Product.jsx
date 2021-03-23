import React from 'react'
import {Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons'

import useStyles from './styles'

const Product = ({product}) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent className={classes.cardContent}>
                <div>
                    <Typography variant="h5" gutterBottom>
                      {product.name}
                    </Typography>
                <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color="textSecondary" />
                </div>
                    <Typography variant="h5">
                      {product.price.formatted_with_symbol}
                    </Typography>
                
           </CardContent>
           <CardActions disableSpacing className={classes.cardAction}>
               <IconButton aria-label="add to cart">
                   <AddShoppingCart />
               </IconButton>
           </CardActions>
        </Card>
    )
}

export default Product
