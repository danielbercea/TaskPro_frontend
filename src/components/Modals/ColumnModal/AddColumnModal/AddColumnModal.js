import React from 'react';

import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  PlusIcon,
  TitleInput,
  SectionTitle,
  ModalForm,
  ErrorSection,
  ButtonPlus,
} from '../ColumnModal.styled';
import sprite from '../../../../images/sprite.svg';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../../../redux/dashboards/dashboardsOperations.js';
import { selectColumns } from '../../../../redux/dashboards/dashboardsSelectors.js';

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
});

const initialValues = {
  title: '',
};

const AddColumnModal = ({ dashboardId, closeModal }) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);

  const handleSubmit = (values, { resetForm }) => {
    const { title } = values;

    const alreadyExists = columns.findIndex(item => {
      const name = item.title.toLowerCase();
      const newName = title.toLowerCase();
      return name === newName;
    });

    if (alreadyExists >= 0) {
      alert(`${title} is already added to the column list`);
      return;
    }

    dispatch(
      addColumn({
        dashboardId,
        title,
      })
    );
    resetForm();
    closeModal();
  };

  return (
    <Section>
      <SectionTitle>Add column</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="title" component="div" />
            <TitleInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
            />
          </FormWrapper>

          <AuthFormSubmitButton type="submit">
            <ButtonPlus>
              <PlusIcon>
                <use href={sprite + '#icon-plus'} />
              </PlusIcon>
            </ButtonPlus>
            Add
          </AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default AddColumnModal;
