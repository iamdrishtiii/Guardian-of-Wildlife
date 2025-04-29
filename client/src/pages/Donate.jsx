import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';

const Donate = () => {

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

  const [donationAmount, setDonationAmount] = useState("300");
  const [donationType, setDonationType] = useState("Annually");
  const [openModal, setOpenModal] = useState(false);

  const handleclick = (e) => {
    e.preventDefault();
    setOpenModal(true);
    setTimeout(() => setOpenModal(false), 2000);
  }

  return (
    <div className='pb-[450px] 3xl:pb-48 md:pb-56'>
      {/* Header */}
      <header className="shadow-xl p-6 flex justify-center items-center">
        <h1 className="text-xl font-bold">America's Wild Animals Are Counting On You!</h1>
      </header>

      {/* Main Section */}
      <main className="max-w-4xl mx-auto bg-white p-8 mt-6 shadow-lg rounded-lg">
        <div className="md:flex md:gap-6">
          {/* Text Content */}
          <div className="md:w-1/2">
            <p>Your support will ensure our expert team of scientists, lawyers, advocates, and activists have the support needed to demand action and protection for wildlife.</p>
            <p>Help Defenders of Wildlife save endangered species and the habitat they need to survive with a tax-deductible donation!</p>
          </div>
          {/* Image */}
          <img className="md:w-1/2 rounded-lg" src="../wild.png" alt="Wild Pup" />
        </div>

        {/* Donation Form */}
        <div className="mt-6">
          <h2 className="font-bold">How often would you like to donate?</h2>
          <div className="md:flex md:space-x-2 mt-2 space-y-2 md:space-y-0">
            {['One Time', 'Monthly', 'Quarterly', 'Annually'].map((type) => (
              <button key={type}
                className={`px-4 py-2 border ${donationType === type ? 'bg-green-950 text-white' : 'bg-white'}`}
                onClick={() => setDonationType(type)}>
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selection */}
        <div className="mt-4">
          <h2 className="font-bold">Choose an amount to give*</h2>
          <div className="md:flex md:space-x-2 mt-2 space-y-2 md:space-y-0">
            {[300, 400, 500, 600, 1000].map((amount) => (
              <button key={amount}
                className={`px-4 py-2 border ${donationAmount === amount.toString() ? 'bg-green-950 text-white' : 'bg-white'}`}
                onClick={() => setDonationAmount(amount.toString())}>
                Rs.{amount}
              </button>
            ))}
          </div>
        </div>
        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="bg-zinc-300 px-6 py-2 rounded" onClick={handleclick}>Donate</button>
        </div>

      </main>


      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='flex flex-row gap-2 text-sm'>
              {donationType} Donated Rs.{donationAmount}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Donate;