# Uniwa University Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

# [Visit the Website](https://niaoubregatoula.github.io/Uniwa-SDG/)

<p align="center">
  <img src="https://github.com/user-attachments/assets/3e8fab9c-6a32-48a0-befd-3cc72e0d1b74" alt="Project Logo" width="1080"/>
</p>


## Uniwa SDG Project 🌍

### Calculating the SDG's Progress

This app is designed to track and calculate the progress of Sustainable Development Goals (SDGs) for educational institutions. Some SDG indicators require data from previous years to compare and evaluate progress effectively.

#### SDG Indicators Calculated:
| Indicator Code | SDG Number | Description                                  |
|----------------|------------|----------------------------------------------|
| I3             | SDG 02     | Waste vs Campus Population                   |
| I8             | SDG 04     | 1st Year Students vs Graduates               |
| I9             | SDG 05     | Female Senior Staff vs All Senior Staff      |
| I13            | SDG 06     | Water Quantity (cm³) vs Campus Population    |
| I17            | SDG 07     | Total Energy (Gj) vs Total Floor Space (m²)  |
| I18            | SDG 09     | Research Income vs Academic Staff            |
| I24            | SDG 12     | Recycled Waste vs Total Waste                |
| I30            | SDG 17     | Publications vs Academic Staff               |

---

### Codebase Structure 🧑‍💻

#### Card Component Structure

The **Card** is the main component of the app, functioning as a container for all other components representing SDG categories. 

**Components within the Card:**
- **Page Component**: Represents individual SDG pages.
- **Footer**: Contains pagination and calculation button.

#### Page Structure

Each page corresponds to a different SDG (01–17) and includes:
- **Header**: SDG title (e.g., SDG 04).
- **Sub-Header**: Description of the SDG’s focus.
- **Body**: Lists relevant SDG indicators.

#### Indicators Structure

Each indicator is structured as follows:
- **Header**: Indicator title and weight.
- **Body**: Includes indicator inputs, referred to as **Sections**.

Indicators can have multiple sections, typically 1–3 per indicator.

#### Sections Structure

Each section contains:
- **Header**: Section title.
- **Body**: Holds the inputs, referred to as **Values**.

Sections may include multiple possible values (radio buttons) or one or more numerical inputs.

---

### Future Features 🚀

#### Enhancing User Experience

- **File Upload Capability**: Users can upload JSON or CSV files with SDG data, allowing for automatic progress calculations.
- **Data Export**: Enable users to export data as JSON or CSV files for easy re-import in the future.
- **Report Generation**: Display and print progress reports, including graphical representations of the data.

---

### Developer Notes 📘

#### Naming Conventions

- **Input Names**: Follow a `number-number` format (e.g., `1-2`, `2-3`, `3-4`). The first number represents the indicator’s number, and the second represents the section’s number.

---

This project utilizes Next.js, Tailwind CSS, React, and TypeScript to deliver a responsive, efficient, and scalable application for SDG tracking in educational contexts. Contributions are welcome to improve and extend functionality!
