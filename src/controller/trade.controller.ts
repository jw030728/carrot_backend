// /trade로 시작하는 경로 처리
import express from "express";
import Article from "../model/article.model";

type NewArticle = {
    id: string;
    title: string;
    description: string;
    image: string;
    location: string;
    price: number;
    isAdjustable: boolean;
}

const router = express.Router();

router.get('/:articles/:articleId', async (req, res) => {
    const { articleId } = req.params;
    if (!articleId) {
        return res.status(400).json();
    }
    const articleIdNumber: number = parseInt(articleId, 10);
    const article: Article | null = await Article.findByPk(articleIdNumber);
    // const article: Article | null = await Article.findOne({
    //     where:{
    //         id:articleIdNumber,
    //     },
    // });
    if (!article) {
        return res.status(404).json();
    }
    return res.status(200).json(article);
})

router.get('/articles', async (req, res) => {
    const { location } = req.query;
    if (location) {
        const articles = await Article.findAll({
            where: {
                location: location, //location: "@@시"같은거 말고 location으로 하면 입력된거 기준으로 댐
            },
        });
        return res.status(200).json(articles);
    }
    else {
        const articles: Article[] = await Article.findAll();
        return res.status(200).json(articles);
    }
});

router.post('/articles', async (req, res) => {
    const article = req.body as NewArticle;
    if (!article) {
        return res.status(400).json();
    }

    const article2 = await Article.create({
        title: article.title,
        description: article.description,
        image: article.image,
        location: article.location,
        price: article.price,
        isAdjustable: article.isAdjustable,
    })

    return res.status(201).json({
        id: article.id,
    });
})

export default router;