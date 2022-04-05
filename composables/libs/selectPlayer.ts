import { database } from '~/plugins/firebase'
import { ref as firebaseRef, update } from 'firebase/database'
import { useTeams } from '../useTeams'
import { playerInterface, teamInterface } from '../interfaces/teamInterfaces'

export const selectPlayer = (
  teamId: number,
  playerName: string,
  position: string,
  belongs: string
) => {
  const { teamsState } = useTeams()
  const team = teamsState.value.find((t: teamInterface) => t.teamId == teamId)

  const player: playerInterface = {
    playerName: playerName,
    position: position,
    belongs: belongs,
  }
  const players = team.players ? [...team.players, player] : [player]
  const postData: teamInterface = {
    ...team,
    players: players,
  }

  //TODO: roomIdの割り当て
  const roomId = 0
  update(firebaseRef(database, `rooms/${roomId}/teams/${teamId}/`), postData)
}
