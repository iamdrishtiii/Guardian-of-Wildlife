import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWildlife } from "../action";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Wildlife = () => {
    const [filter, setFilter] = useState("Endangered");
    const [currentPage, setCurrentPage] = useState(1);
    const animalsPerPage = 6;

    const animalss = useSelector((state) => state.animalss) || [];
    const dispatch = useDispatch();
      
    useEffect(() => {
        dispatch(getWildlife());
    }, [dispatch]);

    // Filter the animals based on conservation status
    const filteredAnimals = animalss.filter(animal => animal.ConservationStatus === filter);

    // Pagination logic
    const indexOfLastAnimal = currentPage * animalsPerPage;
    const indexOfFirstAnimal = indexOfLastAnimal - animalsPerPage;
    const currentAnimals = filteredAnimals.slice(indexOfFirstAnimal, indexOfLastAnimal);

    const totalPages = Math.ceil(filteredAnimals.length / animalsPerPage);

    return (
        <div className="pb-[450px] 3xl:pb-48 md:pb-64">
            {/* Filter Dropdown */}
            <div className="p-4 text-center">
                <select
                    className="border p-2"
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.value);
                        setCurrentPage(1); // Reset to page 1 when filter changes
                    }}
                >
                    <option value="Endangered">Endangered</option>
                    <option value="Vulnerable">Vulnerable</option>
                    <option value="Least Concern">Least Concern</option>
                    <option value="Near Threatened">Near Threatened</option>
                    <option value="Critically Endangered">Critically Endangered</option>
                </select>
            </div>

            {/* Animal Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:p-10">
                {currentAnimals.length > 0 ? (
                    currentAnimals.map((animal) => (
                        <div key={animal.id} className="rounded-xl hover:bg-gray-100 px-10 py-4 h-fit flex justify-center text-center">
                            <Link to={`/wildlife/${animal.id}/${animal.AnimalName}`}>
                                <img src={animal.image} alt="" height="350px" width="350px" className="rounded-xl" />
                                <p className="text-2xl font-bold flex flex-row gap-10 mt-4">
                                    {animal.AnimalName}   <FaArrowRight />
                                </p>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-3 text-red-500">No animals found for {filter} status.</p>
                )}
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

export default Wildlife;

