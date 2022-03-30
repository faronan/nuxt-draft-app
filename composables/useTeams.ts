export interface iconInterface {
  src: string
  alt: string
}
export interface teamInterface {
  teamId: number
  teamName: string
  icon: iconInterface
  playerName: string
  position: string
  belongs: string
}

export const useTeams = () => {
  const teamIds = useState<number[]>('teamIds', () => [])
  const teamHash = useState<{ key: number; value: teamInterface }>(
    'teamHash',
    () => {}
  )

  const createTeam = (
    teamId: number,
    teamName: string,
    icon: iconInterface
  ) => {
    const team: teamInterface = {
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
    (
      teamIds: Ref<number[]>,
      teamHash: Ref<{ key: number; value: teamInterface }>
    ) =>
    (inputTeamName: string, inputIcon: iconInterface) => {
      const teamId = teamIds.value.length + 1
      teamIds.value = [...teamIds.value, teamId]
      teamHash.value = {
        ...teamHash.value,
        [teamId]: createTeam(teamId, inputTeamName, inputIcon),
      }
    }

  const updateTeam =
    (teamHash: Ref<{ key: number; value: teamInterface }>) =>
    (
      teamId: number,
      inputPlayerName: string,
      inputPosition: string,
      inputBelongs: string
    ) => {
      const team = teamHash.value[teamId]
      teamHash.value = {
        ...teamHash.value,
        [teamId]: {
          ...team,
          playerName: inputPlayerName,
          position: inputPosition,
          belongs: inputBelongs,
        },
      }
    }

  return {
    teamIds: readonly(teamIds),
    teamHash: readonly(teamHash),
    addTeam: addTeam(teamIds, teamHash),
    updateTeam: updateTeam(teamHash),
  }
}
