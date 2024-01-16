import { say } from 'cowsay'
import colors from 'colors'

export function AresChang() {
  console.log('Hello World!')
  console.log(colors.rainbow('OMG Rainbows!')) // rainbow
  console.log(colors.trap('Run the trap')) // Drops the bass

  console.log(colors.rainbow(say({
    text: '生而牛马，我很抱歉。',
    e: 'oO',
    T: 'U ',
  })))
}

AresChang()
