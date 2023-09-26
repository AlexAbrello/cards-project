import { useForm } from 'react-hook-form'

import s from './control-panel.module.scss'

import { Button, ControlledTextField, SliderComponent, TabsComponent } from '@/components/ui'
import { Typography } from '@/components/ui/typography'

export const ControlPanel = () => {
  const { control, handleSubmit } = useForm()

  return (
    <div className={s.wrapper}>
      <ControlledTextField
        name={'text'}
        type={'search'}
        control={control}
        placeholder={'input search'}
        style={{ width: '300px' }}
      />
      <div style={{ display: 'flex' }}>
        <TabsComponent label={'My Cards'} />
        <TabsComponent label={'All Cards'} />
      </div>
      <SliderComponent />
      <Button variant={'secondary'}>
        <Typography.Subtitle2>Clear Filter</Typography.Subtitle2>
      </Button>
    </div>
  )
}
