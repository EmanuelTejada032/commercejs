import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id: 1, name:"Backpack", description:"Nike backpack", price: 99, image:'https://images.unsplash.com/photo-1541267732407-8f72c182cf11?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'},
    {id: 2, name:"Shoes", description:"Jordan backpack", price: 119, image: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
]
const Products = () => {
   return(<main>
        <Grid container justify="center" spacing={4}>
            {products.map( (product) => (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    ) 
}

export default Products