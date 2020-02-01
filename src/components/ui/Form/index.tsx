/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';

import Button from 'components/ui/Button';
import EditIcon from 'components/ui/Icon';
import { convertFromPixelsToRem } from 'utils/misc';
import { validatePayload } from 'lib/validator';

export interface FormProps {
  handleSubmit: (values: Record<string, any>) => void;
  handleInputBlur?: () => void;
  isLoading?: boolean;
  imageURL?: string;
  imageAltText?: string;
  submitButtonLabel: string;
  validationSchemaKey?: string;
  children: (props: ChildrenProps) => React.ReactNode;
  defaultValues?: Record<string, any>;
}

interface ChildrenProps {
  values: Record<string, any>;
  errors: Record<string, string[]>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
}

function Form(props: FormProps): React.ReactElement<FormProps> {
  const {
    handleSubmit,
    handleInputBlur,
    isLoading = false,
    imageURL = '',
    imageAltText = '',
    submitButtonLabel = '',
    children,
    validationSchemaKey,
    defaultValues = {},
  } = props;
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});

  function handleChange(event): void {
    const {
      target: { value, name },
    } = event;
    setValues(prevState => ({ ...prevState, [name]: name == 'showPassword' ? !values.showPassword : value }));
  }

  async function handleBlur({ target: { value, name } }: React.FocusEvent<HTMLInputElement>): Promise<void> {
    if (value) {
      const newErrors = await validatePayload(values, validationSchemaKey);
      setErrors({ ...errors, [name]: newErrors ? newErrors[name] : [] });
    }
    if (handleInputBlur) handleInputBlur();
  }

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (validationSchemaKey) {
      const submitErrors = await validatePayload(values, validationSchemaKey);
      if (submitErrors) {
        return setErrors(submitErrors);
      }
    }
    return handleSubmit(values);
  }

  function composeProps(): ChildrenProps {
    return {
      values,
      errors,
      handleChange,
      handleBlur,
    };
  }

  return (
    <Form.Wrapper onSubmit={handleFormSubmit}>
      {imageURL && (
        <Form.Header>
          <div className="image-wrapper">
            <img src={imageURL} className="user-image" alt={imageAltText} />
            <div className="image-overlay">
              <EditIcon iconType="md-create" color="GREY" size="NORMAL" />
            </div>
          </div>
        </Form.Header>
      )}
      <Form.Body>
        {children(composeProps())}
        <Button isLoading={isLoading} type="submit">
          {submitButtonLabel}
        </Button>
      </Form.Body>
    </Form.Wrapper>
  );
}

Form.Body = styled.div`
  width: 100%;
`;

Form.Header = styled.div`
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

Form.Wrapper = styled.form`
  width: 100%;

  div {
    button {
      border-radius: ${convertFromPixelsToRem(3)};
    }
  }
`;

export default Form;
