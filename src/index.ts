import { say } from 'cowsay'

export function AresChang() {
  console.log('Hello World!')
  console.log('\x1B[31m%s\x1B[0m', '这是红色')
  console.log('\x1B[36m%s\x1B[0m', '这是青色')

  console.log(say({
    text: '生而牛马，我很抱歉。',
    e: 'oO',
    T: 'U ',
  }))
}

AresChang()
