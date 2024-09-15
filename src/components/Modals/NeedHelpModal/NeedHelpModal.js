import React from 'react';
import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  TitleInput,
  SectionTitle,
  Textarea,
  ModalForm,
  ErrorSection,
} from './NeedHelpModal.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { needHelp } from '../../../redux/auth/authOperations';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  comment: Yup.string()
    .min(7, 'Comment must be at least 7 characters')
    .max(230, 'Comment must be at most 230 characters')
    .required('Comment is required'),
});

const initialValues = {
  email: '',
  comment: '',
};

const NeedHelpModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, comment } = values;
    const updateData = { email, comment };
    dispatch(needHelp(updateData));
    resetForm();
    closeModal();
  };

  return (
    <Section>
      <SectionTitle>Need help</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="email" component="div" />
            <TitleInput
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
            />

            <ErrorSection name="comment" component="div" />
            <Textarea
              component="textarea"
              type="text"
              id="comment"
              name="comment"
              placeholder="Comment"
            />
          </FormWrapper>

          <AuthFormSubmitButton type="submit">Send</AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default NeedHelpModal;
