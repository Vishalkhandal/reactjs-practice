import React from 'react'
import Form from '../Form'

function ContactSection() {
    return (
        <>
            <section id='contact' style={{backgroundColor:'lightskyblue'}}>
                <div>
                    <h1>Contact Section</h1>
                    <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
                    <Address address="Catering Service, 42nd Living St, 43043 New York, NY" />
                    <Form style={{width: "600px"}} />
                </div>
            </section>
        </>
    )
}

const Address = ({ address }) => {
    return <address>{address}</address>
}

export default ContactSection

