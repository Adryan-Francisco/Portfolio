import { Portfolio } from "@/components/portfolio"
import { getContent } from "@/lib/content"

export default function Home() {
  return <Portfolio content={getContent("pt")} />
}
