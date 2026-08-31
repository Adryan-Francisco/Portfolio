import { existsSync } from "node:fs"
import path from "node:path"

import { resumeFile } from "@/lib/portfolio-data"

/**
 * O currículo é opcional: basta colocar o PDF em `public/` para o botão aparecer.
 * A checagem roda no servidor, durante a geração estática da página.
 */
export function getResumeHref(): string | null {
  const exists = existsSync(path.join(process.cwd(), "public", resumeFile))
  return exists ? `/${resumeFile}` : null
}
