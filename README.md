# WeTube

Cloning Youbute with Vanilla and NodeJS

backend
express
middleware
morgan: logging middleware
helmet: 보안 middleware
cookie-parser: cookie를 전달 받아서 사용할 수 잇도록 해주는 미들웨어
body-parser: 사용자가 웹사이트로 전달하는 정보들을 검사하는 미들웨어
request정보에서 form이나 json형태로 된 body를 검사.
Pug: express에서 view를 다루는 방식 중 하나.

export /export default 차이
import할 때 
  export: import {ex)router} from './router';
  export default: import router from './router';

multer: middleware에서 file업로드 시 url을 반환.

MVC
M: data
V: how does the data look
C: Function that looks for the data

## Pages:

- [ ] Home
- [x] Join
- [x] Login
- [x] Search
- [ ] User Detail
- [ ] Edit Profile
- [ ] Change Password
- [ ] Upload
- [ ] Video Detail
- [ ] Edit Video
- [ ] 