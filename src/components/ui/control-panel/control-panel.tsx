import s from './control-panel.module.scss'

import { DeleteIcon } from '@/assets/icons/delete-icon.tsx'
import { Button, SliderComponent, TabsComponent } from '@/components/ui'
import { SearchComponent } from '@/components/ui/search-component/search-component.tsx'
import { Typography } from '@/components/ui/typography'

export const ControlPanel = () => {
  return (
    <div className={s.wrapper}>
      <SearchComponent label={'Search Deck by Name'} />
      <div style={{ display: 'flex' }}>
        <TabsComponent>
          <Typography.Body2>My Decks</Typography.Body2>
          <Typography.Body2>All Decks</Typography.Body2>
        </TabsComponent>
      </div>
      <SliderComponent />
      <Button variant={'secondary'}>
        <div style={{ display: 'flex' }}>
          <DeleteIcon />
          <div style={{ marginLeft: '10px' }}>
            <Typography.Subtitle2>Clear Filter</Typography.Subtitle2>
          </div>
        </div>
      </Button>
    </div>
  )
}
