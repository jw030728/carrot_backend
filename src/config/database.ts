import { Sequelize } from "sequelize-typescript";
import path from 'path';

const sequelize = new Sequelize('carrot', 'root', '1234', { //new Sequelize가 연결을 해줌 '이름''id''비번'
    dialect: 'mysql',       // database종류
    models: [path.join(__dirname, '../model')], //모델폴더에 있는걸 추가
});

export default sequelize;