import React, { useEffect, useState } from "react";
import axios from "axios";

const AuthorityList = (props) => {
  const authorityApiUrl = "http://localhost:8080/authorities/";
  const [authorities, setAuthorities] = useState([]);

  const getTeacherAuthorities = async () => {
    try {
      const res = await axios.get(`${authorityApiUrl}${props.id}`);
      if (res.data?.length !== 0) {
        setAuthorities(res.data);
        console.log(res.data);
        return res.data;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getTeacherAuthorities();
  }, []);

  return (
    <div className="authority-list">
      <ul>
        {authorities.length > 0
          ? authorities.map((a) => <li key={a.p_name}>{a.p_name}</li>)
          : "no authorities"}
      </ul>
    </div>
  );
};

export default AuthorityList;
