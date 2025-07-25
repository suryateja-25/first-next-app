"use client";

import { FormControlLabel, Switch } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";

interface FormValues {
  darkMode: boolean;
}

export default function Toggle() {
  return (
    <Formik<FormValues> initialValues={{ darkMode: false }} onSubmit={() => {}}>
      {({ values, setFieldValue }) => {
        useEffect(() => {
          document.documentElement.classList.toggle("dark", values.darkMode);
        }, [values.darkMode]);

        return (
          <Form>
            <FormControlLabel
              control={
                <Field name="darkMode">
                  {({ field }: { field: { value: boolean } }) => (
                    <Switch
                      checked={field.value}
                      onChange={(e) =>
                        setFieldValue("darkMode", e.target.checked)
                      }
                      color="primary"
                    />
                  )}
                </Field>
              }
              label={values.darkMode ? "Dark Mode" : "Light Mode"}
            />
          </Form>
        );
      }}
    </Formik>
  );
}
