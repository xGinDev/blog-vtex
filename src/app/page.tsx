import ListArticles from "./(articles)/ListArticles";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-12">
      <ListArticles/>
    </main>
  )
}
