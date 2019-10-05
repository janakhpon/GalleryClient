import React from 'react';
import Image from '../Image';


const Datarow = ({ galaries }) => {

  let galarie = galaries.map((galarie, key) => {
    return (
      <Image id={galarie._id} mimetype={galarie.mimetype} image={galarie.image} type={galarie.type} date={galarie.date} key={galarie._id} keyword={galarie.keyword} />
    )
  })

  return (

    <React.Fragment>

      {galarie}

    </React.Fragment>

  );
};


export default Datarow;