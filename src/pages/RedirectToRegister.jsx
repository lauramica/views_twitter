import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectToUse() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/register");
  });

  return <></>;
}

export default RedirectToRegister;
