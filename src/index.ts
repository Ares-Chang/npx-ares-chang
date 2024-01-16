import colors from 'colors'
import { textSync } from 'figlet'
import { say } from 'cowsay'

export function AresChang() {
  console.log(colors.rainbow(textSync('Ares Chang', 'Cola')))
  console.log(colors.trap(textSync('Ares Chang')))
  console.log(colors.rainbow(textSync('Hello World!', 'Ghost')))

  console.log(colors.rainbow('OMG Rainbows!')) // rainbow
  console.log(colors.trap('Run the trap')) // Drops the bass

  console.log(colors.rainbow(say({
    text: '生而牛马，我很抱歉。',
    e: 'oO',
    T: 'U ',
  })))
}

AresChang()
