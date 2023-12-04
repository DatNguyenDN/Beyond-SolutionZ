import React, { useState } from 'react';

const QuestionForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        You have a question about {selectedOption ? `${selectedOption}?` : '...?'}
      </h2>

      <form>
        <label className="block mb-2">Select an option:</label>
        <div className="flex space-x-4">
          <button
            type="button"
            className={`border p-2 ${selectedOption === 'Macbook' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionClick('Macbook')}
          >
            Macbook
          </button>
          <button
            type="button"
            className={`border p-2 ${selectedOption === 'Dell' ? 'bg-gray-200' : ''}`}
            onClick={() => handleOptionClick('Dell')}
          >
            Dell
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
