import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { emailRegex } from '../assets/regex';

const Jointeam = () => {
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
    const [email, setEmail] = useState("");
    const [postcode, setPostcode] = useState("")

    const [openModal, setOpenModal] = useState(false);

    const [error, setError] = useState({
        firstnameError: "",
        lastnameError: "",
        emailError: ""
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

        if (lastname.trim() === "") {
            lError = "Enter last name"
            isValid = false
        } else {
            isValid = true;
            lError = ""
        }
        setlastName(lastname)
        setFormValid(isValid);
        setError({ ...error, lastnameError: lError })
        return isValid;
    }

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

    const validatePostcode = (postcode) => {
        let isValid=formValid;
        setPostcode(postcode)

        setFormValid(isValid);

        return isValid;
    }

    const handleChange = (e) => {

        if (e.target.id === "firstname") {
            validateFirstname(e.target.value)
        } else if (e.target.id === "lastname") {
            validateLastname(e.target.value)
        } else if (e.target.id === "email") {
            validateEmail(e.target.value)
        } else if (e.target.id === "postcode") {
            validatePostcode(e.target.value)
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFirstname(firstname) && validateLastname(lastname) && validateEmail(email)&& validatePostcode(postcode)
        ) {

            setFirstName("")
            setlastName("")
            setEmail("")
            setPostcode("")
            setOpenModal(true);
            setTimeout(() => setOpenModal(false), 2000);
        }
    }

    return (
        <div className='pb-[450px] 3xl:pb-48 md:pb-56'>
            {/* Design Section */}
            <section className="p-10 md:flex md:flex-row justify-center md:space-x-8">
                <div className="md:w-1/2 p-4 lg:p-10 mb-4 md:mb-0">
                    <h2 className="font-bold text-xl lg:text-2xl ">Be a Voice for Wildlife!</h2>
                    <p className="text-lg mt-2 lg:text-xl">
                        When wildlife is in danger, they can't speak up for themselves—so we speak for them.
                        Sign up with Defenders of Wildlife to hear the latest news about imperiled animals
                        and how you can take action to help them survive. You'll also receive our monthly
                        newsletter and exclusive invitations to special events in your community.
                    </p>
                </div>
                <div className="md:w-1/2 lg:w-1/3 flex items-center justify-center">
                    <img src="../../public/images/aquani.png" alt="" className="w-full h-50 object-cover" />
                </div>

            </section>

            <div className="md:flex p-10 md:space-x-6">
                {/* Form Section */}
                <div className="bg-gray-100 rounded-2xl md:w-7/12 flex items-center justify-center mb-4 md:mb-0">
                    <form onSubmit={handleSubmit} className='p-10'>
                        <p className='text-lg md:text-2xl font-bold mb-6 md:mb-10 border-b-2 border-black w-fit'>Tell us a little about yourself:</p>
                        <div className='flex flex-wrap gap-4'>
                            <div><label className="text-md md:text-xl" htmlFor="firstname">Firstname<span style={{ color: "red" }}>*</span></label> <br />
                                <input className="border-gray-300 border-2 rounded-lg p-2 lg:m-2"
                                    type="text"
                                    id="firstname"
                                    data-testid="First Name"
                                    name="firstname"
                                    onChange={handleChange}
                                    value={firstname}
                                />
                                <p style={{ color: "red" }}>{error.firstnameError}</p></div>

                            <div><label className="text-md md:text-xl" htmlFor="lastname">Lastname<span style={{ color: "red" }}>*</span></label> <br />
                                <input className="border-gray-300 border-2 rounded-lg p-2 lg:m-2"
                                    type="text"
                                    id="lastname"
                                    name="lastname"
                                    data-testid="Last Name"
                                    onChange={handleChange}
                                    value={lastname}
                                />
                                <p style={{ color: "red" }}>{error.lastnameError}</p></div>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            <div><label className="text-md md:text-xl" htmlFor="email">Email<span style={{ color: "red" }}>*</span></label> <br />
                                <input className="border-gray-300 border-2 rounded-lg p-2 lg:m-2"
                                    type="email"
                                    id="email"
                                    name="email"
                                    data-testid="Email"
                                    onChange={handleChange}
                                    value={email}
                                />
                                <p style={{ color: "red" }}>{error.emailError}</p></div>


                            <div><label className="text-md md:text-xl" htmlFor="postcode">Postcode</label> <br />
                                <input className="border-gray-300 border-2 rounded-lg p-2 lg:m-2"
                                    type="number"
                                    id="postcode"
                                    data-testid="Post Code"
                                    name="postcode"
                                    onChange={handleChange}
                                    value={postcode}
                                /></div>
                        </div>

                        
                        <button className='bg-green-900 text-white py-2 px-4 mt-4 font-bold text-center'>Sign Up</button>
                    </form>
                </div>

                {/* Sidebar Section */}
                <div className="md:w-1/3 space-y-4">
                    <div className="bg-gray-100 rounded-2xl p-4 text-center font-bold">10,000 volunteers joined</div>
                    <div className="bg-gray-100 rounded-2xl p-4 text-center">Be a part of something bigger than yourself! Join our dedicated team of volunteers working to protect wildlife and their natural habitats..</div>
                    <div className="bg-gray-100 rounded-2xl p-4 text-center">Take action today! Our planet needs more heroes like you to stand up for endangered species. Volunteering not only helps wildlife but also provides a fulfilling experience, connecting you with nature and like-minded individuals.</div>
                    <div className="bg-gray-100 rounded-2xl p-4 text-center">Your passion can drive real change! Become a volunteer and help us rescue animals, and spread awareness. Together, we can create a world where wildlife thrives.</div>
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
                            <p className='pt-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg></p>
                            Signed Up Successfully!</div>
                    </Typography>
                </Box>
            </Modal>

        </div>
    );
};

export default Jointeam;