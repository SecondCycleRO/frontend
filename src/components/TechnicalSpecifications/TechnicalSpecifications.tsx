import React from 'react';
import {
  SpecSection,
  SpecPaper,
  SpecCategoryTitle,
  SpecTitle,
  SpecTable,
} from './TechnicalSpecifications.styled';

const dummyData = {
  general: {
    EAN: '1234567890123',
    Manufacturer: 'Pegas',
    Color: 'Orange',
    'Weight (Kg)': '15.50',
  },
  characteristics: {
    Color: 'Orange, Yellow',
    Type: 'Women',
    'Wheel Size': '26',
    'Frame Size (inch)': '17',
    'Recommended Height': '160 - 185 cm',
    'Max Weight': '100kg (user)',
  },
  frame: {
    Frame: 'Aluminum Hi-ten, Pegas Cruiser geometry',
    'Frame Material': 'Aluminum',
    Fork: 'Steel, 26"',
    Headset: 'Semi-integrated',
  },
};

const TechnicalSpecifications = () => {
  const renderSpecs = (
    categoryName: string,
    specs: { [key: string]: string },
  ) => (
    <>
      <SpecCategoryTitle>{categoryName}</SpecCategoryTitle>
      <SpecTable>
        <tbody>
          {Object.entries(specs).map(([key, value]) => (
            <tr key={key}>
              <th>{key}</th>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </SpecTable>
    </>
  );

  return (
    <SpecSection>
      <SpecPaper>
        <SpecTitle>Technical Specifications</SpecTitle>
        {renderSpecs('General', dummyData.general)}
        {renderSpecs('Characteristics', dummyData.characteristics)}
        {renderSpecs('Frame', dummyData.frame)}
      </SpecPaper>
    </SpecSection>
  );
};

export default TechnicalSpecifications;
