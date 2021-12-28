import express from 'express';  //js에서 많이 사용하는 서버 프레임워크 express
import { createServer, Server } from 'http';

const app = express();

const server = createServer(app);
server.listen(process.env.PORT || 5000); //listen은 누가 접속하는지 기다리는 것