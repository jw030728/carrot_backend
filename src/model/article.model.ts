import {
    AllowNull,
    AutoIncrement,
    Column,
    DataType,
    Model,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

//@Table은 테이블에 매핑되는 녀석들이라고 해주는것
@Table
export default class Article extends Model {
    @PrimaryKey     //유일하게 식별할 수 있는 값이다.
    @AutoIncrement  //id없는거 만들어주는 것같은 걸 자동으로 해줌
    @Column //속성 값
    id: bigint;

    @AllowNull(false) //null 값을 허용하지 않음-(false)일때
    @Column(DataType.STRING(128))
    title: string;

    @AllowNull(false) //null 값을 허용하지 않음-(false)일때
    @Column(DataType.TEXT) //text는 많은 글자를 저장하고 싶을때
    description: string;

    @AllowNull(false) //null 값을 허용하지 않음-(false)일때
    @Column(DataType.STRING(2048))
    image: string;

    @AllowNull(false) //null 값을 허용하지 않음-(false)일때
    @Column(DataType.STRING)
    location: string;

    @AllowNull(false) //null 값을 허용하지 않음-(false)일때
    @Column(DataType.INTEGER)
    price: number;

    @AllowNull(false) //null 값을 허용하지 않음-(false)일때
    @Column(DataType.BOOLEAN)
    isAdjustable: boolean;
}
