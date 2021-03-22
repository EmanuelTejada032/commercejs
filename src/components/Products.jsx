import React from 'react';
import Grid from '@material-ui/core';

const products = [
    {id: 1, name:"Backpack", description:"Nike backpack", price: 99},
    {id: 2, name:"Shoes", description:"Jordan backpack", price: 119}
]
const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map( product => {
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product />
                </Grid>
            })}
        </Grid>
    </main>
}