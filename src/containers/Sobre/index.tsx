import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './style'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Olá, meu nome é Pedro Antonio, tenho 23 anos e estou estudando para me
      tornar um desenvolvedor fullstack pela EBAC. Este é o meu projeto de
      portfólio, desenvolvido com React, TypeScript e Styled-Components. Além
      disso, tenho experiência em diversos projetos utilizando tecnologias como
      Vue.js, JavaScript e Node.js, realizando o versionamento dos projetos com
      Git.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=PedroAntoniodev&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=PedroAntoniodev&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
