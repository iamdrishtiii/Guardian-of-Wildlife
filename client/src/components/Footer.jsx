import React, { useState } from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { Link } from 'react-router-dom';
import { Modal, Box, Typography } from '@mui/material';
import { emailRegex } from '../assets/regex';
import { subscriberapi } from '../assets/api';
import axios from "axios"

const Footer = () => {
    const [openModal, setOpenModal] = useState(false);
    const [email, setEmail] = useState("");
    const [modalMessage, setModalMessage] = useState("")

    // style for modal
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

    const settings = {
        width: 100,
        height: 100,
        value: 97,
    }
    const [error, setError] = useState({
        emailError: "",
    })
    const [formValid, setFormValid] = useState(false)

    // Email validation 
    const validateEmail = (email) => {
        let eError = error.emailError;
        let isValid = formValid;

        if (!emailRegex.test(email)) {
            eError = "This is invalid";
            isValid = false;
        } else {
            isValid = true;
            eError = "";
        }

        setEmail(email);
        setFormValid(isValid);
        setError({ ...error, emailError: eError });

        return isValid;
    };


    const handleChange = (e) => {
        if (e.target.id === "email") {
            validateEmail(e.target.value)
        }
    }


    const handleClick = async (e) => {
        e.preventDefault();
        if (validateEmail(email)) {

            const subscriberinfo = {
                email: email
            }
            try {
                const res = await axios.post(subscriberapi, subscriberinfo);
                if (res.status === 200 || res.status === 201) {
                    setModalMessage("Subscribed Successfully!");
                    setOpenModal(true);
                    setTimeout(() => setOpenModal(false), 2000);
                    setEmail("");
                }
            } catch (error) {
                if (error.response && error.response.status === 409) {
                    setModalMessage("Email already subscribed.");
                } else {
                    setModalMessage("Already registered. Please try again.");
                }
                setOpenModal(true);
                setTimeout(() => setOpenModal(false), 3000);
            }
        }


    }

return (
    <div className="bg-zinc-300 p-4 absolute bottom-0 w-full">
        <div className="md:flex md:flex-row ">

            {/* Section 1 */}
            <div className='md:w-6/12 md:pr-10 py-4'>
                <div className='md:flex md:flex-row gap-4'> <img src="../logo.jpeg" alt="" width="50px" height="50px" />
                    <h2 className='text-xl md:text-2xl lg:text-3xl border-b-2 border-black my-2 w-fit'>How Funds Are Used </h2></div>
                <div className='flex flex-row'>

                    <Gauge
                        {...settings}
                        cornerRadius="50%"
                        sx={(theme) => ({
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 30,
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#fff',
                            },
                            [`& .${gaugeClasses.referenceArc}`]: {
                                fill: theme.palette.text.disabled,
                            },
                        })}
                    />
                    <p>97% of our funds go towards program and support services, with only 3% going towards fundraising.</p>
                </div>
            </div>


            <div className='md:w-6/12 px-1 sm:px-20 gap-2 sm:gap-4 flex flex-row' >
                {/* Section 2 */}
                <div className='md:w-1/2'>

                    <h2 className='text-lg lg:text-2xl  border-b-2 border-black mr-2 md:my-2 w-fit'>Quick links</h2>
                    <ul>
                        <li> <Link to="/wildlife">WILDLIFE</Link> </li>
                        <li> <Link to="/jointeam">JOIN OUR TEAM</Link> </li>
                        <li> <Link to="/contact-us">CONTACT</Link> </li>
                        <li> <Link to="/programs">PROGRAMS</Link> </li>
                        <li> <Link to="/blog">BLOG</Link> </li>
                    </ul>
                </div>


                {/* Section 3 */}
                <div className='md:w-1/2 ml-4'>
                    <h1 className='text-lg lg:text-2xl border-b-2 border-black md:my-2 w-fit'>Get Updates</h1>

                    <input type="email" placeholder='Enter Your Email' id='email' name='email' className='rounded-xl py-1 w-[130px] px-1 sm:px-2 my-2' onChange={handleChange} value={email} />
                    <p style={{ color: "red" }}>{error.emailError}</p>

                    <button className='border-2 shadow-xl bg-red-600 text-white py-1 px-2 rounded-xl' onClick={handleClick}>Subscribe</button>
                    <div className='p-2 flex flex-row gap-4'>
                        <a href="https://www.instagram.com/g.o.w_abp/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="black" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                        </svg></a>
                        <a href="https://www.facebook.com/thewildlifeguardian/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="black" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path
                                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                        </svg></a>
                        <a href="https://www.youtube.com/@guardiansofwildlife3852"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                        </svg></a>
                        <a href="https://www.linkedin.com/company/wildlife-conservation-action/posts/?feedView=all"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                        </svg></a>
                    </div>
                </div>

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
                            {modalMessage === "Subscribed Successfully!" ? (
                                <>
                                    <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg></p>
                                    {modalMessage}
                                </>
                            ) : (
                                <>
                                    <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.646 4.646a.5.5 0 0 0 0 .708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646a.5.5 0 0 0-.708 0z" />
                                    </svg></p>
                                    {modalMessage}
                                </>
                            )}
                        </div>
                    </Typography>

                </Box>
            </Modal>
        </div></div>
);
};

export default Footer;