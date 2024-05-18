import { TextField } from "@mui/material";
import { useFormikContext } from "formik";

interface BaseInputField {
  name: string;
  type: string;
  label: string;
  placeholder: string;
}

function BaseInputField({ name, type, label, placeholder }: BaseInputField) {
  const { values , setFieldValue } = useFormikContext<{ [key: string]: string }>();
  return (
    <div className="mt-3">
      <TextField
        autoFocus
        label={label}
        name={name}
        type={type}
        value={values[name]}
        className="w-full"
        placeholder={placeholder}
        onChange={(e)=>setFieldValue(name , e.target.value)}
      />
    </div>
  );
}

export default BaseInputField;
