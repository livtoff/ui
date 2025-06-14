export const styles = () => import('./src/style.css');

// Plugins
import i18n from './src/plugins/i18n.ts';
// Layouts
import AuthSimpleLayout from './src/layouts/auth/AuthSimpleLayout.vue';
import AppLayout from './src/layouts/app/AppLayout.vue';
import SettingsLayout from './src/layouts/settings/SettingsLayout.vue';
// Composables
import { createLivtoffApp } from './src/composables/createLivtoffApp.ts';
import { useAppearance } from './src/composables/useAppearance.ts';
import { useInitials } from './src/composables/useInitials.ts';
import { useLanguage } from './src/composables/useLanguage.ts';
// Primitives
import Button from './src/components/ui/Button/Button.vue';
import Input from './src/components/ui/Input/Input.vue';
import Checkbox from './src/components/ui/Checkbox/Checkbox.vue';
import Label from './src/components/ui/Label/Label.vue';
import Separator from './src/components/ui/Separator/Separator.vue';
// Components
import InputError from './src/components/InputError.vue';
import TextLink from './src/components/TextLink.vue';
import DeleteUser from './src/components/DeleteUser.vue';
import HeadingSmall from './src/components/HeadingSmall.vue';
import Heading from './src/components/Heading.vue';
import AppearanceTabs from './src/components/AppearanceTabs.vue';
import PlaceholderPattern from './src/components/PlaceholderPattern.vue';
export {
  // Plugins
  i18n,
  // Layouts
  AuthSimpleLayout,
  AppLayout,
  SettingsLayout,
  // Composables
  createLivtoffApp,
  useAppearance,
  useInitials,
  useLanguage,
  // Primitives
  Button,
  Input,
  Checkbox,
  Label,
  Separator,
  // Components
  InputError,
  TextLink,
  DeleteUser,
  HeadingSmall,
  Heading,
  AppearanceTabs,
  PlaceholderPattern,
};
