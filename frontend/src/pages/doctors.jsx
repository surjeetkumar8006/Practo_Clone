// pages/doctors.js
import React, { useEffect, useState } from "react";
import DoctorFilters from "@/components/Filter";
import DoctorCard from "@/components/DoctorCard";
import styles from "@/styles/DoctorsPage.module.css";

const DoctorsPage = () => {
  const [filters, setFilters] = useState({
    gender: "",
    specialization: "",
    experience: 0,
    fees: 2000,
  });

  const [doctors, setDoctors] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Fetch doctors
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/doctors");
        const data = await res.json();
        setDoctors(data);
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      }
    };
    fetchDoctors();
  }, []);

  // Apply filters
 useEffect(() => {
  const applyFilters = () => {
    let result = [...doctors];

    // Gender — skip if not in your data
    if (filters.gender) {
      // Gender not in data, skip or add dummy gender for testing
    }

    // Specialization => use specialty
    if (filters.specialization) {
      result = result.filter((doc) =>
        doc.specialty?.toLowerCase().includes(filters.specialization.toLowerCase())
      );
    }

    // Experience => use experienceYears
    if (filters.experience !== null && filters.experience !== undefined) {
      result = result.filter(
        (doc) => parseInt(doc.experienceYears) >= parseInt(filters.experience)
      );
    }

    // Fees => use consultationFee
    if (filters.fees !== null && filters.fees !== undefined) {
      result = result.filter(
        (doc) => parseInt(doc.consultationFee) <= parseInt(filters.fees)
      );
    }

    setFilteredDoctors(result);
  };

  applyFilters();
}, [filters, doctors]);


  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Find the Best Doctors</h1>
      <div className={styles.container}>
        <DoctorFilters filters={filters} setFilters={setFilters} />
        <div className={styles.cardsContainer}>
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor) => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          ) : (
            <p className={styles.noResults}>No doctors match your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorsPage;
