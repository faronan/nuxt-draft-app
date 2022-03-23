export type iconType = {
  src: string
  alt: string
}
export const initialIcon: iconType = { src: '', alt: '' }

export const useInputTeamForm = () => {
  const teamName = useState<string>('teamName', () => '')

  const icon = useState<iconType>('icon', () => initialIcon)

  const updateFormValue =
    (teamName: Ref<string>, icon: Ref<iconType>) =>
    (inputTeamName: string, inputIcon: iconType) => {
      teamName.value = inputTeamName
      icon.value = inputIcon
    }

  return {
    teamName: readonly(teamName),
    icon: readonly(icon),
    updateFormValue: updateFormValue(teamName, icon),
  }
}
