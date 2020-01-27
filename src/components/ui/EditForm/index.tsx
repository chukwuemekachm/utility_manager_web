import * as React from 'react';
import styled from '@emotion/styled';
import Button from 'components/ui/Button';
import EditIcon from 'components/ui/Icon';
import { convertFromPixelsToRem } from 'utils/misc';
import { inputValidation } from 'lib/validator';

interface EditFormProps {
  handleSubmit: () => void;
  handleInputBlur: () => void;
  loading?: boolean;
  imageLink?: string;
  displayHeader?: boolean;
  imageName?: string;
  submitButtonName: string;
  children: (props: any) => React.ReactNode;
}

function EditForm(props: EditFormProps): React.ReactElement<EditFormProps> {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const {
    handleSubmit = (): null => null,
    handleInputBlur = (): null => null,
    loading = false,
    imageLink = '',
    displayHeader = true,
    imageName = '',
    submitButtonName = '',
    children,
  } = props;

  function handleChange(event): void {
    const {
      target: { value, name },
    } = event;
    setValues(prevState => ({ ...prevState, [name]: value }));
  }

  function handleBlur(): void {
    /* Need to know what will happen 
    here when an input element loses focus.*/
    handleInputBlur();
  }

  function handleFormSubmit(): any {
    // Validate Inputs
    const errorArray = inputValidation(values);
    if (errorArray.length > 0) {
      setErrors(prevState => ({ ...prevState, inputError: errorArray }));
    }
    return handleSubmit();
  }

  function composeProps(): object {
    return {
      values,
      errors,
      handleChange,
      handleBlur,
    };
  }

  return (
    <EditForm.Wrapper onSubmit={handleFormSubmit}>
      {displayHeader && (
        <EditForm.Header>
          <div className="image-wrapper">
            <img src={imageLink} className="user-image" alt={imageName} />
            <div className="image-overlay">
              <EditIcon iconType="md-create" color="GREY" size="NORMAL" />
            </div>
          </div>
        </EditForm.Header>
      )}
      <EditForm.Form>
        {children(composeProps())}
        <Button isLoading={loading} handleClick={handleSubmit}>
          {' '}
          {submitButtonName}
        </Button>
      </EditForm.Form>
    </EditForm.Wrapper>
  );
}

EditForm.Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
`;
EditForm.Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8.25rem;
  .image-wrapper {
    position: relative;
    width: ${convertFromPixelsToRem(70)};
    height: ${convertFromPixelsToRem(70)};
    background: gray;
    border-radius: 50%;
    overflow: hidden;
    .user-image {
      width: 100%;
      height: 100%;
    }
    .image-overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      position: absolute;
      background: rgba(255, 255, 255, 0.7);
      height: 50%;
      top: 50%;
      right: 0;
    }
  }
`;
EditForm.Form = styled.form`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  div {
    button {
      border-radius: ${convertFromPixelsToRem(3)};
    }
  }
`;
export default EditForm;
