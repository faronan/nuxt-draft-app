import { database } from '~/plugins/firebase'
import { ref as firebaseRef, set } from 'firebase/database'
import { iconInterface, teamInterface } from '../interfaces/teamInterfaces'

export const addTeam = (
  teamId: number,
  teamName: string,
  icon: iconInterface
) => {
  const team: teamInterface = {
    teamId: teamId,
    teamName: teamName,
    icon: {
      src: icon.src,
      alt: icon.alt,
    },
    players: [],
  }

  //TODO: roomIdの割り当て
  const roomId = 0
  set(firebaseRef(database, `rooms/${roomId}/teams/${teamId}/`), team)
}
