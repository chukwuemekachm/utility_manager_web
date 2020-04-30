import * as React from 'react';
import { Modal } from 'components/ui/Modal';
import ModalCard from 'components/ui/Modal/ModalCard';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import SelectInput from 'components/ui/SelectInput';
import SearchInput from 'components/ui/SearchInput';
import DropdownItem from 'components/ui/DropdownItem';
import { connect } from 'react-redux';
import { searchUnits } from 'store/actions/setting';
import { pickErrors } from 'helpers';
import { useSearchDebounce } from 'helpers/customHooks';

interface CreateParameterProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  hideModal: React.EventHandler<React.SyntheticEvent>;
  defaultValues: {
    name: string;
    valueType: string;
    unitId: string;
  };
  params: object;
  apiErrors?: Record<string, unknown>;
  callSearchUnits: (args: Record<string, unknown>) => void;
  units: FetchDataType;
}
export function CreateParameter(props: CreateParameterProps) {
  const { params, handleSubmit, hideModal, defaultValues, callSearchUnits, apiErrors, units } = props;
  const [searchUnits] = useSearchDebounce(callSearchUnits, params);

  function handleTextInputChange(e) {
    searchUnits(e.target.value);
  }
  return (
    <Modal>
      <ModalCard cardTitle="Create Parameter" handleToggleModal={hideModal}>
        <Form
          submitButtonLabel="Create Parameter"
          handleSubmit={handleSubmit('CREATE_PARAMETER')}
          validationSchemaKey="createParameter"
          defaultValues={defaultValues}
        >
          {({ handleChange, errors, values, handleBlur }): React.ReactNode => (
            <>
              <Input
                name="name"
                title="Name"
                autoComplete="off"
                value={values.name}
                handleChange={handleChange}
                errorFeedback={pickErrors(errors, apiErrors).name}
                handleBlur={handleBlur}
                tabIndex={1}
                placeholder="Name"
                required
              />
              <SelectInput
                errorFeedback={pickErrors(errors, apiErrors).valueType}
                tabIndex={2}
                title="Value Type"
                name="valueType"
                value={values.valueType}
                handleChange={handleChange}
                handleBlur={handleBlur}
                required
              >
                {({ handleClick }) => (
                  <>
                    <DropdownItem onClick={handleClick} value="NUMERIC">
                      NUMERIC
                    </DropdownItem>
                    <DropdownItem onClick={handleClick} value="STRING">
                      TEXT
                    </DropdownItem>
                  </>
                )}
              </SelectInput>
              {values.valueType === 'NUMERIC' && (
                <SearchInput
                  errorFeedback={pickErrors(errors, apiErrors).unitId}
                  tabIndex={3}
                  title="Unit"
                  name="unitId"
                  value={values.valueType}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleTextInputChange={handleTextInputChange}
                  placeholder="Enter Unit Name"
                >
                  {({ handleClick }) => (
                    <>
                      {units.data.map((unit, index) => (
                        <DropdownItem key={index} onClick={handleClick} value={unit.id}>
                          <div>
                            {unit.name}({unit.symbol})
                          </div>
                        </DropdownItem>
                      ))}
                    </>
                  )}
                </SearchInput>
              )}
            </>
          )}
        </Form>
      </ModalCard>
    </Modal>
  );
}
const mapStateToProps = ({ setting: { searchedUnits } }) => ({
  units: searchedUnits,
});

const mapDispatchToProps = dispatch => ({
  callSearchUnits: (payload): void => dispatch(searchUnits(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateParameter);
