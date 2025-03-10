import React, { useEffect, useState } from "react";
import { getprograms } from "../action";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Program = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const programsPerPage = 3;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Get programs from Redux store
    const programs = useSelector((state) => state.programs) || [];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getprograms());
    }, [dispatch]);

    // Pagination Logic
    const indexOfLastProgram = currentPage * programsPerPage;
    const indexOfFirstProgram = indexOfLastProgram - programsPerPage;
    const currentPrograms = programs.slice(indexOfFirstProgram, indexOfLastProgram);
    const totalPages = Math.ceil(programs.length / programsPerPage);

    // Carousel Logic
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % currentPrograms.length);
    };
    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + currentPrograms.length) % currentPrograms.length);
    };

    return (
        <div className="pb-[450px] 3xl:pb-48 md:pb-64">

            {/* Carousel */}
            {currentPrograms.length > 0 && (
                <div className="relative w-full flex justify-center items-center sm:p-6 mt-4 ">
                    <button onClick={prevSlide} className="absolute left-0 md:left-10 p-2 bg-gray-300 rounded-full">◀</button>
                    <Link to={`/programs/${currentPrograms[currentSlide].num}/${currentPrograms[currentSlide].ProgramName}`}>
                        <div className="w-[300px] sm:w-[500px] h-[300px] px-8 flex justify-center items-center flex flex-col">
                            <img
                                src={currentPrograms[currentSlide].programLink}
                                alt={currentPrograms[currentSlide].ProgramName}
                                className="w-auto h-auto rounded-lg"
                            />
                            <p className="text-lg md:text-2xl font-semibold">{currentPrograms[currentSlide].ProgramName}</p>
                        </div>
                    </Link>
                    <button onClick={nextSlide} className="absolute right-0 md:right-10 p-2 bg-gray-300 rounded-full">▶</button>
                </div>
            )}

            {/* Program Sections */}
            <div className="md:p-10 space-y-6">
                {currentPrograms.map((program, index) => (
                    <div key={program.num}>
                        <Link to={`/programs/${program.num}/${program.ProgramName}`}>
                            <div
                                className={`md:flex flex-row hover:bg-gray-100 p-6 rounded-xl ${index % 2 === 0 ? "" : "flex-row-reverse"}`}
                            >
                                {/* Program Name */}
                                <div className="p-4 flex justify-center items-center">
                                    <img src={program.programLink} alt="" width="350px" height="350px" />
                                </div>

                                {/* Program Description */}
                                <div className="md:w-2/3 p-4 text-xl md:text-2xl">
                                    <p className="w-full h-auto rounded-lg font-bold text-2xl md:text-4xl ">{program.ProgramName}</p>
                                    <br />
                                    <p>{program.ObjectivesandGoals}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center space-x-2 mt-6">
                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-2 border rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-white"}`}
                    >
                        <MdKeyboardArrowRight className="rotate-180" />
                    </button>

                    <button className="px-3 py-2 border rounded bg-white">{currentPage}</button>

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-white"}`}
                    >
                        <MdKeyboardArrowRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Program;