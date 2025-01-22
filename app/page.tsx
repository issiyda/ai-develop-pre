"use client"

import { useState } from "react"
import { Post } from "@/components/Post"
import { DeleteModal } from "@/components/DeleteModal"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Dummy data for demonstration
const initialPosts = [
  { id: "1", content: "Hello, X!", author: "User1", createdAt: "2023-05-01" },
  { id: "2", content: "This is a test post My name is Shogo Ishida", author: "User2", createdAt: "2023-05-02" },
]

export default function Home() {
  const [posts, setPosts] = useState(initialPosts)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const handleDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id))
    setDeleteId(null)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Posts</h2>
        <Button asChild>
          <Link href="/create">Create Post</Link>
        </Button>
      </div>
      {posts.map((post) => (
        <Post key={post.id} {...post} onDeleteClick={() => setDeleteId(post.id)} />
      ))}
      <DeleteModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={() => deleteId && handleDelete(deleteId)}
      />
    </div>
  )
}

