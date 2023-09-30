interface AudioPlayer {
  audioVolume: number
  songDuration: number
  song: string
  details: Details
}

interface Details {
  author: string
  year: number
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
}

const { audioVolume, song, songDuration } = audioPlayer
const { author, year } = audioPlayer.details

console.log('audioVolume ', audioVolume)
console.log('song ', song)
console.log('songDuration ', songDuration)
console.log('author ', author)
console.log('year ', year)

export {}
