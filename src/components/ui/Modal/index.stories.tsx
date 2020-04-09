import React from 'react';
import { text } from '@storybook/addon-knobs';
import { Modal } from '.';
import ModalCard from './ModalCard';
import Form from 'components/ui/Form';
import Input from 'components/ui/Input';
import TextAreaInput from 'components/ui/TextAreaInput';
import Dropdown, { DropdownItem } from 'components/ui/Dropdown';
import Icon from 'components/ui/Icon';
import { action } from '@storybook/addon-actions';
export default {
  component: Modal,
  title: 'components/ui/Modal',
};

const { Fragment } = React;
export const CreateCategory = () => (
  <Modal>
    <ModalCard cardTitle="Create New Category" handleToggleModal={action('Close icon is clicked')}>
      <Form submitButtonLabel="Create Category" handleSubmit={action('Handle Submit')}>
        {() => (
          <Fragment>
            <Input
              name="categoryName"
              title="Category Name"
              autoComplete="on"
              value={text('Category Name', '')}
              handleChange={e => true}
            />
            <TextAreaInput
              rows={6}
              name="categoryDescription"
              title="Category Description"
              value={text('TextArea', '')}
              handleChange={e => true}
            />
          </Fragment>
        )}
      </Form>
    </ModalCard>
  </Modal>
);

export const CreateParameter = () => (
  <Modal>
    <ModalCard cardTitle="Create New Parameter" handleToggleModal={action('Close icon is clicked')}>
      <Form submitButtonLabel="Create Parameter" handleSubmit={action('Handle Submit')}>
        {() => (
          <Fragment>
            <Input
              name="name"
              title="Name"
              autoComplete="on"
              value={text('Category Name', 'Energy Consumed')}
              handleChange={e => true}
            />
            <Dropdown>
              {({ handleClick }) => (
                <>
                  <DropdownItem onClick={handleClick} value={1}>
                    <Icon iconType="md-star" color="INFO"></Icon> Music
                  </DropdownItem>
                  <DropdownItem onClick={handleClick} value={2}>
                    Science & Technology
                  </DropdownItem>
                  <DropdownItem onClick={handleClick} value={3}>
                    Film & Animation
                  </DropdownItem>
                  <DropdownItem onClick={handleClick} value={4}>
                    Film
                  </DropdownItem>
                </>
              )}
            </Dropdown>
            <Input
              name="valueType"
              title="Unit Id"
              autoComplete="on"
              value={text('unitId', '-LrsZYnoW4YH4-6qsChk')}
              handleChange={e => true}
            />
          </Fragment>
        )}
      </Form>
    </ModalCard>
  </Modal>
);