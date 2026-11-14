# 왕가네 메모

과제로 만든 작은 Node 서버입니다. 설치할 의존성이 없습니다.

| 경로 | 응답 |
| --- | --- |
| `GET /` | 소개 화면 |
| `GET /api/health` | `200 {"ok":true}` |
| `GET /api/info` | `{ time, uptimeSeconds, visits, hasApiKey }` |

## 배포 설정

- Dockerfile: `docker/Dockerfile` (빌드 컨텍스트는 루트)
- 실행 방식: 서버(server), 포트 `8080`
- 공개 경로: `/`
- 동작 확인: http `/api/health`
- 비밀값: `DEMO_API_KEY` (아무 값이나)
