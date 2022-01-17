const arq = require('../arquivo')
const express = require('express')
const lgpd = express()

lgpd.use(express.json({extends:true}))

lgpd.get('/lgpd', (req, res)=>{
    //const data = arq.getAll('lgpd')
    res.send(`
            <div >
                <div>
                    <h1>Lei Geral de Proteção de Dados</h1>
                    <h2>DIAMANTINA/MG - 2021</h2>
                    <p>Quem somos nós: Somos uma empresa turística localizada no Vale do Jequitinhonha que busca por meio de um serviço inovador de hotelaria móvel promover a elevação do turismo na região. A TripHouse tem como principal objetivo disponibilizar um motorhome que ofereça conforto para pessoas de espírito livre se conectarem com a natureza, e por meio desse modelo diferenciado de viagens e hospedagem turística, proporcionar para os nossos clientes, o compartilhamento de experiências em diferentes paisagens.

                    Tamanho da empresa: Microempresa
                    
                    Número de funcionários: 16 funcionários: 2 administradores, 6 motoristas, 2 mecânicos, 3 auxiliares de limpeza, 1 social media, 1 contador e 1 um gerente de TI.
                    
                    Tipo de negócio: Hospedaria e Turismo</p>
                    <a href="https://planner5d.com/v/?key=15e088b11e7318b31fa1ac0cd86d8584&viewMode=3d">Visualizar 3D</a>

                    </br>
                    <p>Infraestrutura: Nossa infraestrutura consiste em um escritório, uma garagem e três motorhomes.

                    Missão: Promover um serviço de hospedagem móvel de alta qualidade, que ofereça conforto para pessoas de espírito livre que estão em busca de conexão com a natureza.
                    
                    Visão: Ser referência de empresa no ramo de hospedagem móvel na região do Vale do Jequitinhonha.
                    
                    Valores: Liberdade, comodidade, modernidade, 
                    
                    Identificar quais são as vulnerabilidades:
                    
                    Físicas: Instalação predial com problemas na estrutura, controle de acesso a determinados locais na empresa e/ou ativos, acidentes que envolvem os ativos;
                    
                    Naturais: Empresa sem proteção adequada contra incêndios, chuva intensa, se localizada próxima a rios, pode sofrer danos de enchentes, queda de árvore em um veículo.
                    
                    Hardware: Depreciação dos ativos, sejam eles: os motorhomes, os computadores a bordo, os notebooks, celular. 
                    
                    Software: Invasão do sistema de agendamento, malware, ransomwaree, phishing e ataque DDos, além da ameaça de burlar o gps do motorhome.
                    
                    Comunicações: Utilização de softwares não homologados, como o WhatsApp, dispositivo externo não autorizado.
                    
                    Humanas: Falta de treinamento e alinhamento com as políticas de segurança da empresa, roubo, vandalismo, sabotagem, exposição de informação sigilosa;
                    
                    
                    
                    
                    Ameaças, riscos e impactos
                    
                    Ameaças: Concorrentes que ofereça um serviço similar com preço mais acessível;
                          
                    Riscos: 
                    Regulatórios, contratação de colaboradores sob o regime CLT, além de questões relacionadas à esfera fiscal.
                    
                    Financeiros, disponibilidade de recursos financeiros, inadimplência, crédito e liquidez.
                    
                    Operacionais, armazenamento de dados, recuperação e acesso de informação.
                    
                    Cibernético, ataques, roubo de informação, dados de usuários, estratégias acessadas pela concorrência.
                    
                    Estratégicos, tomadas de decisão, variação do mercado, notícias falsas.
                    
                    Impactos: Aumento da empregabilidade, valorização do turismo, crescimento financeiro na cidade e região.
                    
                    Política de Segurança da Informação
                    
                    A TripHouse fornece serviços de hospedagem móvel em espaços turísticos da região, que são agendados via telefonema e cadastrados em um sistema que permite aos administradores gerenciarem os dados. 
                    O sistema deverá implementar o SSL e sua configuração será administrada por um responsável na área de TI, obedecendo às normas de mercado como a ISO 27001 e ISO 27002.
                    “A norma tem como foco os princípios de confidencialidade, integridade e disponibilidade da informação. A implementação da ISO 27001 busca garantir o compromisso com a proteção da informação, fornecendo às organizações um modelo de melhores práticas para identificar, analisar e implementar controles para gerenciar riscos de segurança da informação e proteger a confidencialidade, integridade e disponibilidade de dados essenciais aos negócios.”
                    “O principal objetivo da ISO 27002 é estabelecer diretrizes e princípios gerais para iniciar, implementar, manter e melhorar a gestão de segurança da informação em uma organização. Isso também inclui a seleção, a implementação e o gerenciamento de controles, levando em conta os ambientes de risco encontrados na empresa.”
                    Dados estratégicos da organização serão armazenados diariamente a fim de garantir a sua recuperação, sendo o backup realizado via iCloud, com o intuito de priorizar acesso e automatizar processos, alta segurança e escalabilidade.
                    Cliente - O cliente pode ser qualquer pessoa que realiza um agendamento via atendimento telefônico e realiza o seu cadastro com dados pessoais no sistema interno da TripHouse.
                    Colaborador - O colaborador é um funcionário da TripHouse, e quando contratado, é cadastrado no sistema como usuário e obtém uma conta para utilizar o sistema. 
                    Comissão interna - A comissão interna é responsável pela averiguação de irregularidades que firam a PSI, e é composta por Gerente de TI, Diretor Administrativo e Gerente de Frota.
                    A TripHouse  implementa medidas e registros adequados que demonstram a conformidade com o Regulamento Geral de Proteção de Dados (UE) 2016/679 (o “GDPR”) e, portanto, podemos assumir a responsabilidade pelo processamento de seus dados pessoais. Respeitar os princípios do GDPR (legalidade, justiça e transparência, limitação da finalidade, minimização de dados, precisão, limitação de armazenamento, integridade e confidencialidade (segurança) e responsabilidade) é o objetivo principal em todas as nossas operações que envolvem o processamento de dados pessoais, bem como a segurança dos nossos clientes e colaboradores.
                    
                    Senhas e restrições de acesso
                    
                    Após a contratação de um colaborador e o seu cadastro, ele receberá uma senha temporária de usuário, devendo ser alterada em seu primeiro acesso, para que possa realizar as suas atividades conforme seu cargo. 
                    O Colaborador é responsável por manter a confidencialidade da senha de acesso da sua conta, pela conformidade com os requisitos regulamentares, legais e estatutários relevantes para o seu setor. Para aumentar a segurança, a TripHouse oferece aos colaboradores a habilitação de autenticação dupla.
                    Os colaboradores que por ventura estejam com problemas de acesso, deverão entrar em contato com a equipe administrativa.
                    
                    Uso geral de dispositivos, incluindo uso da internet, instalação de softwares e acesso por dispositivos pessoais
                    
                    Todo colaborador ao ser contratado ficará ciente do nível de serviço que será prestado, às normas e os procedimentos através de um treinamento e manual de boas práticas.
                    Os gestores devem configurar os equipamentos, ferramentas e sistemas concedidos aos colaboradores com todos os controles necessários para cumprir os requerimentos de segurança estabelecidos por esta Política de Segurança da Informação (PSI), e pelas Normas de Segurança da Informação complementares. Além disso, planejar, implantar, fornecer e monitorar a capacidade de armazenagem, processamento e transmissão necessários para garantir a segurança requerida pelas áreas de negócio. Deverá também, assegurar que o equipamento esteja em ótimo estado, sendo assim, o funcionário não poderá realizar manutenção física ou lógica dos equipamentos que utiliza ou não. Esta medida evita que o usuário retire ou insira alguma peça importante de máquina que possa prejudicar os dados armazenados na máquina.
                         A empresa deve realizar manutenção constante nos seus equipamentos (computadores, motorhome, celular etc) e os colaboradores responsáveis pela boa usabilidade do equipamento e devem zelar por tal, e dada as devidas precauções, trabalhar com toda segurança possível evitando depredação de qualquer natureza. 
                    Os funcionários serão orientados sobre a proibição do uso de equipamentos para realizarem qualquer tipo de armazenamento de dados pessoais, como imagens, músicas, etc, diminuindo assim o risco de implantação de algum arquivo que prejudique o equipamento e gere riscos para a empresa. Além disso, não será permitido que utilizem e-mail que não seja o empresarial, para que não deixe o equipamento vulnerável a ataques e ao acesso a informações sigilosas. Deve também ser cauteloso com a navegação indevida em sites de terceiros utilizando os equipamentos internos, e para melhor controle e segurança, diariamente será gerado relatórios contendo informações de acessos dos funcionários à internet. 
                    Somente colaboradores autorizados serão responsáveis pela instalação de software.
                    Cada funcionário terá acesso (com limitações de acordo com o cargo) aos dispositivos e sistema interno, bases de dados e qualquer outro ativo de informação, por meio do seu login empresarial. Deverá também evitar a exposição dos arquivos que não sejam autorizados, a fim de não comprometer a segurança e restrição dos arquivos, 
                    Os usuários (logins) individuais de funcionários são de responsabilidade do próprio funcionário.
                    Caso sejam notadas quaisquer vulnerabilidades causadas por um colaborador, caberá ao setor administrativo lidar e garantir a segurança dos demais ativos da empresa.
                    
                    Rotinas de auditoria
                    
                    Para reduzir os riscos de danos aos ativos, será realizada com uma periodicidade de duas auditorias internas no ano. Sendo assim, os responsáveis pela auditoria, deverão gerar e manter as trilhas para auditoria com nível de detalhe suficiente, cumprindo os requisitos necessários para rastrear possíveis falhas e fraudes.
                    
                    Boas práticas de uso do e-mail corporativo
                    
                    O e-mail corporativo é propriedade da companhia, assim, caso necessário, as informações que nele circulam podem ser acompanhadas pelo gestor. O domínio próprio também possibilita a inserção de sistemas de segurança contra vírus e invasão por hackers. 
                    Será realizado um monitoramento periódico para identificar a má utilização da ferramenta, limitando o uso indiscriminado, reservando-a unicamente para troca de mensagens corporativas. 
                    Caso o colaborador utilize e-mails de forma indevida, receberá as penalidades cabíveis.
                    
                    Penalidades
                    
                    O não comprimento dos pontos apresentados nessa PSI poderá implicar na aplicação de sanções administrativas, cíveis e penais previstas na legislação em vigor que regule ou venha regular a matéria. 
                    As penalidades administrativas serão aplicadas após a sua devida apuração em processo administrativo disciplinar, sendo observados critérios de gravidade e reincidência dos atos de violação cometidos. 
                        Incentivamos que todos nossos colaboradores registrem e/ou comuniquem qualquer irregularidade que indique uma violação dos pontos apresentados nesta PSI. Vale ressaltar que, denúncias realizadas de má-fé não serão toleradas, e os responsáveis por esta sofrerá as sanções cabíveis.
                    O colaborador que compactuar com irregularidades que violem as normas propostas pela empresa através da PSI, será penalizado assim como aos que não fizerem o comprimento.
                    Por fim, as infrações que violem as normas que compõem a PSI devem ser analisadas pelo gestor, que comunicará imediatamente à Comissão Interna para fins de determinação da apuração das eventuais responsabilidades dos funcionários envolvidos.</p>
                </div>
                <div className='card-reerva-status' ></div>
            </div>
        )
    }
    `)
})

module.exports = lgpd