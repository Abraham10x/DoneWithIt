import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ icon, items, placeholder, name }) {
  const { setFieldValue, touched, errors, values } = useFormikContext();
  return (
    <>
      <AppPicker
        icon={icon}
        items={items}
        onSelect={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectItem={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

export default AppFormPicker;
