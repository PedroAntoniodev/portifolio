import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

import { Card, LinkBotao } from './style'

export type Props = {
  titulo: string
  descricao: string
  linkGithub: string
  linkVercel: string
}

const Projeto = ({ titulo, descricao, linkGithub, linkVercel }: Props) => (
  <Card>
    <Titulo>{titulo}</Titulo>
    <Paragrafo tipo="secundario">{descricao}</Paragrafo>
    <LinkBotao href={linkGithub} target="_blank" rel="noopener noreferrer">
      Visualizar no Github
    </LinkBotao>
    <LinkBotao href={linkVercel} target="_blank" rel="noopener noreferrer">
      Visualizar na Vercel
    </LinkBotao>
  </Card>
)
export default Projeto
