import { useState } from "react";
import { useDebugValue } from "react";
const useFormFields = () => {
  const [fields, setFields] = useState({});
  const handleChange = (e) => {
    const { target: inp } = e;
    setFields({
      ...fields,
      [inp.name]: inp.value,
    });
  };
  return [fields,handleChange]
};

export default useFormFields