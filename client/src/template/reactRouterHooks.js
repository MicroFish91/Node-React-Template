import React from "react";
import { useHistory, useParams } from "react-router-dom";

const FAQ = () => {
  let { faqID, name } = useParams();
  let history = useHistory();

  console.log("faqID", faqID);
  console.log("name", name);

  const handleClick = () => {
    history.push("/");
  };
  return (
    <>
      <h2>{faqID}</h2>
      <br />
      FAQ
      <button onClick={handleClick}>Navigate to home page</button>
    </>
  );
};

export default FAQ;
