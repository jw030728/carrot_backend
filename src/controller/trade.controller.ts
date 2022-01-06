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

router.get('/articles', async (req, res) => {
    const articles: Article[] = await Article.findAll();
    return res.status(200).json(articles);
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