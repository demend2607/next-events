"use client";

import axios from "axios";
import { useState, useEffect } from "react";

// Now my data needs to be typed each time

// return jsonify({
//   'check_js': check_js,
//   'check_flash': check_flash,
//   'check_user': check_user
// })
type serverData = {
  check_js: string;
  check_flash: string;
  check_user: string;
};

export default function ActionFromServer() {
  const [data, setData] = useState<serverData>();
  // how create async useEfect

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await axios.get("http://127.0.0.1:8000/api/home");
        console.log(responce);

        setData(responce.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data ? (
        <div>
          <p>{data.check_flash}</p>
          <p>{data.check_js}</p>
          <p>{data.check_user}</p>
        </div>
      ) : (
        <p>{"loading"}</p>
      )}
    </div>
  );
}
