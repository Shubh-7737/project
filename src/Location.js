import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import Select from 'react-select';

const options=[
  {value:"Jaipur",label:"Jaipur"},
  {value:"Delhi",label:"Delhi"}, 
  {value:"Mumbai",label:"Mumbai"},
  {value:"Goa",label:"Goa"},
];
export default function Location() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="Location" style={{color:'black'}}>
      <Select 
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}