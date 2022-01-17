const arq = require('../arquivo')
const express = require('express')
const lgpd = express()

lgpd.use(express.json({extends:true}))

lgpd.get('/lgpd', (req, res)=>{
    //const data = arq.getAll('lgpd')
    res.send(`
    <header class="container">
    <img src="https://images2.imgbox.com/ff/a2/4E7MqDc6_o.jpeg" alt="Logo" />
    <nav>
      <ul class="menu">
        <li><a href="#senha">Senha</a></li>
        <li><a href="#dispositivos">Uso geral de dispositivos</a></li>
        <li><a href="#rotinas">Rotinas de auditoria</a></li>
        <li><a href="#boasPraticas">Boas práticas</a></li>
        <li><a href="#penalidades">Penalidades</a></li>
      </ul>
    </nav>
    <div id="busca">
      <form action="/search" class="search" method="get">
        <input class="text-search" placeholder="Pesquisar" />
      </form>
    </div>
  </header>
  <main class="content">
    <section class="content-text">
      <h1>Política de Segurança da Informação</h1>
      <p>
        A <span>TripHouse</span> fornece serviços de hospedagem móvel em
        espaços turísticos da região, que são agendados via telefonema e
        cadastrados em um sistema que permite aos administradores gerenciarem
        os dados.
      </p>
      <p>
        O sistema deverá implementar o SSL e sua configuração será
        administrada por um responsável na área de TI, obedecendo às normas de
        mercado como a ISO 27001 e ISO 27002.
      </p>
      <p>
        “A norma tem como foco os princípios de confidencialidade, integridade
        e disponibilidade da informação. A implementação da ISO 27001 busca
        garantir o compromisso com a proteção da informação, fornecendo às
        organizações um modelo de melhores práticas para identificar, analisar
        e implementar controles para gerenciar riscos de segurança da
        informação e proteger a confidencialidade, integridade e
        disponibilidade de dados essenciais aos negócios.”
      </p>
      <p>
        “O principal objetivo da ISO 27002 é estabelecer diretrizes e
        princípios gerais para iniciar, implementar, manter e melhorar a
        gestão de segurança da informação em uma organização. Isso também
        inclui a seleção, a implementação e o gerenciamento de controles,
        levando em conta os ambientes de risco encontrados na empresa.”
      </p>
      <p>
        Dados estratégicos da organização serão armazenados diariamente a fim
        de garantir a sua recuperação, sendo o backup realizado via iCloud,
        com o intuito de priorizar acesso e automatizar processos, alta
        segurança e escalabilidade.
      </p>
      <p>
        <span>Cliente -</span> O cliente pode ser qualquer pessoa que realiza
        um agendamento via atendimento telefônico e realiza o seu cadastro com
        dados pessoais no sistema interno da TripHouse.
      </p>
      <p>
        <span>Colaborador -</span> O colaborador é um funcionário da
        TripHouse, e quando contratado, é cadastrado no sistema como usuário e
        obtém uma conta para utilizar o sistema.
      </p>
      <p>
        <span>Comissão Interna -</span> A comissão interna é responsável pela
        averiguação de irregularidades que firam a PSI, e é composta por
        Gerente de TI, Diretor Administrativo e Gerente de Frota.
      </p>
      <p>
        A <span>TripHouse</span> implementa medidas e registros adequados que
        demonstram a conformidade com o Regulamento Geral de Proteção de Dados
        (UE) 2016/679 (o “GDPR”) e, portanto, podemos assumir a
        responsabilidade pelo processamento de seus dados pessoais. Respeitar
        os princípios do GDPR (legalidade, justiça e transparência, limitação
        da finalidade, minimização de dados, precisão, limitação de
        armazenamento, integridade e confidencialidade (segurança) e
        responsabilidade) é o objetivo principal em todas as nossas operações
        que envolvem o processamento de dados pessoais, bem como a segurança
        dos nossos clientes e colaboradores.
      </p>
      <div class="topicos">
        <h2 id="senha">1- Senhas e restrições de acesso</h2>
        <p>
          Após a contratação de um colaborador e o seu cadastro, ele receberá
          uma senha temporária de usuário, devendo ser alterada em seu
          primeiro acesso, para que possa realizar as suas atividades conforme
          seu cargo.
        </p>
        <p>
          O Colaborador é responsável por manter a confidencialidade da senha
          de acesso da sua conta, pela conformidade com os requisitos
          regulamentares, legais e estatutários relevantes para o seu setor.
          Para aumentar a segurança, a TripHouse oferece aos colaboradores a
          habilitação de autenticação dupla.
        </p>
        <p>
          Os colaboradores que por ventura estejam com problemas de acesso,
          deverão entrar em contato com a equipe administrativa.
        </p>
        <h2 id="dispositivos">
          2- Uso geral de dispositivos, incluindo uso da internet, instalação
          de softwares e acesso por dispositivos pessoais
        </h2>
        <p>
          Todo colaborador ao ser contratado ficará ciente do nível de serviço
          que será prestado, às normas e os procedimentos através de um
          treinamento e manual de boas práticas.
        </p>
        <p>
          Os gestores devem configurar os equipamentos, ferramentas e sistemas
          concedidos aos colaboradores com todos os controles necessários para
          cumprir os requerimentos de segurança estabelecidos por esta
          Política de Segurança da Informação (PSI), e pelas Normas de
          Segurança da Informação complementares. Além disso, planejar,
          implantar, fornecer e monitorar a capacidade de armazenagem,
          processamento e transmissão necessários para garantir a segurança
          requerida pelas áreas de negócio. Deverá também, assegurar que o
          equipamento esteja em ótimo estado, sendo assim, o funcionário não
          poderá realizar manutenção física ou lógica dos equipamentos que
          utiliza ou não. Esta medida evita que o usuário retire ou insira
          alguma peça importante de máquina que possa prejudicar os dados
          armazenados na máquina.
        </p>
        <p>
          A empresa deve realizar manutenção constante nos seus equipamentos
          (computadores, motorhome, celular etc) e os colaboradores
          responsáveis pela boa usabilidade do equipamento e devem zelar por
          tal, e dada as devidas precauções, trabalhar com toda segurança
          possível evitando depredação de qualquer natureza.
        </p>
        <p>
          Os funcionários serão orientados sobre a proibição do uso de
          equipamentos para realizarem qualquer tipo de armazenamento de dados
          pessoais, como imagens, músicas, etc, diminuindo assim o risco de
          implantação de algum arquivo que prejudique o equipamento e gere
          riscos para a empresa. Além disso, não será permitido que utilizem
          e-mail que não seja o empresarial, para que não deixe o equipamento
          vulnerável a ataques e ao acesso a informações sigilosas. Deve
          também ser cauteloso com a navegação indevida em sites de terceiros
          utilizando os equipamentos internos, e para melhor controle e
          segurança, diariamente será gerado relatórios contendo informações
          de acessos dos funcionários à internet.
        </p>
        <p>
          Somente colaboradores autorizados serão responsáveis pela instalação
          de software.
        </p>
        <p>
          Cada funcionário terá acesso (com limitações de acordo com o cargo)
          aos dispositivos e sistema interno, bases de dados e qualquer outro
          ativo de informação, por meio do seu login empresarial. Deverá
          também evitar a exposição dos arquivos que não sejam autorizados, a
          fim de não comprometer a segurança e restrição dos arquivos.
        </p>
        <p>
          Os usuários (logins) individuais de funcionários são de
          responsabilidade do próprio funcionário.
        </p>
        <p>
          Caso sejam notadas quaisquer vulnerabilidades causadas por um
          colaborador, caberá ao setor administrativo lidar e garantir a
          segurança dos demais ativos da empresa.
        </p>
        <h2 id="rotinas">3- Rotinas de auditoria</h2>
        <p>
          Para reduzir os riscos de danos aos ativos, será realizada com uma
          periodicidade de duas auditorias internas no ano. Sendo assim, os
          responsáveis pela auditoria, deverão gerar e manter as trilhas para
          auditoria com nível de detalhe suficiente, cumprindo os requisitos
          necessários para rastrear possíveis falhas e fraudes.
        </p>
        <h2 id="boasPraticas">
          4- Boas práticas de uso do e-mail corporativo
        </h2>
        <p>
          O e-mail corporativo é propriedade da companhia, assim, caso
          necessário, as informações que nele circulam podem ser acompanhadas
          pelo gestor. O domínio próprio também possibilita a inserção de
          sistemas de segurança contra vírus e invasão por hackers.
        </p>
        <p>
          Será realizado um monitoramento periódico para identificar a má
          utilização da ferramenta, limitando o uso indiscriminado,
          reservando-a unicamente para troca de mensagens corporativas.
        </p>
        <p>
          Caso o colaborador utilize e-mails de forma indevida, receberá as
          penalidades cabíveis.
        </p>
        <h2 id="penalidades">5- Penalidades</h2>
        <p>
          O não comprimento dos pontos apresentados nessa PSI poderá implicar
          na aplicação de sanções administrativas, cíveis e penais previstas
          na legislação em vigor que regule ou venha regular a matéria.
        </p>
        <p>
          As penalidades administrativas serão aplicadas após a sua devida
          apuração em processo administrativo disciplinar, sendo observados
          critérios de gravidade e reincidência dos atos de violação
          cometidos.
        </p>
        <p>
          Incentivamos que todos nossos colaboradores registrem e/ou
          comuniquem qualquer irregularidade que indique uma violação dos
          pontos apresentados nesta PSI. Vale ressaltar que, denúncias
          realizadas de má-fé não serão toleradas, e os responsáveis por esta
          sofrerá as sanções cabíveis.
        </p>
        <p>
          O colaborador que compactuar com irregularidades que violem as
          normas propostas pela empresa através da PSI, será penalizado assim
          como aos que não fizerem o comprimento.
        </p>
        <p>
          Por fim, as infrações que violem as normas que compõem a PSI devem
          ser analisadas pelo gestor, que comunicará imediatamente à Comissão
          Interna para fins de determinação da apuração das eventuais
          responsabilidades dos funcionários envolvidos.
        </p>
      </div>
    </section>
  </main>
    `)
})

module.exports = lgpd