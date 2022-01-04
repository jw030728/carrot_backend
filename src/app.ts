import express from 'express';  //js에서 많이 사용하는 서버 프레임워크 express
import { createServer, Server } from 'http';
import controller from './controller';
import database from './config/database';

const app = express();

//데이터베이스랑 모델이랑 똑같은지 아닌지 비교 다르면 맞춰주기
database.sync({
    alter: true, //구조가 다르면 내가 만든거 기준으로 강제로 맞춰버림(사용에 주의할것)
});

app.use(express.json());
app.use(controller);    //실행될때 controller를 씀

const server = createServer(app);
server.listen(process.env.PORT || 5000); //listen은 누가 접속하는지 기다리는 것