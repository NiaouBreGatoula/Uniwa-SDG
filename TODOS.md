## Codebase

### Changes Required

I propose the following changes to the codebase:

- Currently, I am unaware of where you store the input values. I would suggest storing them in a state variable (an object) in App.tsx component.
- We should should use the inputs' name attributes as the property names in our state variable. This way we only need a single onChange handler to update the state variable.
- As mentioned below we need a way to have 2 instances of the app. One for the previous year and one for the current one. How to do it is also mentioned below. Its important to note that we need a way to tell our single onChange handler which instance of the app is being updated. This can be done with multiple ways, using a state variable is good enough I believe.

### Features Required

- Abiiity to store a previous year SDG Data.
  - How to:
    1. We simply need another state variable to store the previous year data (App.tsx).
    2. We need to add a new button to the UI to allow the user to toggle between previous and current year (App.tsx).

## Indicator Sections

- SDG 02:
  - Indicator 3 (I3):
    - We need 2 Number Inputs
      - Number Input #1: The number of waste (σκουπίδια) produced in the Institution
      - Number Input #2: Campus Population (Πληθυσμός Πανεπιστημίου)
    - At the final Calculation, we will divide the first number by the second number.
