import { useState } from 'react';

export function useSearchDebounce(fetchData, params, ms = 800) {
  const [debounceId, setDebounceId] = useState<number>(0);

  const searchValue = value => {
    if (debounceId) {
      clearTimeout(debounceId);
    }
    const newId = +setTimeout(() => {
      fetchData({
        params: {
          ...params,
          searchValue: value,
        },
      });
    }, ms);
    setDebounceId(newId);
  };

  return [searchValue];
}

interface HandlerArgs {
  handleChange: (e) => void;

  handleBlur?: (e) => void;
  handleSearchValue?: (e) => void;
  endOfBlur?: (e) => void;
  selectedItemHandler?: (prevNode, newNode) => void;
  setValueHandler?: (prevValue, newValue) => void;
  endOfClick?: (e) => void;
}

interface DefaultArgs {
  active: boolean;
  node: any;
  itemSelected: boolean;
  value: any;
  searchText?: string;
}

interface ReturnedHandlers {
  onBlur: (e) => void;
  toggleActive: () => void;
  onKeyDown: (e) => void;
  onClear: (e) => void;
  handleClick: (e, selectedItemValue, node) => void;
  onSearchChange: (e) => void;
}
type ReturnedProps = [DefaultArgs, ReturnedHandlers, Function];
export function useDropdownSelectedNodeHandlers(
  name: string,
  defaults: DefaultArgs,
  handlers: HandlerArgs,
): ReturnedProps {
  const {
    handleChange,
    handleSearchValue,
    endOfBlur,
    selectedItemHandler,
    setValueHandler,
    endOfClick,
    handleBlur,
  } = handlers;
  const defaultValue = {
    active: defaults.active || false,
    node: defaults.node,
    itemSelected: defaults.itemSelected || false,
    value: defaults.value,
    searchText: defaults.searchText || '',
  };

  const [values, setValues] = useState(defaultValue);
  const handleClick = (e, selectedItemValue, node) => {
    e.preventDefault();

    setValues(prevState => ({ ...prevState, active: false }));
    let newValue = selectedItemValue;
    let newNode = node;
    if (selectedItemHandler) {
      newNode = selectedItemHandler(values.node, node);
    }

    if (setValueHandler) {
      newValue = setValueHandler(values.value, selectedItemValue);
    }

    e.target.name = name;
    e.target.value = newValue;

    handleChange(e);
    setValues(prevState => {
      return { ...prevState, itemSelected: true, value: newValue, node: newNode, searchText: '' };
    });
    endOfClick && endOfClick(e);
  };

  const onClear = e => {
    e.target.name = name;
    e.target.value = '';
    handleChange(e);
    setValues(prevState => ({ ...prevState, node: defaults.node, value: '', itemSelected: false, searchText: '' }));
  };

  const onBlur = e => {
    e.preventDefault();
    handleBlur && handleBlur(e);
    setTimeout(() => {
      endOfBlur && endOfBlur(e);
      setValues(prevState => ({ ...prevState, active: false }));
    }, 170);
  };

  const toggleActive = () => {
    setValues(prevState => ({ ...prevState, active: !prevState.active }));
  };

  const onKeyDown = e => {
    e.preventDefault();
    if (e.keyCode === 32 || e.keyCode === 13) {
      toggleActive();
    }
  };

  const onSearchChange = e => {
    e.preventDefault();
    const textValue = e.target.value;

    handleSearchValue && handleSearchValue(e);
    if (textValue.length) {
      setValues(prevState => ({ ...prevState, searchText: textValue, active: true }));
    } else {
      setValues(prevState => ({ ...prevState, searchText: textValue, active: false }));
    }
  };
  const returnHandlers = {
    onBlur,
    toggleActive,
    onKeyDown,
    onClear,
    handleClick,
    onSearchChange,
  };

  return [values, returnHandlers, setValues];
}
