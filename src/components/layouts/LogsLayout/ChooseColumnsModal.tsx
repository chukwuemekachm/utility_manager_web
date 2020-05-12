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
import { MAX_COLUMNS_IN_TABLE } from 'utils/constants';

export interface ColumnType {
  children: string;
  value: string;
  checked: boolean;
}
interface ChooseColumnsModalProps {
  hideModal: (e) => void;
  handleSave: (currentSelectedColumns) => void;
  initialColumns: ColumnType[];
  initalDragAndDropValues: ColumnType[];
  filterColumns: (currentSearchValue) => (column, index?: number) => boolean;
}

export default function ChooseColumnsModal(props: ChooseColumnsModalProps) {
  const { hideModal, handleSave, initialColumns, initalDragAndDropValues, filterColumns } = props;

  const [columns, setColumns] = React.useState<ColumnType[]>(initialColumns);
  const [maxColumnHasBeenSelected, setMaxColumnSelected] = React.useState(false);
  const [dragAndDropValues, setDragAndDropValues] = React.useState<ColumnType[]>(initalDragAndDropValues);
  const [currentSelectedColumns, setCurrentSelectedColumns] = React.useState<ColumnType[]>(initalDragAndDropValues);
  const [currenSearchValue, setSearchValue] = React.useState('');

  const [filteredColumns, setFilteredColumns] = React.useState(initialColumns);

  React.useEffect(() => {
    setFilteredColumns(columns.filter(filterColumns(currenSearchValue)));
  }, [currenSearchValue, columns]);

  const onDragChange = (e, newValues: Extract<any, ColumnType>[], removedValue?: Extract<any, ColumnType>) => {
    if (removedValue) {
      const removedArr = (removedValue ? [removedValue] : []).map(col => ({
        ...col,
        checked: false,
      }));
      setColumns(prevState => [...prevState, ...removedArr]);
      setMaxColumnSelected(false);
    }
    setCurrentSelectedColumns([...newValues]);
  };

  const onSave = e => {
    e.preventDefault();
    handleSave(currentSelectedColumns);
  };
  const onMoveToDrag = () => {
    const foundColumns = columns.filter(column => column.checked);
    setDragAndDropValues(prevState => [...prevState, ...foundColumns]);
    setColumns(prevState => prevState.filter(column => !column.checked));
    setCurrentSelectedColumns(prevState => [...prevState, ...foundColumns]);
  };

  const onCheck = (e, checkedColumn) => {
    const newColumns = columns.map(column => {
      if (checkedColumn.value === column.value) {
        return {
          ...column,
          checked: !column.checked,
        };
      }
      return column;
    });
    const checkedCount = newColumns.reduce((prevValue, currentColumn) => prevValue + +currentColumn.checked, 0);
    setColumns(newColumns);
    setMaxColumnSelected(currentSelectedColumns.length + checkedCount >= MAX_COLUMNS_IN_TABLE);
  };

  const onSearchColumns = e => {
    setSearchValue(e.target.value);
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
                  handleChange={onSearchColumns}
                  iconLabel="md-search"
                  value={currenSearchValue}
                />
              </div>

              <div className="control-wrapper">
                <ul>
                  {filteredColumns.map((column, index) => (
                    <li key={index}>
                      <Checkbox
                        value={column.toString()}
                        checked={column.checked}
                        handleChange={e => onCheck(e, column)}
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
  min-height: 80vh;
  position: relative;
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
    position: absolute;
    bottom: 0;
    width: 100%;
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
    width: 45%;
  }
  .move {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.large};
    width: 10%;
    &:hover {
      cursor: pointer;
    }
    padding: 1em;
    > div {
      position: absolute;
      top: 40%;
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
