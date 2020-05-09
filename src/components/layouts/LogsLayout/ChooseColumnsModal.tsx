import * as React from 'react';
import styled from '@emotion/styled';
import { Modal } from 'components/ui/Modal';
import ModalCard from 'components/ui/Modal/ModalCard';
import Icon from 'components/ui/Icon';
import Button from 'components/ui/Button';
import Input from 'components/ui/Input';
import { FilledCheckBox as Checkbox } from 'components/ui/Checkbox';
import { fontSizes } from 'settings/__fonts';
import Heading from 'components/ui/Heading';
import { GAINS_BORO, BRAND_PRIMARY_HOVER } from 'settings/__color';
import DragAndDropCompnent from 'components/ui/DragAndDropCompnent';

interface ChooseColumnsModalProps {
  hideModal: (e) => void;
  handleSave: (currentSelectedColumns) => void;
}

export default function ChooseColumnsModal(props: ChooseColumnsModalProps) {
  const { hideModal, handleSave } = props;
  type ColumnType = {
    children: string;
    value: string;
    checked: boolean;
  };
  const initalColumns: ColumnType[] = [
    { children: 'Energy', value: 'id1', checked: false },
    { children: 'Power Rating', value: 'id2', checked: false },
    { children: 'Energy Consumed	', value: 'id3', checked: false },
    { children: 'Engine Speed', value: 'id4', checked: false },
    { children: 'Energy 1', value: 'id5', checked: false },
    { children: 'Energy 2', value: 'id6', checked: false },
    { children: 'Energy 3	', value: 'id7', checked: false },
    { children: 'Engine Speed 2', value: 'id8', checked: false },
    { children: 'Energy 4', value: 'id8', checked: false },
    { children: 'Energy 5', value: 'id9', checked: false },
  ];

  const [columns, setColumns] = React.useState<ColumnType[]>(initalColumns);
  const [maxColumnHasBeenSelected, setMaxColumnSelected] = React.useState(false);
  const [dragAndDropValues, setDragAndDropValues] = React.useState<ColumnType[]>([]);
  const [currentSelectedColumns, setCurrentSelectedColumns] = React.useState<ColumnType[]>([]);

  const onDragChange = (e, newValues: Extract<any, ColumnType>[], removedValue?: Extract<any, ColumnType>) => {
    console.log('old=>', dragAndDropValues);
    console.log('new=>', newValues);

    if (removedValue) {
      const removedArr = (removedValue ? [removedValue] : []).map(col => ({
        ...col,
        checked: false,
      }));
      console.log('removed', removedArr, removedValue);
      setCurrentSelectedColumns([...newValues]);
      setColumns(prevState => [...prevState, ...removedArr]);
      setMaxColumnSelected(false);
    }
  };

  const onSave = e => {
    e.preventDefault();
    console.log(currentSelectedColumns);
    handleSave(currentSelectedColumns);
  };
  const onMoveToDrag = () => {
    const foundColumns = columns.filter(column => column.checked);
    setDragAndDropValues(prevState => [...prevState, ...foundColumns]);
    setColumns(prevState => prevState.filter(column => !column.checked));
    setCurrentSelectedColumns(prevState => [...prevState, ...foundColumns]);
  };

  const onCheck = (e, index) => {
    const newColumns = [...columns];
    newColumns[index].checked = !newColumns[index].checked;
    const checkedCount = newColumns.reduce((prevValue, currentColumn) => prevValue + +currentColumn.checked, 0);
    setColumns(newColumns);
    console.log('currentSelectedColumns->', currentSelectedColumns);
    setMaxColumnSelected(currentSelectedColumns.length + checkedCount >= 5);
  };
  return (
    <Modal>
      <ModalCard size="NORMAL" cardTitle="Customize Columns" handleToggleModal={hideModal}>
        <ChooseColumnsModal.Container>
          <div className="header-wrapper">
            <Heading align="center">Pick a parameter and move to the right</Heading>
          </div>

          <ChooseColumnsModal.Wrapper>
            <div className="left">
              <div className="first-item">
                <Input
                  placeholder="Find parameter..."
                  name=""
                  autoComplete="off"
                  title=""
                  handleChange={() => console.log('Finding Params...')}
                  iconLabel="md-search"
                />
              </div>

              <div className="control-wrapper">
                <ul>
                  {columns.map((column, index) => (
                    <li key={index}>
                      <Checkbox
                        value={column.toString()}
                        checked={column.checked}
                        handleChange={e => onCheck(e, index)}
                        disabled={maxColumnHasBeenSelected && !column.checked}
                      >
                        {column.children}
                      </Checkbox>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="move">
              <div>
                <Icon
                  handleClick={onMoveToDrag}
                  iconType="ios-arrow-dropright-circle"
                  size="LARGE"
                  color="BLUE"
                  hoverColor={BRAND_PRIMARY_HOVER}
                ></Icon>
              </div>
            </div>
            <div className="right">
              <div className="first-item"></div>
              <div className="control-wrapper">
                <DragAndDropCompnent
                  onChange={onDragChange}
                  maxHeight="400px"
                  defaultDisplayObjs={dragAndDropValues}
                ></DragAndDropCompnent>
              </div>
            </div>
          </ChooseColumnsModal.Wrapper>

          <div className="actions">
            <div className="button-wrapper">
              <Button handleClick={hideModal} isLoading={false} disabled={false} inverted>
                Cancel
              </Button>
            </div>
            <div className="button-wrapper">
              <Button isLoading={false} disabled={false} handleClick={onSave}>
                Save
              </Button>
            </div>
          </div>
        </ChooseColumnsModal.Container>
      </ModalCard>
    </Modal>
  );
}

ChooseColumnsModal.Container = styled.div`
  width: 100%;
  height: 100%;
  .header-wrapper {
    margin-bottom: 6%;
  }

  .actions {
    padding-top: 4%;
    margin-bottom: 40px;
    position: relative;
    border-top: 0.75px solid ${GAINS_BORO};
    display: flex;
    justify-content: flex-start;
    .button-wrapper {
      width: 20%;
      &:first-of-type {
        margin-right: 20px;
      }
    }
  }

  .first-item {
    height: 3.5em;
  }
`;
ChooseColumnsModal.Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2em;
  .left,
  .right,
  .move {
    flex: 5;
  }
  .move {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.large};
    flex: 1;
    &:hover {
      cursor: pointer;
    }
  }

  .left,
  .right {
    ul {
      margin: 0;
      max-height: 400px;
      overflow-y: auto;
      list-style: none;
      padding-left: 0;

      li {
        margin-bottom: 8px;
      }
    }
  }
  .control-wrapper {
    margin-top: 10%;
  }
`;
