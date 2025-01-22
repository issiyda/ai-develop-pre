import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import Link from "next/link"

interface PostProps {
  id: string
  content: string
  author: string
  createdAt: string
  onDeleteClick: () => void
}

export function Post({ id, content, author, createdAt, onDeleteClick }: PostProps) {
  return (
    <Card className="mb-4">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={`https://avatar.vercel.sh/${author}`} />
          <AvatarFallback>{author[0]}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{createdAt}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline" size="icon" asChild>
          <Link href={`/edit/${id}`}>
            <Pencil className="h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="icon" onClick={onDeleteClick}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

