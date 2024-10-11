Uniwa University Project
Link for website: https://niaoubregatoula.github.io/Uniwa-SDG/

## Uniwa SDG Project

### Caclulating the SDG's Progress

The app is designed to calculate the progress of the Sustainable Development Goals (SDGs) for Educational Institutions.

For some SDG Indicators to be calculated we need to have data from a previous year, so we can compare the current year's data with the previous year's data.

These Indicators are presented below:
| Indicator Code | SDG Number | Description |
|----------------|------------|--------------------|
| I3 | SDG 02 | Waste vs Campus Population |
| I8 | SDG 04 | 1st Year Students vs Graduates |
| I9 | SDG 05 | Female Senior Staff vs All Senior Staff |
| I13 | SDG 06 | Water Quantity (cm^3) vs Campus Population |
| I17 | SDG 07 | Total Energy (Gj) vs Total Floor Space (m^2) |
| I18 | SDG 09 | Research Income vs Academic Staff |
| I24 | SDG 12 | Recycled Waste vs Total Waste |
| I30 | SDG 17 | Publications vs Academic Staff |

### Codebase Structure 🧑‍💻

#### Card Component Structure

The Card is the app's main component and it's also a singleton.
Its task is to contain all the other Components that will be used to represent the SDG Categories.

The Card consists of:

- The Page Component
- Then Footer (Contains the Pagination + Calculation Btn).

#### Page Structure

The Pages will represent a different SDG (01-17), which mean we will have 17 Pages.
Each Page will have:

- a Header (SDG XX),
- a Sub-Header (What the SDG Stands For)
- a Body (Contains the SDG's Indicators) and,

#### Indicators Structure

Each Indicator will have:

- a Header (Indicator XX - Weight: XX),
- A Body (Contains the Indicator's Inputs which we call **Sections**)

An Indicator can have multiple Sections, to be precise, it can have 1-3 Sections.

#### Sections Structure

Each Section will have:

- a Header (Section XX),
- a Body (Contains the Section's Inputs which we call **Values**)

A Section can have multiple Possible Values (Radio Buttons), to be precise, it can have 2-3 Values.
It is also possible to have one(or more) Number Input instead of Radio Buttons.

### Future Features

#### Improving User Experience

- **Ability to upload a file** (JSON, CSV) with SDG data and have the app calculate the SDG's Progress. This is especially useful as we need data from a previous year to calculate the progress.
- **Ability to export the data** (JSON, CSV) to the user's device, so it can easily be imported (uploaded) again in the future.
- **Display and Print Report** containing graphs.