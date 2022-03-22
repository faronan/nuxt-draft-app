export const useForm = () => {
  const playerName = useState('playerName', () => '')
  const position = useState('position', () => '')
  const belongs = useState('belongs', () => '')

  const updateFormValue =
    (playerName: Ref<string>, position: Ref<string>, belongs: Ref<string>) =>
    (inputPlayerName: string, inputPosition: string, inputBelongs: string) => {
      playerName.value = inputPlayerName
      position.value = inputPosition
      belongs.value = inputBelongs
    }

  return {
    playerName: readonly(playerName),
    position: readonly(position),
    belongs: readonly(belongs),
    updateFormValue: updateFormValue(playerName, position, belongs),
  }
}
