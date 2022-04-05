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
