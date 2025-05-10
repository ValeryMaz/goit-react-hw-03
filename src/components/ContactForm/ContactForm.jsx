import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min 3 chars").max(50, "Max 50 chars").required(),
  number: Yup.string().min(3).max(50).required(),
});

export default function ContactForm({ addContact }) {
  const handleSubmit = (values, actions) => {
    addContact({
      name: values.name,
      number: values.number,
      id: nanoid(),
    });
    actions.resetForm();
  };
  return (
    <div className={css.fromDiv}>
      <Formik
        initialValues={{
          name: "",
          number: "",
        }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
          <Field type="number" name="number" />
          <ErrorMessage name="number" />
          <button className={css.addBtn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}
