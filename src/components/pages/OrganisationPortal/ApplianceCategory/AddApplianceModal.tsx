import * as React from 'react';
import { Modal } from 'components/ui/Modal';
import ModalCard from 'components/ui/Modal/ModalCard';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import { pickErrors } from 'helpers';
import KeyValueInput from 'components/ui/KeyValueInput';
import TagInput from 'components/ui/TagInput';
import DropdownItem from 'components/ui/DropdownItem';

interface AddApplianceModalProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  hideModal: React.EventHandler<React.SyntheticEvent>;
  apiErrors?: Record<string, unknown>;
  categoryName: string;
  handleSearchParameters: (searchValue: string) => void;
  searchedParams: FetchDataType;
}
export default function AddApplianceModal(props: AddApplianceModalProps) {
  const {
    handleSubmit,
    hideModal,
    apiErrors = {},
    categoryName = 'category',
    searchedParams,
    handleSearchParameters,
  } = props;
  const defaultValues = {
    label: '',
    specs: {},
    parameters: [],
  };

  function parseSearchedParameters(params, values, handleClick) {
    const nodes = params.data
      .filter(param => !values.parameters.includes(param.id))
      .map((param, index) => {
        return (
          <DropdownItem key={index} value={param.id} onClick={handleClick} returnNodeOnClick={() => param.name}>
            {param.name} {param.unit && <span>({param.unit.name})</span>}
          </DropdownItem>
        );
      });
    return nodes;
    // if (nodes.length) {
    //   return nodes;
    // }

    // return <DropdownItem>No Parameters with that name was found</DropdownItem>;
  }

  return (
    <Modal>
      <ModalCard cardTitle={`Add Appliance to ${categoryName}`} handleToggleModal={hideModal}>
        <Form
          submitButtonLabel="Add Appliance"
          handleSubmit={handleSubmit('ADD_APPLIANCE')}
          validationSchemaKey="addAppliance"
          defaultValues={defaultValues}
        >
          {({ handleChange, errors, values, handleBlur }): React.ReactNode => (
            <>
              <Input
                name="label"
                title="Label or Tag"
                autoComplete="off"
                value={values.name}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errorFeedback={pickErrors(errors, apiErrors).label}
                required
              />
              <TagInput
                name="parameters"
                title="Parameters"
                autoComplete="off"
                value={values.parameters}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleSearchValue={handleSearchParameters}
                errorFeedback={pickErrors(errors, apiErrors).parameters}
                required
              >
                {({ handleClick }) => <>{parseSearchedParameters(searchedParams, values, handleClick)}</>}
              </TagInput>
              <KeyValueInput
                name="specs"
                title="Specs"
                value={values.specs}
                handleChange={handleChange}
                errorFeedback={pickErrors(errors, apiErrors).specs}
              />
            </>
          )}
        </Form>
      </ModalCard>
    </Modal>
  );
}
