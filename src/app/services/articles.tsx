export async function getArticles(params: string) {
    const res = await fetch(`http://127.0.0.1:1337/api${params}`)
    if (!res.ok) {
        throw new Error('Error')
    }
    const { data } = await res.json()
    return data
}