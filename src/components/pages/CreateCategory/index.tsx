import * as React from 'react';
import Modal from 'components/ui/Modal';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import TextAreaInput from 'components/ui/TextAreaInput';
import ModalCard from 'components/ui/Modal/ModalCard';

interface CreateCategoryProps {
  handleToggleModal: () => void;
}
const { useState, Fragment } = React;
function CreateCategory({ handleToggleModal }: CreateCategoryProps): React.ReactElement<CreateCategoryProps> {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  return (
    <Modal>
      <ModalCard cardTitle="Create New Category" handleToggleModal={handleToggleModal}>
        <Form submitButtonLabel="Create Category" handleSubmit={(): null => null}>
          {() => (
            <Fragment>
              <Input
                name="categoryName"
                title="Category Name"
                autoComplete="on"
                value={categoryName}
                handleChange={e => setCategoryName(e.target.value)}
              />
              <TextAreaInput
                rows={6}
                name="categoryDescription"
                title="Category Description"
                value={categoryDescription}
                handleChange={e => setCategoryDescription(e.target.value)}
              />
            </Fragment>
          )}
        </Form>
      </ModalCard>
    </Modal>
  );
}

export default CreateCategory;
