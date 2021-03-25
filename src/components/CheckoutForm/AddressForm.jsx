import React, {useState, useEffect} from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import {commerce} from '../../lib/Commerce'
import FormInput from './CustomTextField'

const divider =  {
    margin: '20px 0',
  }
const AddressForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')
    const methods = useForm();

  

    const fetchShippingCountries = async (checkoutTokenId) =>{
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);

    }
    
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
    

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={''}>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First Name" />
                        <FormInput required name="lastName" label="Last Name" />
                        <FormInput required name="address" label="Address" />
                        <FormInput required name="email" label="Email" />
                        <FormInput required name="city" label="City" />
                        <FormInput required name="zip" label="ZIP" />
                    </Grid>

                    <Grid  item xs={12} sm={6} style={divider}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={shippingCountry} fullWitdh onChange={(e) => setShippingCountry(e.target.value)} >
                            {countries.map((country) => (
                              <MenuItem key={country.id} value={country.id}>
                                {country.label}
                             </MenuItem>  
                            ))}
                        </Select>
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={''} fullWitdh onChange={''} >
                            <MenuItem key={''} value={''}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <InputLabel>Shipping Subdivision</InputLabel>
                        <Select value={''} fullWitdh onChange={''} >
                            <MenuItem key={''} value={''}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid> */}
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
