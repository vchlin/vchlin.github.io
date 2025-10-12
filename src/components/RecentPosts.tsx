export default function RecentPosts() {
  const posts = [
    {
      title: "Coming Soon",
      date: "October 10, 2025",
      excerpt: "WIP"
    },
    {
      title: "Coming Soon",
      date: "October 5, 2025",
      excerpt: "WIP"
    },
    {
      title: "Coming Soon",
      date: "September 28, 2025",
      excerpt: "WIP"
    },
    {
      title: "Coming Soon",
      date: "September 20, 2025",
      excerpt: "WIP"
    },
    {
      title: "Coming Soon",
      date: "September 15, 2025",
      excerpt: "WIP"
    },
    {
      title: "Coming Soon",
      date: "September 8, 2025",
      excerpt: "WIP"
    },
  ]

  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-6">Recent Posts</h3>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 hover:border-gray-500 dark:hover:border-gray-500 transition-colors"
          >
            <h4 className="text-lg font-medium mb-1">{post.title}</h4>
            <p className="text-gray-500 dark:text-gray-500 text-sm mb-2">
              {post.date}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
