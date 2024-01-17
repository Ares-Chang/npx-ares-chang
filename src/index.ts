import chalk from 'chalk'
import { textSync } from 'figlet'
import { say } from 'cowsay'

const log = console.log

interface FindMeItem {
  label: string
  url: string
}

const list: FindMeItem[] = [
  {
    label: 'Notes',
    url: 'https://areschang.top',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/Ares-Chang',
  },
  {
    label: 'NpmJS',
    url: 'https://www.npmjs.com/settings/areschang/packages',
  },
]

function findMe({ label, url }: FindMeItem) {
  return chalk.blue(`${label}: ${chalk.underline(url)}`)
}

export function AresChang() {
  log(textSync('Ares Chang'))

  log('可以在以下找到我:')

  list.forEach(obj => log(findMe(obj)))

  log(say({
    text: '生而牛马，我很抱歉。',
    e: 'oO',
    T: 'U ',
  }))

  log(chalk.red.underline('Happy every day!'))
  log(chalk.hex('#DEADED').bold('Goodbye!'))
}

AresChang()
