"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// This would typically come from your API
const fetchPost = async (id: string) => {
  // Simulating API call
  return { id, content: "This is the content of post " + id }
}

export default function EditPost({ params }: { params: { id: string } }) {
  const [content, setContent] = useState("")
  const router = useRouter()

  useEffect(() => {
    fetchPost(params.id).then((post) => setContent(post.content))
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the updated data to your backend
    console.log("Updating post:", params.id, content)
    router.push("/")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit Post</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Textarea
            placeholder="What's happening?"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={4}
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/")}>
            Cancel
          </Button>
          <Button type="submit">Update</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

