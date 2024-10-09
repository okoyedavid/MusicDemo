import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "../store/Slices";

function GetAcessToken() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const TokenTime = localStorage.getItem("time");

    async function getAccessToken() {
      if (storedToken && TokenTime > Date.now()) {
        setToken(storedToken);
        return;
      } else {
        try {
          const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials&client_id=2775cb201345498daf0c3121a253a38c&client_secret=e04be7a2db2d41089f6b090ac350aa00",
          });

          if (!res.ok) throw new Error("failed to fetch access token");

          const data = await res.json();

          dispatch(getToken(data.access_token));
          setToken(data.access_token);
        } catch (error) {
          console.log(error);
        }
      }
    }

    getAccessToken();
  }, [dispatch]);

  return token;
}

export default GetAcessToken;
