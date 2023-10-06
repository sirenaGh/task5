import React from 'react'
import { useLoaderData } from 'react-router-dom';


function Students() {
  const data= useLoaderData();
  console.log(data);
  return (
    <div> 
      {data && data.users.map((item) => {
        return  <div>{item.firstName}</div>;
        })}
    </div>
  );
}

export default Students