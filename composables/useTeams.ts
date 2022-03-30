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
  const teamState = useState<teamInterface>('teamState', () => [])

  const updateTeamState =
    (teamsState: Ref<teamInterface[]>) => (teams: teamInterface[]) => {
      teamsState.value = teams
    }

  return {
    teamState: readonly(teamState),
    updateTeamState: updateTeamState(teamState),
  }
}
