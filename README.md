#  Practo Clone - Doctor Finder App

A responsive full-stack web application that allows users to search doctors by specialty and location, view detailed information, and apply filters like gender, experience, and consultation fee.

 **Live App:** [Click Here](https://frontend-hqjf4wgio-surjeet-kumars-projects.vercel.app)

---

##  Features

-  Search doctors by specialty & location
-  Filter doctors by gender, fees, and experience
-  View detailed doctor profiles
-  Show availability for appointments
-  Location & tag based filtering
-  Responsive UI (Mobile Friendly)
-  Express.js REST API for doctor data
-  Fast and optimized using Next.js

---

## Tech Stack

### Frontend
-  React.js (Next.js)
-  CSS Modules
-  Axios

### Backend
-  Node.js
-  Express.js

### Deployment
- Frontend: [Vercel](https://vercel.com/)
- Backend: Localhost or free Node.js hosting (like Render)
<img width="1699" height="831" alt="image" src="https://github.com/user-attachments/assets/113baaaf-1b69-4edf-abc1-db8e94e66389" />
<img width="1845" height="792" alt="image" src="https://github.com/user-attachments/assets/052d5316-2d73-49c0-9649-c81ed7c2363e" />
<img width="1889" height="796" alt="image" src="https://github.com/user-attachments/assets/f7d56b36-64f8-4292-a83d-f56df0201a92"/>



## Setup Instructions

### Start Backend

```bash
cd backend
npm install
node server.js
# Backend will run on http://localhost:5000/api/doctors
 Start Frontend
bash
Copy
Edit
cd frontend
npm install
npm run dev
# Frontend will run on http://localhost:3000
 Deploy on Vercel (Frontend)
bash
Copy
Edit
npm i -g vercel
vercel
# Follow prompts:
# ? In which directory is your code located? ./ 
# Select: No to modify settings, Yes for default deployment protection
 Once done, you'll get your live deployment URL!

 Sample API Response (/api/doctors)
json
Copy
Edit
[
  {
    "id": 1,
    "name": "Dr. Amit Joshi",
    "specialty": "Dermatologist",
    "clinicName": "Skin & Hair Experts",
    "location": "Jayanagar, Bangalore",
    "experienceYears": 16,
    "consultationFee": 900,
    "rating": 88,
    "patientStories": 236,
    "isAvailableToday": true,
    "isAd": true,
    "profileImage": "https://example.com/images/doctor1.jpg",
    "tags": ["Skin & Hair"]
  }
]
<img width="1699" height="831" alt="image" src="https://github.com/user-attachments/assets/113baaaf-1b69-4edf-abc1-db8e94e66389" />
<img width="1845" height="792" alt="image" src="https://github.com/user-attachments/assets/052d5316-2d73-49c0-9649-c81ed7c2363e" />
<img width="1889" height="796" alt="image" src="https://github.com/user-attachments/assets/f7d56b36-64f8-4292-a83d-f56df0201a92" />


pgsql
Copy
Edit
 Welcome Section
 Specialty & Location Search
 Features Highlights (Verified, Booking, Online Consult)
Doctors Page


List of doctors
 Filters: Gender, Fee, Experience
 Doctor cards with availability and tags
(Add images in public/screenshots if needed)

Author
Surjeet Kumar
 Email: surjeetyadav80067@gmail.com
 GitHub: surjeetkumar8006



## 📂 Folder Structure

