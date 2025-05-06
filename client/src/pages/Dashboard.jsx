import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='pb-[450px] 3xl:pb-48 md:pb-56'>
            {/* Banner Section */}
            <section>
                <div className='py-20 text-zinc-400 xl:py-32 2xl:py-40 sm:hidden'
                    style={{ backgroundImage: 'url(../bearimgzoom2.png)' }}>
                    <h1 className='flex justify-center text-7xl lg:text-9xl text-center font-bold px-40'>BE A VOICE FOR WILDLIFE</h1>
                    <p className='flex justify-center font-semibold text-center md:text-xl lg:text-2xllg:text-3xl px-20'>Prevent extinction. Protect habitat. Defend nature.</p>
                    <p className='flex justify-center font-semibold text-center gap-4 m-2'>
                        <Link to="/jointeam"><button className='text-black bg-white border-2 p-2 rounded-xl mt-2 '>JOIN US</button></Link>
                    </p>
                </div>

                <div className='py-20 text-zinc-400 2xl:py-32 3xl:py-40  hidden sm:block lg:hidden'
                    style={{ backgroundImage: 'url(../bearimgzoom.png)' }}>
                    <h1 className='flex justify-center text-7xl text-center font-bold px-40'>BE A VOICE FOR WILDLIFE</h1>
                    <p className='flex justify-center font-semibold text-center md:text-xl lg:text-2xllg:text-3xl px-20'>Prevent extinction. Protect habitat. Defend nature.</p>
                    <p className='flex justify-center font-semibold text-center gap-4 m-2'>
                        <Link to="/jointeam"><button className='text-black bg-white border-2 p-2 rounded-xl mt-2 '>JOIN US</button></Link>
                    </p>
                </div>

                <div className='py-20 text-zinc-400 2xl:py-32 3xl:py-40 hidden lg:block'
                    style={{ backgroundImage: 'url(../bearimg.png)' }}>
                    <h1 className='flex justify-center text-7xl lg:text-8xl xl:text-9xl text-center font-bold px-40'>BE A VOICE FOR WILDLIFE</h1>
                    <p className='flex justify-center font-semibold text-center md:text-xl lg:text-2xllg:text-3xl px-20'>Prevent extinction. Protect habitat. Defend nature.</p>
                    <p className='flex justify-center font-semibold text-center gap-4 m-2'>
                        <Link to="/jointeam"><button className='text-black bg-white border-2 p-2 rounded-xl mt-2 '>JOIN US</button></Link>
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="p-10 md:flex md:flex-row justify-center space-x-8">
                <div className="md:w-1/2 lg:w-1/3 flex items-center justify-center">
                    <img src="../Zebra.jpeg" alt="About Initiative" className="w-full h-42 pb-4 md:pb-0 object-cover" />
                </div>
                <div className="md:w-1/3 bg-gray-300 p-4">
                    <h2 className="font-bold text-xl lg:text-2xllg:text-2xl">ABOUT Initiatives</h2>
                    <p className="text-lg mt-2 lg:text-xl">
                        Our initiative aims to preserve and protect wildlife by implementing sustainable conservation programs,
                        spreading awareness, and engaging communities. We strive to create a world where wildlife thrives in
                        harmony with humans.
                    </p>
                </div>
            </section>

            {/* Dynamic Sections */}
            <section className="bg-gray-200 p-10 text-center mt-4 flex flex-col items-center">
                <h2 className="text-xl lg:text-2xl font-bold">Number of Animals Imported in a Particular Year</h2>
                <img src="../importedanimals.png" alt="Imported Animals" className="w-2/3 h-50 object-cover mt-4" />
                <p className="text-md lg:text-xl  mt-2">In 2023, over 500 endangered species were relocated to conservation areas to ensure their survival.</p>
                <p className="text-md lg:text-xl  mt-2">Wildlife importation plays a crucial role in biodiversity preservation. By transporting animals to new environments,
                    we help maintain ecological balance, prevent species extinction, and support breeding programs that strengthen
                    populations at risk. Our team collaborates with global organizations to ensure safe and ethical relocation
                    practices, providing medical care and habitat adjustments for each animal.</p>
            </section>

            <section className=" p-10 text-center mt-4 flex flex-col items-center">
                <h2 className="text-xl lg:text-2xl font-bold">Programs to Conserve Wildlife and Upcoming Events</h2>
                <img src="../conserve.png" alt="Conservation Programs" className="w-2/3 h-50 object-cover mt-4" />
                <p className="text-md lg:text-xl  mt-2">Join our conservation programs, including habitat restoration and wildlife awareness campaigns.</p>
                <p className="text-md lg:text-xl  mt-2">Our conservation programs include reforestation projects, anti-poaching initiatives, and marine ecosystem protection.
                    With dedicated researchers, volunteers, and government support, we have restored thousands of acres of natural
                    habitats, implemented new wildlife protection laws, and educated local communities on the importance of wildlife
                    conservation. Upcoming events include expert-led seminars, rescue training workshops, and eco-volunteering
                    opportunities for all ages.</p>
            </section>

            <section className="bg-gray-200  p-10 text-center mt-4 flex flex-col items-center">
                <h2 className="text-xl lg:text-2xl font-bold">How Many Wildlife Animals Were Saved</h2>
                <iframe width="560" height="315" className="w-2/3 h-50 object-cover mt-4" src="https://www.youtube.com/embed/KlWI26UDQVc?si=EPUsJVP9I7ONEIRN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p className="text-md lg:text-xl  mt-2">Over 1,000 animals were rescued and rehabilitated last year through our conservation efforts.</p>
                <p className="text-md lg:text-xl  mt-2">Through continuous monitoring and rescue missions, we have saved countless endangered species from threats like deforestation,
                    illegal wildlife trade, and climate change. Our rehabilitation centers provide medical attention, behavioral therapy,
                    and gradual reintroduction to natural habitats, ensuring animals thrive post-rescue. The dedication of our teams and
                    the support of global partners make these rescues successful, contributing to the overall well-being of wildlife.</p>
            </section>

        </div>
    );
};

export default Dashboard;