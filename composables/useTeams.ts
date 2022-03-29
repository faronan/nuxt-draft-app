import { iconType, initialIcon } from './useInputTeamForm'

export type teamType = {
  teamId: number
  teamName: string
  icon: iconType
  playerName: string
  position: string
  belongs: string
}

export const useTeams = () => {
  const teamIds = useState<number[]>('teamIds', () => [])
  const teamHash = useState<{ key: number; value: teamType }>(
    'teamHash',
    () => {}
  )

  const createInitialTeam = (
    teamId: number,
    teamName: string,
    icon: iconType
  ) => {
    const initialTeam: teamType = {
      teamId: teamId,
      teamName: teamName,
      icon: initialIcon,
      playerName: '',
      position: '',
      belongs: '',
    }
    return initialTeam
  }

  // const teamId = useState<string>('teamName', () => -1)
  // const teamName = useState<string>('teamName', () => '')
  // const icon = useState<iconType>('icon', () => initialIcon)
  // const playerName = useState<string>('playerName', () => '')
  // const position = useState<string>('position', () => '')
  // const belongs = useState<string>('belongs', () => '')

  const addTeam =
    (teamIds: Ref<number[]>, teamHash: Ref<{ key: number; value: teamType }>) =>
    (inputTeamName: string, inputIcon: iconType) => {
      const teamId = teamIds.length
      teamIds.value = [...teamIds, teamId]
      teamHash.value = {
        ...teamHash,
        teamId: createInitialTeam(teamId, inputTeamName, inputIcon),
      }
    }

  return {
    teamIds: readonly(teamIds),
    teamHash: readonly(teamHash),
    addTeam: addTeam(teamIds, teamHash),
  }
}
