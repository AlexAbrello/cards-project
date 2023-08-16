import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import s from './checkbox.module.css'

export const CheckboxComponent = () => (
  <div className={s.wrapper}>
    <Checkbox.Root className={s.CheckboxRoot} defaultChecked>
      <Checkbox.Indicator className={s.CheckboxIndicator}>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
    <label className={s.Label} htmlFor="c1">
      Accept terms and conditions.
    </label>
  </div>
)
