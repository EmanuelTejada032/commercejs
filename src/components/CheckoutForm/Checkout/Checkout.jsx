import React, {useState, useEffect} from 'react'
import {Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

import {commerce } from '../../../lib/Commerce'
import useStyles from './styles'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

const steps = ["Shipping address", "Payment details"]

const Checkout = ({cart, handleEmptyCart}) => {
    const [activeStep, setActiveStep] = useState(0)
    const [checkoutToken, setCheckoutToken] = useState(null);
    const  classes = useStyles();

    useEffect(() =>{
        const generateToken = async () => {
            try{
                const token = await commerce.checkout.generateToken(cart.id, { type: "cart"})
                setCheckoutToken(token);
            }catch(error){

            }
        }

        generateToken();
    }, [cart])

    const nextStep = () => setActiveStep((prevStep) => prevStep + 1 )
    const prevStep = () => setActiveStep((prevStep) => prevStep - 1 )

    const next = () => {
            nextStep()
    }

    const prev = () => {
        prevStep();
    }


    const Form = () => (
        activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} /> : <PaymentForm checkoutToken={checkoutToken} next={next} prev={prev} />
    )

    const Confirmation  = () => (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase!</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: RNo.664fas6655fa</Typography>
            </div>
            <br />
            <Button component={Link} variant="outlined" type="button" to="/" onClick={handleEmptyCart} >Back to home</Button>
        </>
    )


    return (
        <>
           <div className={classes.toolbar}/> 
           <main className={classes.layout}>
            <Paper className={classes.paper}>
                <Typography variant="h4" align="center">Checkout</Typography>
                <Stepper activeStep={activeStep} className={classes.stepper}>
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
            </Paper>

           </main>
        </>
    )
}

export default Checkout
