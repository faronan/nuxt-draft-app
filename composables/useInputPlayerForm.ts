export const useInputPlayerForm = () => {
  const playerName = useState<string>('playerName', () => '')
  const position = useState<string>('position', () => '')
  const belongs = useState<string>('belongs', () => '')

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
