import { Portfolio } from "@/components/portfolio"
import { getContent } from "@/lib/content"

export default function HomeEn() {
  return <Portfolio content={getContent("en")} />
}
