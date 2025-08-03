import React from "react";
import styles from "@/styles/DoctorCard.module.css";

const DoctorCard = ({ doctor }) => {
  return (
    <div className={styles["doctor-card"]}>
      <img
        src={doctor.profileImage}
        alt={doctor.name}
        className={styles["profile-img"]}
      />

      <div className={styles.info}>
        <h2>{doctor.name}</h2>
        <p><strong>{doctor.specialty}</strong></p>
        <p>{doctor.clinicName}, {doctor.location}</p>
        <p>{doctor.experienceYears} years experience overall</p>
        <p>₹ {doctor.consultationFee} Consultation Fees</p>
        <p>{doctor.rating}% 👍 ({doctor.patientStories} Patient Stories)</p>
        {doctor.isAvailableToday && (
          <p style={{ color: "green", fontWeight: "bold" }}>Available Today</p>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
