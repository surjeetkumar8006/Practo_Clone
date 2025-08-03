import styles from "@/styles/DoctorFilters.module.css";

const DoctorFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let updatedValue = type === "checkbox" ? checked : value;

    // Convert numeric filters from string to number
    if (name === "experience" || name === "fees") {
      updatedValue = parseInt(updatedValue);
    }

    setFilters((prev) => ({
      ...prev,
      [name]: updatedValue,
    }));
  };

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.heading}>Filters</h3>

      {/* Gender Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Gender</label>
        <div className={styles.options}>
          <label className={styles.option}>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={filters.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label className={styles.option}>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={filters.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label className={styles.option}>
            <input
              type="radio"
              name="gender"
              value=""
              checked={filters.gender === ""}
              onChange={handleChange}
            />
            Any
          </label>
        </div>
      </div>

      {/* Fees Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Fees (₹)</label>
        <input
          type="range"
          name="fees"
          min="0"
          max="2000"
          step="100"
          value={filters.fees}
          onChange={handleChange}
          className={styles.range}
        />
        <p className={styles.rangeValue}>Up to ₹{filters.fees}</p>
      </div>

      {/* Experience Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Experience (Years)</label>
        <input
          type="range"
          name="experience"
          min="0"
          max="30"
          step="1"
          value={filters.experience}
          onChange={handleChange}
          className={styles.range}
        />
        <p className={styles.rangeValue}>
          Minimum {filters.experience} years
        </p>
      </div>

      {/* Specialization Filter */}
      <div className={styles.filterGroup}>
        <label className={styles.label}>Specialization</label>
        <select
          name="specialization"
          value={filters.specialization}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="">All</option>
          <option value="Dentist">Dentist</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
        </select>
      </div>
    </div>
  );
};

export default DoctorFilters;
