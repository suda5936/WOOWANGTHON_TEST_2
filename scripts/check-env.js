// 빌드할 때 외부 API 키가 있어야 한다(번들에 넣는 값).
if (!process.env.VITE_API_KEY) {
  console.error('Error: VITE_API_KEY is required (set it as a build env)')
  process.exit(1)
}
console.log('env ok')
