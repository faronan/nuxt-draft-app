import { teamInterface } from './interfaces/teamInterfaces'

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
