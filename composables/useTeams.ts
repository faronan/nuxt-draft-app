export interface iconInterface {
  src: string
  alt: string
}
export interface playerInterface {
  playerName: string
  position: string
  belongs: string
}
export interface teamInterface {
  teamId: number
  teamName: string
  icon: iconInterface
  players: playerInterface[]
}

export const useTeams = () => {
  const teamState = useState<teamInterface>('teamState', () => [])

  const getTeamById = () => (teamId: number) => {
    const team: teamInterface = teamState.value.find((t) => t.teamId == teamId)
    return team
  }

  const updateTeamState =
    (teamsState: Ref<teamInterface[]>) => (teams: teamInterface[]) => {
      teamsState.value = teams
    }

  return {
    teamState: readonly(teamState),
    getTeamById: getTeamById(),
    updateTeamState: updateTeamState(teamState),
  }
}
