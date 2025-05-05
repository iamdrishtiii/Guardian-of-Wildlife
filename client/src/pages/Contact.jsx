import React, {  useState } from 'react';
import { Modal, Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { emailRegex } from '../assets/regex';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Contactapi } from '../assets/api';
import axios from "axios"

const Contact = () => {
    const style = {
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 250,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
    };
                                                                                    
    const [firstname, setFirstName] = useState("");
    const [lastname, setlastName] = useState("")
    const [emaill, setEmail] = useState("");
    const [textarea, setTextarea] = useState("");

    const [openModal, setOpenModal] = useState(false);

    const [error, setError] = useState({
        firstnameError: "",
        lastnameError: "",
        emailError: "",
        textError: ""

    })
    const [formValid, setFormValid] = useState(false)

    const validateFirstname = (firstname) => {
        let fError = error.firstnameError;
        let isValid = formValid;

        if (firstname.trim() === "") {
            fError = "This is required!";
            isValid = false
        } else if (firstname.trim().length < 3) {
            fError = "Enter atleast 3 character!";
            isValid = false
        } else {
            isValid = true;
            fError = ""
        }
        setFirstName(firstname)
        setFormValid(isValid);
        setError({ ...error, firstnameError: fError })
        return isValid;
    }

    const validateLastname = (lastname) => {
        let lError = error.lastnameError;
        let isValid = formValid;

        setlastName(lastname)
        setFormValid(isValid);
        setError({ ...error, lastnameError: lError })
        return isValid;
    }

    const validateEmail = (emaill) => {
        let eError = error.emailError;
        let isValid = formValid;

        if (!emailRegex.test(emaill)) {
            eError = "This is invalid";
            isValid = false;
        } else {
            isValid = true;
            eError = "";
        }

        setEmail(emaill);
        setFormValid(isValid);
        setError({ ...error, emailError: eError });

        return isValid;
    };

    const validatetext = (textarea) => {
        let tError = error.textError;
        let isValid = formValid;

        if (textarea.trim() === "") {
            tError = "This is required";
            isValid = false;
        } else if (textarea.trim().length < 10) {
            tError = "Enter something!";
            isValid = false
        } else {
            isValid = true;
            tError = ""
        }
        setTextarea(textarea)
        setFormValid(isValid);
        setError({ ...error, textError: tError })
        return isValid;
    }

    const handleChange = (e) => {

        if (e.target.id === "firstname") {
            validateFirstname(e.target.value)
        } else if (e.target.id === "lastname") {
            validateLastname(e.target.value)
        } else if (e.target.id === "emaill") {
            validateEmail(e.target.value)
        } else if (e.target.id === "textarea") {
            validatetext(e.target.value)
        }
    }



    const handleSubmit =async (e) => {
        e.preventDefault();
        if (validateFirstname(firstname) && validateLastname(lastname) && validateEmail(emaill) && validatetext(textarea)
        ) { 
    // console.log(firstname,lastname,emaill,textarea)
            const contactinfo = {
                firstname: firstname,
                lastname: lastname,
                emaill: emaill,
                textarea: textarea,
            }
            await axios.post(Contactapi,contactinfo)
            .then((res)=>{
                if(res){
                    console.log("Contact you soon")
                }
            }).catch((error)=>{
                console.log(error)
            })

            setFirstName("")
            setlastName("")
            setEmail("")
            setTextarea("")
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 2000);

        }

    }

    return (
        <div className='pb-[450px] 3xl:pb-48 md:pb-56'>
            {/* Banner Section */}
            <section className="shadow-xl p-10 text-center text-lg font-semibold">
                <h1 className="text-3xl font-bold">Get in Touch with Us</h1>
                <p className="mt-2 text-gray-700">Have questions, ideas, or want to collaborate? We’d love to hear from you! Reach out to us and let's make a difference together.</p>
            </section>

            {/* Contact & Form Section */}
            <div className="md:flex p-4 sm:p-10 md:space-x-6 ">
                {/* Contact Details */}
                <div className="relative bg-gray-100 p-10 flex-1 flex flex-col text-lg md:text-2xl items-center justify-center text-center mb-4 md:mb-0">


                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: "url('https://ipsworks.waamh.org.au/assets/contact-us.jpg')",
                            filter: "brightness(60%)",
                        }}
                    ></div>


                    <div className="absolute inset-0 bg-black opacity-50"></div>


                    <div className="relative z-10">
                        <p className="font-bold text-xl md:text-3xl border-b-2 border-black mb-6 text-white">
                            Contact Us
                        </p>
                        <p className="text-white">
                            Address: 123 Wildlife Street, Nature City <br />
                            Email: contact@wildlife.org <br />
                            Phone: +123 456 7890
                        </p>
                    </div>
                </div>


                {/* Form Section */}
                <div className="bg-white p-10 flex-1 border rounded shadow-lg">
                    <form className="space-y-4" onSubmit={handleSubmit} >
                        <p className="font-bold text-xl md:text-3xl border-b-2 border-black border-dashed text-center mb-6">Ask Anything</p>
                        <div className="sm:flex sm:space-x-2 space-y-2 sm:space-y-0">
                            <input type="text"
                                id="firstname"
                                name="firstname"
                                onChange={handleChange}
                                value={firstname}
                                placeholder="First name*"
                                className="border p-2 w-full sm:w-1/2" /> <br />
                            <p style={{ color: "red" }}>{error.firstnameError}</p>

                            <input type="text"
                                id="lastname"
                                name="lastname"
                                onChange={handleChange}
                                value={lastname}
                                placeholder="Last name"
                                className="border p-2 w-full sm:w-1/2" />
                            <p style={{ color: "red" }}>{error.lastnameError}</p>
                        </div>
                        <input
                            type="email"
                            id="emaill"
                            name="emaill"
                            onChange={handleChange}
                            value={emaill}
                            placeholder="Email*"
                            className="border p-2 w-full" />
                        <p style={{ color: "red" }}>{error.emailError}</p>
                        <input
                            type="text"
                            id="textarea"
                            name="textarea"
                            onChange={handleChange}
                            value={textarea}
                            placeholder="What can we help you with?"
                            className="border p-2 w-full h-[100px]"
                            rows="4"
                            required />
                            <p style={{ color: "red" }}>{error.textError}</p>
                        <button className="bg-purple-500 text-white px-4 py-2 rounded">Submit</button>
                    </form>
                </div>
            </div>

            <div className="p-10">
                <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>What should I do if I find an injured animal?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Contact a local wildlife rescue center immediately. Do not attempt to feed or give water to the animal.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>How can I volunteer for wildlife conservation?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>You can reach out to conservation organizations in your area or check their websites for volunteer programs.</Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>What steps can I take to protect local wildlife?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Reduce plastic use, support wildlife-friendly habitats, and report illegal wildlife activities.</Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <div className='flex flex-row gap-2 text-sm'>
                            We will contact you soon!</div>
                    </Typography>
                </Box>
            </Modal>

        </div>
    );
};

export default Contact;