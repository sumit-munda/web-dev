import React from 'react';

const Shortie = ({ performance, dateCreated, topPerforming }) => {
  const createNewLink = () => {
    console.log("CREATE NEW LINK ©");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shortie URL Shortener</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-lg">Performance: {performance}</p>
        <p className="text-lg">Date Created: {dateCreated}</p>
        <p className="text-lg">Top Performing: {topPerforming}</p>
        <button
          onClick={createNewLink}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create New Link
        </button>
      </div>
    </div>
  );
};

// Example usage
const App = () => {
  return (
    <Shortie performance={2280} dateCreated={1756} topPerforming="Microsite" />
  );
};

export default App;
