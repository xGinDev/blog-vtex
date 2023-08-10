export async function getArticles() {
    const res = await fetch(`http://127.0.0.1:1337/api/articles`)
    if (!res.ok) {
        throw new Error('Error')
    }
    const { data } = await res.json()
    return data
}