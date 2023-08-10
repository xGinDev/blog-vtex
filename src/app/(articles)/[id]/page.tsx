import { getArticles } from "@/app/services/articles";
import { formatDate } from "@/app/services/formatDate";
import ReactMarkdown from 'react-markdown'

export default async function InfoArticle() {
    const articles = await getArticles('/articles/1')
    console.log("Arti", articles);

    const { title, description, createdAt } = articles.attributes

    return (
        <>
            <div className="text-white-600 max-w-screen-xl m-auto">
                <div className="">
                    <h1 className="font-semibold text-xs lg:text-5xl">{title}</h1>
                    <span>Publicado: {formatDate(createdAt)}</span>
                    <p className="leading-10"><ReactMarkdown>
                        {description}
                    </ReactMarkdown></p>
                </div>
            </div>
        </>
    );
}
