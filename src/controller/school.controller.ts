import express from 'express';
import SchoolModel from '../model/school.model';

const router = express.Router();

export type School = {
    name: string;
};

router.get('/', async (req, res) => { //req - 요청에 대한 정보 ,res - 응답에 관한 정보
    const schools: SchoolModel[] = await SchoolModel.findAll(); //데이터베이스에 있는걸 모두 불러옴findall
    return res.status(200).json(schools);
});

router.get('/:schoolId', async (req, res) => {
    const { schoolId } = req.params; // path variable
    if (!schoolId) { //id없으면 에러
        return res.status(400).json();
    }

    const schoolIdNumber: number = parseInt(schoolId, 10);
    //SchoolModel이나 null이옴 //findbypk(pk는 primaryKey)
    const school: SchoolModel | null = await SchoolModel.findByPk(schoolIdNumber);
    if (!school) {
        return res.status(404).json();
    }
    return res.status(200).json(school);
})

router.post('/', (req, res) => {
    const school = req.body as School; //body로 보내는 거는 특별함 용량이크거나 복잡함 // as School이면 type을 지정한거임
    if (!school) {
        return res.status(400).json();
    }

    SchoolModel.create({    //model에서 속성에 집어넣고 싶은걸 key:value 형태로 넣어줌 
        name: school.name,
    });

    return res.status(201).json();
})

export default router;