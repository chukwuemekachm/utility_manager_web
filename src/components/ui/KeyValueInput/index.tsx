import * as React from 'react';
import styled from '@emotion/styled';
import Input, { SharedInputProps } from 'components/ui/Input';
import Icon from 'components/ui/Icon';
import InputQuickAction from 'components/ui/InputQuickAction';
import __spacing from 'settings/__spacing';
import { WHITE_SMOKE } from 'settings/__color';

interface KeyValueProps extends SharedInputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function KeyValueInput(props: KeyValueProps) {
  const { name, title, required, handleChange } = props;
  const [values, setValues] = React.useState<object[]>([{}]);
  function changeHandler(inputIdentifier: string) {
    return function(e) {
      const [index, keyrValue] = inputIdentifier.split('-');
      const newValues = [...values];
      const item = newValues[+index];
      if (keyrValue === 'key') {
        newValues[+index] = {
          [e.target.value]: Object.values(item)[0],
        };
      } else if (keyrValue === 'value') {
        newValues[+index] = {
          [Object.keys(item)[0]]: e.target.value,
        };
      }
      e.target.name = name;
      e.target.values = newValues;
      handleChange && handleChange(e);
      setValues(newValues);
    };
  }

  function addItemHandler(e) {
    setValues(prevState => [...prevState, {}]);
  }

  function removeItemHandler(index: number) {
    return function(e) {
      const newArr = values.slice(0, +index);
      setValues(newArr.concat(values.slice(+index + 1)));
    };
  }

  return (
    <Input.Container>
      <Input.Label required={required}>{title}</Input.Label>
      {values.map((element, index) => {
        return (
          <KeyValueInput.Wrapper key={index} className="controls-container">
            <KeyValueInput.InputContainer>
              <Input title="" name="" handleChange={changeHandler(`${index}-key`)} value={Object.keys(element)[0]} />
            </KeyValueInput.InputContainer>
            <KeyValueInput.InputContainer>
              <Input
                title=""
                handleChange={changeHandler(`${index}-value`)}
                value={(Object.values(element)[0] || '').toString() as string}
              />
            </KeyValueInput.InputContainer>
            {values.length > 1 && (
              <KeyValueInput.CancelButton onClick={removeItemHandler(+index)}>
                <Icon iconType="md-close" />
              </KeyValueInput.CancelButton>
            )}
          </KeyValueInput.Wrapper>
        );
      })}
      <InputQuickAction onClick={addItemHandler}>
        <Icon iconType="ios-add-circle-outline" color="BLUE" /> Add Item
      </InputQuickAction>
    </Input.Container>
  );
}
KeyValueInput.CancelButton = styled.div`
  margin-left: ${__spacing.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5%;
  &:hover {
    cursor: pointer;
    background-color: ${WHITE_SMOKE};
  }
`;
KeyValueInput.InputContainer = styled.div`
  margin-right: ${__spacing.xSmall};
  width: 45%;
`;
KeyValueInput.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
