import { database } from '~/plugins/firebase'
import { ref as firebaseRef, update } from 'firebase/database'
import { playerInterface, teamInterface, useTeams } from './useTeams'

export const selectPlayer = (
  teamId: number,
  playerName: string,
  position: string,
  belongs: string
) => {
  const { getTeamById } = useTeams()
  const team = getTeamById(teamId)

  const player: playerInterface = {
    playerName: playerName,
    position: position,
    belongs: belongs,
  }
  const players =
    team.players.length > 1
      ? [...team.players.slice(0, team.players.length - 1), player]
      : [player]
  const postData: teamInterface = {
    ...team,
    players: players,
  }

  //TODO: roomIdの割り当て
  const roomId = 0
  update(firebaseRef(database, `rooms/${roomId}/teams/${teamId}/`), postData)
}
