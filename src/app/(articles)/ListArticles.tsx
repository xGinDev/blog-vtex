import { getArticles } from "../services/articles";

const ListArticles = async () => {
    const articles = await getArticles()

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                articles.map(({ attributes, id }: any) => (
                    <div className="bg-white p-4 px-8 cursor-pointer">
                        <article className="flex max-w-xl flex-col items-start justify-between text-gray-600">
                            <div className="flex items-center gap-x-4 text-xs">
                                <p>{attributes.createdAt}</p>
                            </div>
                            <div className="group relative">
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <p>
                                        {attributes.title}
                                    </p>
                                </h3>
                                <p className="line-clamp-3 text-sm leading-6 text-gray-600">{attributes.mini_description}</p>
                            </div>
                            <div className="relative flex items-center gap-x-4">
                                <p>Ver más</p>
                            </div>
                        </article>
                    </div>
                ))
            }
        </div>
    )
}

export default ListArticles