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
  const teamsState = useState<teamInterface>('teamsState', () => [])

  const updateTeamState =
    (teamsStateValue: Ref<teamInterface[]>) => (teams: teamInterface[]) => {
      teamsStateValue.value = teams
    }

  return {
    teamsState: readonly(teamsState),
    updateTeamState: updateTeamState(teamsState),
  }
}
