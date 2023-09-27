export const defaultCode = `
const DropdownExample = () => {
  return (
    <Dropdown
      full
      options={
        [
          { icon: <Icon name="menuBars" />, title: 'Compacto' },
          { icon: <Icon name="menuBars" />, title: 'Padrão' },
          { icon: <Icon name="menuBars" />, title: 'Expandido' },
        ]
      }
    >
      <Button
        size="small"
        text="Dropdown"
        iconPosition="right"
        icon={<Icon name="thumbsUp" />} />
    </Dropdown>
  )
}

const ButtonCountExample = () => {
  const [count, setCount] = React.useState(0)

  const { showNotification } = useNotification()

  React.useEffect(() => {
    if (count > 10) {
      showNotification({
        title: "KKramba",
        message: "Você é mesmo um desocupado"
      })
    }
  }, [count])

  return (
    <Button size="small" onClick={() => setCount(p => p + 1)}>
      You Clicked {count} times.
    </Button>
  )
}

const ModalExample = () => (
  <Modal
    title='Modal Title'
    icon={<Icon name="alertInfo" />}
    tagline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    trigger={<Button size="small" text="Exibir Modal" iconPosition="right" icon={<Icon name="arrowRight" />} />}
  >
    <Flex alignItems="center">
      <Image src="https://avatars2.githubusercontent.com/u/19891059?s=460&u=98b1f0d4b0207ad22899b054332e4e87654bcaa3&v=4" />
    </Flex>
  </Modal>
)

render(
  <Flex gap={8}>
    <Flex flexDirection="row" gap="medium" >
      <DropdownExample />
      <ButtonCountExample />
      <ModalExample />
    </Flex>

    <Flex gap={10} flexDirection="row">
      <Icon name='alertInfo' />
      <Icon name='attention' />
      <Icon name='attention' color="warning.active" />
    </Flex>

    <Typography variant='h1' color="danger">Hello World!</Typography>
  </Flex>
)
`;
