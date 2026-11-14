// 빌드할 때 화면 테마를 정한다(light 또는 dark).
const theme = process.env.MEMO_THEME
if (theme !== 'light' && theme !== 'dark') {
  console.error(`Error: MEMO_THEME build arg must be light or dark (got: ${theme === undefined || theme === '' ? 'empty' : theme})`)
  process.exit(1)
}
console.log(`theme ${theme}`)
