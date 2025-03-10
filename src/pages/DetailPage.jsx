import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';



const DetailPage = () => {
    const animalss = useSelector((state) => state.animalss)  //importing all animal data from store 
    const params = useParams();

    // filter data to show particular data on detail page
    const animalData = animalss.filter((animal) => {
        return animal.id === Number(params.id)
    })
    console.log(animalData)

    const programs = useSelector((state) => state.programs) //importing all programs data from store 
    const param = useParams();

    // filter data to show particular data on detail page
    const programData = programs.filter((program) => {
        return program.num === Number(param.num)
    })
    console.log(programData)

    const blogs = useSelector((state) => state.blogs) //importing all blogs data from store 
    const para = useParams();

    // filter data to show particular data on detail page
    const blogData = blogs.filter((blog) => {
        return blog.number === Number(para.number)
    })
    console.log(blogData)

    return (
        <>

            <div className="pb-[450px] 3xl:pb-48 md:pb-64">

                {/*Displaying Animal data */}
                {animalData.map((animal) => {
                    return <p className='left p-5 text-2xl md:flex md:flex-row'>
                        <p className='text-4xl md:text-8xl font-bold md:w-5/12 flex flex-col '>{animal.AnimalName}
                            <img src={animal.image} alt="" className='w-10/12 item-center pt-10' /></p> <br />
                        <p className='md:w-7/12 flex md:pt-10 md:justify-center'>Species:{animal.Species} <br />
                            Habitat:{animal.Habitat} <br />
                            Diet :{animal.Diet} <br />
                            Conservation Status:{animal.ConservationStatus} <br />
                            Average Lifespan Years:{animal.AverageLifespanYears} <br />
                            Weight: {animal.Weightkg} <br />
                            Height:{animal.Heightcm} <br />
                            Speed:{animal.Speedkmh}</p>
                    </p>
                })}

                {/*Displaying Program data */}
                {programData.map((program) => {
                    return <p className='left p-5 text-xl md:flex md:flex-row'>
                        <p className='text-2xl md:text-6xl font-bold md:w-5/12  flex justify-center flex-col'>{program.ProgramName}, {program.CountryRegion}
                            <p className='md:text-2xl md:w-10/12 font-semibold'> Goverment Agency: {program.GovernmentAgency} </p>
                            <img src={program.programLink} alt="" className='md:w-10/12' /></p>

                        <p className='md:w-7/12 flex justify-center mt-8 md:mt-0'>

                            Description : {program.Description} <br /> <br />
                            Funds : {program.FundingUSD} <br />
                            Target Species : {program.TargetSpecies}<br />
                            Year Launched : {program.YearLaunched}<br />
                            Current Status : {program.CurrentStatus}

                        </p>
                    </p>
                })}

                {/*Displaying Blog data */}
                {blogData.map((blog) => {
                    return <p className='left p-5 text-xl md:flex md:flex-row'>
                        <p className='text-2xl md:text-5xl font-bold md:w-5/12  flex justify-center flex-col'>{blog.BlogTitle} <br /> Authorised by {blog.AuthorOrganization}<p className='md:text-2xl md:w-9/12 font-semibold'> Website : {blog.WebsiteURL} </p></p>
                        <p className='md:w-7/12 md:pl-10 flex justify-center flex flex-col mt-8 md:mt-0'>
                            <img src={blog.imageURL} alt="" />
                            Description : {blog.Description} <br /> <br />
                            Last Update : {blog.LastUpdated} <br />
                            Focus : {blog.FocusArea} <br />
                            Social Media : {blog.SocialMediaLinks}
                        </p>
                    </p>
                })}
            </div>

        </>
    );
};

export default DetailPage;;