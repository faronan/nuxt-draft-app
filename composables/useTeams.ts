export interface iconType {
  src: string
  alt: string
}
export interface teamType {
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

  const createTeam = (teamId: number, teamName: string, icon: iconType) => {
    const team: teamType = {
      teamId: teamId,
      teamName: teamName,
      icon: icon,
      playerName: '',
      position: '',
      belongs: '',
    }
    return team
  }

  const addTeam =
    (teamIds: Ref<number[]>, teamHash: Ref<{ key: number; value: teamType }>) =>
    (inputTeamName: string, inputIcon: iconType) => {
      const teamId = teamIds.value.length + 1
      teamIds.value = [...teamIds.value, teamId]
      teamHash.value = {
        ...teamHash.value,
        [teamId]: createTeam(teamId, inputTeamName, inputIcon),
      }
    }

  return {
    teamIds: readonly(teamIds),
    teamHash: readonly(teamHash),
    addTeam: addTeam(teamIds, teamHash),
  }
}
