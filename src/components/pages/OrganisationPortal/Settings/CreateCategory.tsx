import * as React from 'react';
import { Modal } from 'components/ui/Modal';
import ModalCard from 'components/ui/Modal/ModalCard';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import TextAreaInput from 'components/ui/TextAreaInput';
import { pickErrors } from 'helpers';

const { Fragment } = React;
interface CreateCategoryProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  hideModal: React.EventHandler<React.SyntheticEvent>;
  defaultValues: {
    name: string;
    description: string;
  };
  apiErrors: Record<string, unknown>;
}
export default function CreateCategory(props: CreateCategoryProps) {
  const { handleSubmit, hideModal, defaultValues, apiErrors } = props;
  return (
    <Modal>
      <ModalCard cardTitle="Create Appliance Category" handleToggleModal={hideModal}>
        <Form
          submitButtonLabel="Create Category"
          handleSubmit={handleSubmit('CREATE_CATEGORY')}
          validationSchemaKey="createApplianceCategory"
          defaultValues={defaultValues}
        >
          {({ handleChange, errors, values, handleBlur }): React.ReactNode => (
            <Fragment>
              <Input
                name="name"
                title="Category Name"
                autoComplete="on"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorFeedback={pickErrors(errors, apiErrors).name}
              />
              <TextAreaInput
                rows={6}
                name="description"
                title="Category Description"
                value={values.description}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorFeedback={pickErrors(errors, apiErrors).description}
              />
            </Fragment>
          )}
        </Form>
      </ModalCard>
    </Modal>
  );
}
