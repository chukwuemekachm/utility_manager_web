/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import styled from '@emotion/styled';

import Button from 'components/ui/Button';
import { convertFromPixelsToRem } from 'utils/misc';
import { validatePayload } from 'lib/validator';
import ImagePicker from '../ImagePicker';
import __spacing from 'settings/__spacing';

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
  imageErrorFeedback?: Record<string, any>;
  handleShouldDisableButton?: (composedProps: Record<string, any>) => boolean;
  imageErrFeedbackHandler?: (composedProps: Record<string, any>) => string[];
  imageInputName?: string;
}

interface ChildrenProps {
  values: Record<string, any>;
  errors: Record<string, string[]>;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (event) => void;
}

function Form(props: FormProps): React.ReactElement<FormProps> {
  const {
    handleSubmit,
    handleInputBlur,
    isLoading = false,
    imageAltText = '',
    submitButtonLabel = '',
    children,
    validationSchemaKey,
    defaultValues = {},
    imageInputName = 'logo',
    imageErrFeedbackHandler = composedProps => [],
    handleShouldDisableButton = composedProps => false,
  } = props;
  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});

  function handleChange(event, nonStringValue?: any): void {
    let {
      target: { value },
    } = event;
    const {
      target: { name },
    } = event;
    if (nonStringValue) {
      value = nonStringValue;
    }

    setValues(prevState => ({ ...prevState, [name]: name == 'showPassword' ? !values.showPassword : value }));
  }

  function handleImgChange(event): void {
    values.imageURL = URL.createObjectURL(event.target.files[0]);
    values.imageFile = event.target.files[0];
    handleChange(event);
  }

  async function handleBlur({ target: { value, name } }): Promise<void> {
    let newErrors;
    if (value && validationSchemaKey) {
      newErrors = await validatePayload(values, validationSchemaKey);
    }
    setErrors({ ...errors, [name]: newErrors ? newErrors[name] : [] });
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
      {values.imageURL && (
        <Form.Header>
          <Form.ImageWrapper>
            <ImagePicker
              handleChange={handleImgChange}
              altText={imageAltText}
              imageURL={values.imageURL}
              name={imageInputName}
              errorFeedback={imageErrFeedbackHandler(errors)[imageInputName]}
            />
          </Form.ImageWrapper>
        </Form.Header>
      )}
      <Form.Body>
        {children(composeProps())}
        <Button isLoading={isLoading} type="submit" disabled={handleShouldDisableButton(composeProps())}>
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
  margin-bottom: ${__spacing.xLarge};
`;

Form.ImageWrapper = styled.div`
  position: relative;
  width: ${convertFromPixelsToRem(70)};
  height: ${convertFromPixelsToRem(70)};
  background: gray;
  border-radius: 50%;

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
`;

Form.Wrapper = styled.form`
  width: 100%;
`;

Form.ButtonWrapper = styled.div`
  margin-top: ${__spacing.medium};
`;

export default Form;
