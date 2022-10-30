# Track Zone Project Overview

## Requirements

- User can set their own time and timezone, this clock can't be deleted only be edited
- User can create as many clock as they want
  - Each clock has their own title or name
  - Own Timezone
  - Simple Events with time
  - Time difference between users timezone and clock timezone in hour and minute
- User can edit or delete a clock
- Timezone could be UTC (standard), GMT, PST, EST
- only date-ns library is allowed for this project. rest of the logic should write by yourself
- Every data must be validated

## What to submit?

- A proper breakdown of the requirements
- Component Tree and Data Flow
- Finally, Proper use of components and custom hooks

## Local Clock Display

This section has a title, time and timezone. We need four states for date, timezone, timezone offset and utc time. We will work with these states in a custom hook named useClock. And also we need a state to modify the local clock in App component. We will create one component for this section ClockDisplay.

We also need a state for clock running and we will work with it in useCounter hook.
