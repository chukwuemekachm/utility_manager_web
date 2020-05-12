import * as React from 'react';
import styled from '@emotion/styled';
import Icon from 'components/ui/Icon';
import __color, { BRAND_PRIMARY_HOVER, WHITE_SMOKE, BRAND_PRIMARY } from 'settings/__color';

interface DisplayObjectProps {
  value: string;
  children: string;
}

interface DragAndDropProps {
  maxHeight: string;
  defaultDisplayObjs: DisplayObjectProps[];
  onChange: (e, newValues, removedItem?: Record<string, any>) => void;
}

export default function DragAndDrop(props: DragAndDropProps) {
  const compRef: React.RefObject<any> | null = React.useRef(null);
  const { defaultDisplayObjs, maxHeight, onChange } = props;

  const idToObjectMapper = defaultDisplayObjs.reduce(
    (prevColumn, current) => ({
      ...prevColumn,
      [current.value]: current,
    }),
    {},
  );
  const dragStartHandler = e => {
    e.target.classList.add('dragging');
  };
  const dragEndHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove('dragging');

    const container = e.target.parentElement;
    const draggableElements = [...container.querySelectorAll('.dragabble')];
    const newValues = draggableElements.map(element => ({
      value: element.dataset.value,
    }));
    onChange(
      e,
      newValues.map(item => idToObjectMapper[item.value]),
    );
  };

  function getDragAfter(container, y) {
    const draggableElements = [...container.querySelectorAll('.dragabble:not(.dragging)')];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        }
        return closest;
      },
      { offset: Number.NEGATIVE_INFINITY },
    ).element;
  }
  const dragOverHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    if (compRef && compRef.current) {
      const dragging = compRef.current.querySelector('.dragging');
      const container = e.currentTarget;

      const afterElement = getDragAfter(e.currentTarget, e.clientY);
      if (!afterElement) {
        container.appendChild(dragging);
      } else {
        container.insertBefore(dragging, afterElement);
      }
    }
  };

  const closeHandler = (e, index) => {
    e.preventDefault();
    const liElement = e.currentTarget.parentElement;

    const container = liElement.parentElement;
    const removedItem = idToObjectMapper[liElement.dataset.value];
    liElement.remove();
    const draggableElements = [...container.querySelectorAll('.dragabble')];
    const newValues = draggableElements.map(element => ({
      value: element.dataset.value,
    }));

    onChange(
      e,
      newValues.map(item => idToObjectMapper[item.value]),
      removedItem,
    );
  };

  return (
    <DragAndDrop.Wrapper maxHeight={maxHeight} ref={compRef}>
      <div>
        <ul className="container" onDragOver={dragOverHandler}>
          {defaultDisplayObjs.map((item, index) => (
            <li
              className="dragabble"
              key={index}
              draggable="true"
              onDragEnd={dragEndHandler}
              onDragStart={dragStartHandler}
              data-value={item.value}
            >
              <div className="dragabble-item">
                <div className="child-wrapper">{item.children}</div>

                <div className="icon-wrapper">
                  <Icon iconType="md-menu" color="WHITE" size="LARGE"></Icon>
                </div>
              </div>

              <div onClick={e => closeHandler(e, index)} className="close-icon-wrapper">
                <div>
                  <Icon iconType="md-close" size="LARGE"></Icon>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DragAndDrop.Wrapper>
  );
}

DragAndDrop.Wrapper = styled.div<Pick<DragAndDropProps, 'maxHeight'>>`
  .dragabble-item {
    margin: 0;
    list-style: none;

    margin-bottom: 3px;
    padding: 3%;
    color: white;
    background-color: ${BRAND_PRIMARY};
    border: 1px solid ${BRAND_PRIMARY_HOVER};
    cursor: grab;

    width: 90%;
    box-shadow: 0 0 5px ${WHITE_SMOKE};
    border-radius: 5px 5px;

    display: flex;
    align-items: center;
    .child-wrapper {
      flex: 7;
    }
    .icon-wrapper {
      justify-self: flex-end;
    }

    box-shadow: 0 0 5px ${WHITE_SMOKE};
  }

  .draggabble:active,
  .draggabble:focus {
    cursor: grabbing;
  }
  &:hover {
    /* cursor: pointer; */
  }
  .container {
    overflow-y: auto;
    max-height: ${props => props.maxHeight || 'auto'};
    margin-top: 0;
  }

  .dragging {
    opacity: 0.5;
    cursor: grabbing;
  }
  .dragging::selection {
    background-color: red;
  }

  ul.container li {
    display: flex;
  }

  .close-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    cursor: pointer;
  }
`;
