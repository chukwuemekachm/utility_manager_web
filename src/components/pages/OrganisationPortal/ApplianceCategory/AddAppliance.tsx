import * as React from 'react';
import { Modal } from 'components/ui/Modal';
import ModalCard from 'components/ui/Modal/ModalCard';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import { pickErrors } from 'helpers';

const { Fragment } = React;
interface CreateCategoryProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  hideModal: React.EventHandler<React.SyntheticEvent>;
  apiErrors?: Record<string, unknown>;
}
export default function CreateCategory(props: CreateCategoryProps) {
  const { handleSubmit, hideModal, apiErrors = {} } = props;
  const defaultValues = {
    label: '',
    specs: {},
    parameters: [],
  };
  return (
    <Modal>
      <ModalCard cardTitle="Add Appliance to CategoryName" handleToggleModal={hideModal}>
        <Form
          submitButtonLabel="Add Appliance"
          handleSubmit={handleSubmit('ADD_APPLIANCE')}
          validationSchemaKey="addAppliance"
          defaultValues={defaultValues}
        >
          {({ handleChange, errors, values, handleBlur }): React.ReactNode => (
            <Fragment>
              <Input
                name="name"
                title="label"
                autoComplete="off"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorFeedback={pickErrors(errors, apiErrors).name}
              />
              <Input
                name="parameters"
                title="Parameters"
                autoComplete="off"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorFeedback={pickErrors(errors, apiErrors).name}
              />
              <Input
                name="specs"
                title="specs"
                autoComplete="off"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorFeedback={pickErrors(errors, apiErrors).name}
              />
            </Fragment>
          )}
        </Form>
      </ModalCard>
    </Modal>
  );
}
