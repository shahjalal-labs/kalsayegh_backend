# 🏥 Kal Sayegh — Healthcare & Clinical Management Engine

![Architecture Banner](./assets/banner.svg)

<p align="center">
  <a href="https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-76caf980-4e3e-4a2f-85af-487412849546" target="_blank">
    <img src="https://run.pstmn.io/button.svg" alt="View in Postman" />
  </a>
  <a href="https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-76caf980-4e3e-4a2f-85af-487412849546" target="_blank">
    <img src="https://img.shields.io/badge/Postman-Instant_Live_API_Docs-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Live API Documentation" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/JWT_Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" alt="JWT_Auth" />
  <img src="https://img.shields.io/badge/Healthcare_API-00F2FE?style=for-the-badge&logo=heart&logoColor=white" alt="Healthcare_API" />
  
</p>

---

## 📌 Executive Overview

Kal Sayegh is a mission-critical healthcare backend designed for clinical workflows, telemedicine scheduling, doctor-patient communication, and encrypted health record management. Built with enterprise type-safety and compliance-grade data validation.

---

## 🚀 Key Architectural Highlights

- **Clinical Scheduling**: Comprehensive appointment booking coordinator with doctor shift management.
- **Patient Record Security**: Strict Role-Based Access Control (Admin, Doctor, Patient) ensuring privacy compliance.
- **Prescription & Diagnosis**: Structured medical record management with encrypted attachments.
- **Transactional Integrity**: PostgreSQL ACID transactions managed via Prisma ORM.
- **Real-time Alerts**: Automated appointment reminders, email notifications, and schedule change broadcasts.

---

## 📬 API Documentation & Interactive Postman Collection

The complete REST API specification is published in our public Postman showcase workspace:

* 🌐 **Instant Live API Documentation**: [Explore kalsayegh_backend in Postman (Instant Web View)](https://www.postman.com/shahjalal-backend-9458759/shahjalal-api-portfolio/collection/48491387-76caf980-4e3e-4a2f-85af-487412849546)
* 📁 **Local Postman File**: [`docs/postman_collection.json`](./docs/postman_collection.json) (import directly into Postman Desktop or Newman CLI).

### Core Endpoint Modules

| Module | Base Route | Key Capabilities |
|---|---|---|
| **Authentication** | `/api/v1/auth` | Multi-role login (Doctors, Patients, Admin staff) |
| **Doctors** | `/api/v1/doctor` | Doctor directory, specialties, availability schedules |
| **Appointments** | `/api/v1/appointment` | Book visits, telemedicine slot allocation, status tracking |
| **Medical Records** | `/api/v1/record` | Patient clinical history, lab reports, diagnostic files |
| **Departments** | `/api/v1/department` | Clinical specialties, room allocation, staff assignments |

---

## 📂 Project Architecture

```plaintext
kalsayegh_backend/
├── assets/
│   └── banner.*                 # Project architecture visual banner
├── docs/
│   └── postman_collection.json  # Full Postman API collection v2.1
├── src/
│   ├── app/
│   │   ├── middlewares/         # Global error handlers, auth & validation guards
│   │   ├── modules/             # Domain-driven feature modules
│   │   └── routes/              # Centralized route aggregator
│   ├── config/                  # Environment & external service configurations
│   └── server.ts                # Application bootstrapper & HTTP server
├── prisma/
│   └── schema.prisma            # Database schema definition
├── .env.example                 # Sanitized environment template
├── package.json
└── tsconfig.json
```

---

## 🛠️ Quickstart & Local Setup

### Prerequisites
* **Node.js**: `v20.x` or higher
* **Database**: MongoDB or PostgreSQL (as specified in `schema.prisma`)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/shahjalal-labs/kalsayegh_backend.git
cd kalsayegh_backend
npm install
```

### 2. Environment Configuration
Copy the provided `.env.example` file to create your local `.env`:
```bash
cp .env.example .env
```

### 3. Initialize Prisma Client
```bash
npx prisma generate
```

### 4. Run Development Server
```bash
npm run dev
```

---

## 👨‍💻 Engineering & Authorship

Developed and maintained by **Md. Shahjalal**.

* **GitHub**: [@shahjalal-labs](https://github.com/shahjalal-labs)
* **Email**: [muhommodshahjalal@gmail.com](mailto:muhommodshahjalal@gmail.com)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
