import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RedirectToUse() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/register`);
  });

  return <></>;
}

export default RedirectToRegister;
