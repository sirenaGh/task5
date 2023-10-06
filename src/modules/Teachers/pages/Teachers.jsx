import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "../../../redux/action/index";
import data from "../../../redux/data/data.json"; 
function Teachers() {
  const { usersData, isLoading } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers(data));
  }, []);

  return (
    <>
      {isLoading && <div className="loading">Data loading...</div>}
      {usersData?.map((user) => {
        return (
          <div key={user.id} className="container">
            <div className="content">
              <h1>{user.name}</h1>
              <span>{user.email}</span>
              <h3>{user.post}</h3>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Teachers