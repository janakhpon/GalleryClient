import React from 'react';
import ListItem from '../ListItem';


const List = ({galaries}) => {

  let galarie = galaries.map((galarie, key) => {
    return (
      <ListItem id={galarie._id} mimetype={galarie.mimetype} image={galarie.image} type={galarie.type} date={galarie.date} key={galarie._id} keyword={galarie.keyword} />
    )
  })

  return (

    <React.Fragment>
      {galarie}
    </React.Fragment>

  );
};


export default List;