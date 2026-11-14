// 과제용 작은 서버. Node 기본 모듈만 쓴다(설치할 의존성 없음).
const http = require('node:http')
const fs = require('node:fs')
const path = require('node:path')

const PORT = Number(process.env.APP_PORT) || 8080
const page = fs.readFileSync(path.join(__dirname, 'public', 'index.html'))
const startedAt = Date.now()
let visits = 0

function send(res, status, type, body) {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-store' })
  res.end(body)
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  if (req.method === 'GET' && url.pathname === '/') {
    visits += 1
    send(res, 200, 'text/html; charset=utf-8', page)
  } else if (req.method === 'GET' && url.pathname === '/api/health') {
    send(res, 200, 'application/json', JSON.stringify({ ok: true }))
  } else if (req.method === 'GET' && url.pathname === '/api/info') {
    send(
      res,
      200,
      'application/json',
      JSON.stringify({
        time: new Date().toISOString(),
        uptimeSeconds: Math.floor((Date.now() - startedAt) / 1000),
        visits,
        hasApiKey: Boolean(process.env.DEMO_API_KEY),
      }),
    )
  } else {
    send(res, 404, 'application/json', JSON.stringify({ error: 'not found' }))
  }
  console.log(`${req.method} ${url.pathname} ${res.statusCode}`)
})

server.listen(PORT, () => console.log(`listening on ${PORT}`))

process.on('SIGTERM', () => process.exit(0))
