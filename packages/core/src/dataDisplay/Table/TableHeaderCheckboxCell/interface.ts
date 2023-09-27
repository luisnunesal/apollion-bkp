import { CheckboxInterface } from '../../../form/Checkbox';
import { BgColorsTypes } from '../../../themes/Colors';

export interface TableHeaderCheckboxCellInterface {
  children: CheckboxInterface['label'];
  bgColor: BgColorsTypes;
}
