import { create } from '@storybook/theming/create';
import { BRAND_PRIMARY } from '../src/settings/__color';

export default create({
  base: 'light',
  brandTitle: 'Utility Manager Custom Storybook',
  colorSecondary: BRAND_PRIMARY,
});
