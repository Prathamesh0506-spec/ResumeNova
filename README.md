# ResumeNova - Canva-Style Resume Builder 🚀

ResumeNova is a Canva-inspired Resume Builder built using React. It allows users to create, edit, preview, customize, and download professional resumes in real time.

## 📌 Project Overview

ResumeNova gives users a smooth resume-building experience where they can enter their details on the left side and instantly see the updated resume preview on the right side.

The application follows a 50-50 workspace layout:

- Left side: Resume input forms
- Right side: Live A4 resume preview
- Navbar: Sticky top navigation
- Templates: Multiple resume layouts
- Export: Download resume as PDF


## ⚛️ React Concepts and Project Features
| React Concept | Project Feature Achieved |
|---|---|
| Components | Navbar, Home, Edit Workspace, Forms, Template Selector, and Resume Preview are created as separate reusable parts |
| `useState` | Stores resume data like name, email, education, experience, skills, projects, selected template, color, font, and zoom value |
| Props | Sends resume data from parent component to child components like Resume Preview and Template components |
| Event Handling | Handles typing, button clicks, add/remove actions, theme change, template change, zoom change, and PDF download |
| Form Handling | Captures user inputs from personal details, education, experience, skills, and projects sections |
| Real-Time Rendering | Updates the resume preview instantly when the user types in the form |
| Conditional Rendering | Shows selected resume template, selected theme, and selected design options based on user choices |
| List Rendering | Displays multiple education records, experience records, skills, and projects dynamically |
| Array State Management | Adds and removes repeated fields like jobs, colleges, skills, and project details |
| React Router | Connects pages like Home, Edit, More Templates, and Get+ without full page reload |
| Reusable UI Logic | Common form sections and preview layouts can be reused instead of writing duplicate code |
| State Lifting | Keeps resume data in a common parent component so multiple child components can access the same data |
| Controlled Components | Form inputs are controlled by React state, so UI and data remain synchronized |
| Dynamic Styling | Changes resume color palette, font family, zoom level, and theme at runtime |
| Template Switching | Changes resume layout without losing entered data |
| Component Composition | Builds a complete resume builder by combining smaller components together |
| Export Logic | Converts the final selected resume preview into a downloadable PDF |

## 🎨 Key Features

- 📝 Real-time resume editing
- 👀 Live A4 resume preview
- 🎯 Canva-style user experience
- 📂 Dynamic sections for Experience, Education, Skills, and Projects
- ➕ Add More and Remove logic for repeated fields
- 🎨 Runtime color palette customization
- 🔤 Font family selection
- 🧩 Multiple resume templates
- 🌗 Dark / Light theme control
- 🔍 Zoom controls for preview
- 📄 Export resume as a PDF

## 🧠 How React Concepts Are Replicated

When a user types their name, email, skills, education, or work experience, the data is stored inside React state. That same state is passed to the resume preview component using props.

Because of this, the preview updates instantly without refreshing the page.

For example:

- User types name in the form
- React updates the state using `useState`
- Updated state is passed to Resume Preview through props
- Resume Preview renders the new name immediately

This is exactly how React creates dynamic and interactive user interfaces.

## 🧱 Component Structure

The project can be divided into multiple reusable components:

- Navbar
- Home
- Edit Workspace
- Personal Details Form
- Experience Section
- Education Section
- Skills Section
- Projects Section
- Template Selector
- Resume Preview
- Export Button

Each component handles a specific responsibility, making the project cleaner and easier to manage.

## 🎯 Why This Project Matters

ResumeNova is not just a static resume page. It behaves like a real web application where user actions directly control the interface.

This project helps understand how React is used in real-world applications such as:

- Resume builders
- Form-based dashboards
- Profile editors
- Portfolio generators
- Template-based design tools

## 📄 Final Output

After completing the resume, users can download the final design as a professional A4-size PDF.

The final resume keeps the selected template, colors, font style, and entered data exactly as shown in the preview.

## ✅ Summary

ResumeNova connects React theory with practical implementation. It shows how state, props, components, events, forms, routing, conditional rendering, dynamic styling, and list rendering work together to build a complete interactive application.
