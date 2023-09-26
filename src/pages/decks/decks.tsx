import { useForm } from 'react-hook-form'

import {
  Body,
  Button,
  Cell,
  ControlledTextField,
  Head,
  HeadCell,
  Root,
  Row,
  SliderComponent,
  TabsComponent,
} from '@/components/ui'
import { CreateDeckComponent } from '@/components/ui/modals/create-deck'
import { Typography } from '@/components/ui/typography'
import { useGetDecksQuery } from '@/services/decks'

export const Decks = () => {
  const { data, isLoading } = useGetDecksQuery({
    itemsPerPage: 10,
  })

  const { control, handleSubmit } = useForm()

  if (isLoading) return <div>Loading...</div>

  return (
    <div style={{ width: '80%', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '30px 0 30px 0' }}>
        <Typography.H2>Decks List</Typography.H2>
        <CreateDeckComponent />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '30px 0 30px 0',
        }}
      >
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
        <Button variant={'secondary'} className={''}>
          <Typography.Subtitle2>Clear Filter</Typography.Subtitle2>
        </Button>
      </div>
      <Root>
        <Head>
          <Row>
            <HeadCell>Name</HeadCell>
            <HeadCell>Cards</HeadCell>
            <HeadCell>Last Update</HeadCell>
            <HeadCell>Author by</HeadCell>
          </Row>
        </Head>
        <Body>
          {data?.items.map(deck => {
            return (
              <Row key={deck.id}>
                <Cell>{deck.name}</Cell>
                <Cell>{deck.cardsCount}</Cell>
                <Cell>{new Date(deck.updated).toLocaleString('en-GB')}</Cell>
                <Cell>{deck.author.name}</Cell>
              </Row>
            )
          })}
        </Body>
      </Root>
    </div>
  )
}
