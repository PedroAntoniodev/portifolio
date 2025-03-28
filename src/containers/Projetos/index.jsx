import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto
          titulo="Lista de Tarefas"
          descricao="Aplicação feita com Vue.js para gerenciamento de tarefas"
          linkGithub="https://github.com/PedroAntoniodev/tudo-vue"
          linkVercel="https://tudo-vue-pi.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="Calculadora de IMC"
          descricao="Aplicação feita com React + Vite para calcular o imc"
          linkGithub="https://github.com/PedroAntoniodev/calculadora_imc"
          linkVercel="https://calculadora-imc-rosy-psi.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="Ebac talks"
          descricao="Landing page ficticia sobre um evento com contagem e animações"
          linkGithub="https://github.com/PedroAntoniodev/ebac_talks"
          linkVercel="https://ebac-talks-six-sable.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="Sorteador de números"
          descricao="Sorteador de números utilizando Javascript + Grunt"
          linkGithub="https://github.com/PedroAntoniodev/soteador_grunt"
          linkVercel="https://soteadorgruntpedro.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="Clone Disney+"
          descricao="Uma landing page cloando o antigo site do disney+"
          linkGithub="https://github.com/PedroAntoniodev/clone_disney"
          linkVercel="https://clone-disney-umber.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          titulo="Minha Laguna"
          descricao="Landing page sobre a minha cidade Laguna utilizando bootstrap"
          linkGithub="https://github.com/PedroAntoniodev/minha_laguna"
          linkVercel="https://minha-laguna.vercel.app/"
        />
      </li>
    </Lista>
  </section>
)

export default Projetos
