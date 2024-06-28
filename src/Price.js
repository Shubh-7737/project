import React, { useState } from 'react';
import Select from 'react-select';

const options=[
  {value:">=700",label:"<=700"},
  {value:"800-1200",label:"800-1200"}, 
  {value:"1200-1500",label:"1200-1500"},
  {value:"<1500",label:"<1500"},
];

export default function Price() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="Price" style={{color:'black'}}>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}