import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import cvData from './cv.json';

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6" ref={componentRef}>
        <header className="text-center border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">{cvData.personalInformation.firstName} {cvData.personalInformation.lastName}</h1>
          <p className="text-gray-600">Email: {cvData.personalInformation.email}</p>
          <p className="text-gray-600">Kids: {cvData.personalInformation.kids}</p>
        </header>

        <section className="mt-6 border-l-4 border-blue-500 pl-4">
          <h2 className="text-xl font-semibold text-blue-600">Diplomas</h2>
          {cvData.diplomas.map((diploma, index) => (
            <div key={index} className="mt-2">
              <p className="text-gray-700"><strong>{diploma.year}:</strong> {diploma.degree} from {diploma.institution}, Honors: {diploma.honors}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 border-l-4 border-green-500 pl-4">
          <h2 className="text-xl font-semibold text-green-600">Experiences</h2>
          {cvData.experiences.map((experience, index) => (
            <div key={index} className="mt-2">
              <p className="text-gray-700"><strong>{experience.period}:</strong> {experience.role}</p>
              <p className="text-gray-600">{experience.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 border-l-4 border-yellow-500 pl-4">
          <h2 className="text-xl font-semibold text-yellow-600">Trainings</h2>
          {cvData.trainings.map((training, index) => (
            <div key={index} className="mt-2">
              <p className="text-gray-700"><strong>{training.year}:</strong> {training.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 border-l-4 border-purple-500 pl-4">
          <h2 className="text-xl font-semibold text-purple-600">Languages</h2>
          <p className="text-gray-700">Arabic: Oral: {cvData.languages.arabic.oral}, Written: {cvData.languages.arabic.written}, Reading: {cvData.languages.arabic.reading}</p>
          <p className="text-gray-700">French: Oral: {cvData.languages.french.oral}, Written: {cvData.languages.french.written}, Reading: {cvData.languages.french.reading}</p>
          <p className="text-gray-700">English: Oral: {cvData.languages.english.oral}, Written: {cvData.languages.english.written}, Reading: {cvData.languages.english.reading}</p>
        </section>

        <section className="mt-6 border-l-4 border-red-500 pl-4">
          <h2 className="text-xl font-semibold text-red-600">Other Information</h2>
          {cvData.otherInformation.databaseExperience.map((exp, index) => (
            <div key={index} className="mt-2">
              <p className="text-gray-700"><strong>{exp.period}:</strong> {exp.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-6 border-t pt-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
          <p className="text-blue-600"><a href={cvData.contact.github} target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
          <p className="text-blue-600"><a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </section>
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
        >
          Save as PDF
        </button>
      </div>
    </div>
  );
}

export default App;

