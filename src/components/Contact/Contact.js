import React from 'react';
import emailjs from "emailjs-com";

const Contact = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_crst5de', e.target, 'user_v6q9XHCNGhOlxUXu48jOu')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <section className="contact-container">
            <div className="container-brand">
                <h2 className="text-center">Contact Me</h2>
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="button-brand" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;