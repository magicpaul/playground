import React from 'react'
import SubscribeForm from 'react-mailchimp-subscribe'

const formProps = {
    action: '//mc.us17.list-manage.com/signup-form/subscribe?u=ad4edc76a7a127e8b298673ae&id=00c8d5e1f0',
    messages: {
        inputPlaceholder: 'Your email',
        btnLabel: 'Subscribe',
        sending: 'Sending...',
        success: 'Thanks for your interest!',
        error: 'Oops, unable to register this address.'
    },
    styles:{
        sending: {
            clear: 'both',
            fontSize: 18,
            color: "auto"
        },
        success: {
            clear: 'both',
            fontSize: 18,
            color: "green"
        },
        error: {
            clear: 'both',
            fontSize: 18,
            color: "red"
        }
    }
}

const Form = () => <SubscribeForm {...formProps} />

export default Form;