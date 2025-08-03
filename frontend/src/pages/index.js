import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const router = useRouter();
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (!specialty && !location) return alert("Please enter a search query.");
    router.push(`/doctors?specialty=${specialty}&location=${location}`);
  };

  return (
    <>
      <Head>
        <title>Practo Clone - Find Doctors Near You</title>
        <meta name="description" content="Search doctors, clinics, and hospitals in your area - Practo Clone" />
      </Head>

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>Your Health, Our Priority</h1>
          <p className={styles.subtitle}>
            Search trusted doctors, book appointments, and consult instantly.
          </p>

          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Specialty (e.g. Cardiologist, Dentist)"
              className={styles.input}
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location (e.g. JP Nagar, Bangalore)"
              className={styles.input}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <button className={styles.button} onClick={handleSearch}>
              Search Doctors
            </button>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>Verified Doctors</h3>
              <p>Consult only with verified and experienced medical professionals.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Instant Booking</h3>
              <p>Book appointments in seconds with live availability and confirmation.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>Online Consultations</h3>
              <p>Get medical advice from the comfort of your home through secure video calls.</p>
            </div>
          </div>
        </section>

        <section className={styles.about}>
          <h2 className={styles.sectionTitle}>About Practo Clone</h2>
          <p>
            Practo Clone is a modern healthcare platform that enables users to search, find,
            and consult doctors across various specializations and cities in India.
            We aim to make access to healthcare faster, easier, and more transparent for everyone.
          </p>
        </section>
      </main>
    </>
  );
}
