const questoes = [
    // --- SEGURANÇA DA INFORMAÇÃO ---
    {
        banca: "CESPE / CEBRASPE", orgao: "Polícia Federal", ano: 2021,
        enunciado: "O ransomware é um tipo de código malicioso que torna inacessíveis os dados armazenados em um equipamento, geralmente usando criptografia, e que exige o pagamento de resgate para restabelecer o acesso ao usuário.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 0,
        comentario: "Certo. Ransomware (do inglês ransom, que significa resgate) é um software malicioso que 'sequestra' os dados, criptografando-os e exigindo pagamento em criptomoedas para liberar a chave de descriptografia."
    },
    {
        banca: "VUNESP", orgao: "TJ-SP", ano: 2023,
        enunciado: "Assinale a alternativa que indica corretamente o nome do ataque cibernético que consiste em enganar o usuário, por meio de e-mails ou sites falsos, para obter informações confidenciais como senhas e dados de cartão de crédito.",
        alternativas: [
            "DDoS",
            "Phishing",
            "Ransomware",
            "Keylogger",
            "Backdoor"
        ],
        resposta: 1,
        comentario: "A alternativa B é a correta. Phishing (pescaria) é a técnica de fraude que utiliza engenharia social (sites falsos, e-mails falsos) para 'pescar' informações de usuários desatentos."
    },
    {
        banca: "FCC", orgao: "TRT", ano: 2022,
        enunciado: "A assinatura digital provê características essenciais para a segurança da informação em documentos eletrônicos. São princípios garantidos pela assinatura digital:",
        alternativas: [
            "Confidencialidade e Disponibilidade",
            "Integridade, Autenticidade e Não-Repúdio",
            "Integridade e Confidencialidade",
            "Disponibilidade, Autenticidade e Confidencialidade",
            "Apenas Autenticidade"
        ],
        resposta: 1,
        comentario: "A assinatura digital garante Integridade (o documento não foi alterado), Autenticidade (quem assinou é realmente quem diz ser) e Não-Repúdio ou Irretratabilidade (o autor não pode negar a autoria)."
    },
    {
        banca: "FGV", orgao: "Receita Federal", ano: 2023,
        enunciado: "Um programa que se disfarça de aplicativo útil para convencer o usuário a instalá-lo e, em seguida, executa ações maliciosas ocultas no sistema é classificado como:",
        alternativas: [
            "Worm",
            "Spyware",
            "Trojan (Cavalo de Troia)",
            "Botnet",
            "Adware"
        ],
        resposta: 2,
        comentario: "Cavalo de Troia (Trojan) é um programa que, além de executar as funções para as quais foi aparentemente projetado, também executa outras funções maliciosas, normalmente sem o conhecimento do usuário."
    },
    {
        banca: "CESGRANRIO", orgao: "Banco do Brasil", ano: 2021,
        enunciado: "Qual o princípio da segurança da informação que garante que um sistema ou serviço esteja acessível e utilizável sempre que for requerido por uma entidade autorizada?",
        alternativas: [
            "Integridade",
            "Confidencialidade",
            "Autenticidade",
            "Disponibilidade",
            "Não Repúdio"
        ],
        resposta: 3,
        comentario: "A Disponibilidade é o pilar (da tríade CID - Confidencialidade, Integridade e Disponibilidade) que garante que a informação esteja acessível para o uso sempre que necessário e por usuários autorizados."
    },
    
    // --- REDES E INTERNET ---
    {
        banca: "VUNESP", orgao: "Polícia Civil", ano: 2022,
        enunciado: "Na Internet, o protocolo responsável por localizar o endereço de IP associado a um nome de domínio (como www.google.com) é o:",
        alternativas: [
            "FTP",
            "HTTP",
            "DNS",
            "SMTP",
            "DHCP"
        ],
        resposta: 2,
        comentario: "DNS (Domain Name System) é o protocolo de resolução de nomes, traduzindo URLs (nomes compreensíveis) para endereços IP e vice-versa."
    },
    {
        banca: "CESPE / CEBRASPE", orgao: "INSS", ano: 2022,
        enunciado: "A Intranet é uma rede restrita ao ambiente interno de uma organização, mas que utiliza os mesmos protocolos e tecnologias da Internet, como o TCP/IP.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 0,
        comentario: "Certo. A Intranet funciona baseada nas mesmas tecnologias da Internet (TCP/IP, HTTP), mas é privada, corporativa e de acesso restrito aos funcionários da empresa."
    },
    {
        banca: "FCC", orgao: "TJ-CE", ano: 2023,
        enunciado: "Em relação ao envio e recebimento de e-mails, o protocolo amplamente utilizado para O ENVIO (saída) de mensagens de correio eletrônico a partir de um cliente de e-mail é o:",
        alternativas: [
            "POP3",
            "IMAP",
            "SMTP",
            "FTP",
            "HTTP"
        ],
        resposta: 2,
        comentario: "SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para ENVIO (Sua Mensagem Tá Partindo). POP3 e IMAP são para recebimento."
    },
    {
        banca: "FGV", orgao: "TCE", ano: 2021,
        enunciado: "Um usuário acessa a URL 'https://www.site.com.br'. O 'S' presente no protocolo HTTPS indica que a conexão:",
        alternativas: [
            "É mais rápida por utilizar servidores dedicados.",
            "Utiliza criptografia para proteger os dados transmitidos.",
            "Exige o uso de senhas fortes por parte do usuário.",
            "Não pode ser interceptada, sendo impossível sofrer ataques.",
            "Pertence obrigatoriamente a um órgão governamental."
        ],
        resposta: 1,
        comentario: "O HTTPS (HyperText Transfer Protocol Secure) adiciona uma camada de segurança ao HTTP (geralmente SSL/TLS), criptografando a comunicação entre o cliente e o servidor."
    },
    {
        banca: "CESGRANRIO", orgao: "Caixa", ano: 2024,
        enunciado: "Qual atalho de teclado no navegador Google Chrome abre uma nova aba no modo de Navegação Anônima?",
        alternativas: [
            "Ctrl + N",
            "Ctrl + Shift + N",
            "Ctrl + T",
            "Ctrl + Shift + T",
            "Ctrl + P"
        ],
        resposta: 1,
        comentario: "No Google Chrome (e Edge), o atalho para a Janela Anônima é Ctrl + Shift + N. (No Firefox é Ctrl + Shift + P)."
    },

    // --- WINDOWS 10 / 11 ---
    {
        banca: "VUNESP", orgao: "Câmara Municipal", ano: 2023,
        enunciado: "No sistema operacional Windows 10, o atalho de teclado padrão utilizado para abrir o Explorador de Arquivos (Windows Explorer) é:",
        alternativas: [
            "Tecla Windows + E",
            "Tecla Windows + D",
            "Tecla Windows + F",
            "Tecla Windows + R",
            "Tecla Windows + L"
        ],
        resposta: 0,
        comentario: "A Tecla Windows + E (de Explorer) abre o Explorador de Arquivos. Windows + D mostra a área de trabalho (Desktop) e Windows + L bloqueia a tela (Lock)."
    },
    {
        banca: "CESPE / CEBRASPE", orgao: "IBGE", ano: 2022,
        enunciado: "No Windows 10, ao excluir um arquivo de um pendrive (unidade flash USB) pressionando a tecla DELETE, o arquivo é enviado para a Lixeira, podendo ser restaurado posteriormente.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 1,
        comentario: "Errado. Arquivos excluídos de unidades removíveis (como pendrives) não vão para a Lixeira; eles são apagados definitivamente (salvo raras configurações específicas no disco removível)."
    },
    {
        banca: "FCC", orgao: "TRF", ano: 2021,
        enunciado: "No ambiente Windows 10, a ferramenta Área de Transferência permite armazenar múltiplos itens copiados. Qual atalho abre o histórico da Área de Transferência?",
        alternativas: [
            "Ctrl + C",
            "Ctrl + V",
            "Tecla Windows + V",
            "Tecla Windows + C",
            "Alt + Tab"
        ],
        resposta: 2,
        comentario: "Pressionar a Tecla Windows (Win) + V abre o histórico da Área de Transferência, permitindo escolher qual item previamente copiado você deseja colar."
    },
    {
        banca: "FGV", orgao: "Sefaz", ano: 2022,
        enunciado: "Sobre a estrutura de diretórios e nomes de arquivos no Windows 10, assinale o caractere que É PERMITIDO na nomeação de um arquivo ou pasta.",
        alternativas: [
            "* (Asterisco)",
            "? (Ponto de interrogação)",
            "- (Hífen)",
            ": (Dois pontos)",
            "| (Barra vertical)"
        ],
        resposta: 2,
        comentario: "Os caracteres NÃO permitidos na nomeação de arquivos no Windows são: < > : \" / \\ | ? * . O hífen (-) é perfeitamente permitido."
    },
    {
        banca: "VUNESP", orgao: "Prefeitura", ano: 2023,
        enunciado: "O recurso do Windows 10 que permite organizar janelas lado a lado automaticamente, arrastando uma janela para as bordas da tela, é conhecido como:",
        alternativas: [
            "Aero Shake",
            "Aero Peek",
            "Snap Assist (Ajustar Janelas)",
            "Task View (Visão de Tarefas)",
            "Windows Hello"
        ],
        resposta: 2,
        comentario: "Snap Assist (ou recurso de ajuste) permite redimensionar rapidamente as janelas arrastando-as para os cantos ou laterais da tela."
    },

    // --- MS WORD ---
    {
        banca: "CESPE / CEBRASPE", orgao: "MPE", ano: 2021,
        enunciado: "No Microsoft Word, o recurso 'Pincel de Formatação' serve para copiar o conteúdo de um texto (as palavras em si) e colá-lo em outra parte do documento, mantendo o controle de alterações ativado.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 1,
        comentario: "Errado. O Pincel de Formatação copia apenas a formatação (cor, fonte, tamanho, estilo) de um texto e a aplica a outro, não copia o conteúdo/texto em si."
    },
    {
        banca: "VUNESP", orgao: "TJ", ano: 2022,
        enunciado: "No Microsoft Word 2016/2019 (em português), qual atalho de teclado é utilizado para JUSTIFICAR o alinhamento de um parágrafo?",
        alternativas: [
            "Ctrl + J",
            "Ctrl + G",
            "Ctrl + E",
            "Ctrl + D",
            "Ctrl + T"
        ],
        resposta: 0,
        comentario: "No Word em português: Ctrl+J (Justificar), Ctrl+E (Centralizar), Ctrl+G (Alinhar à Direita), Ctrl+Q (Alinhar à Esquerda). Dica: Lembre-se do idioma (Ctrl+E para 'Equilíbrio/cEntro' em PT, em inglês seria Ctrl+E de cEnter)."
    },
    {
        banca: "FCC", orgao: "Assembleia", ano: 2023,
        enunciado: "Qual a função do atalho Ctrl + Enter no Microsoft Word?",
        alternativas: [
            "Salvar o documento.",
            "Inserir uma Quebra de Página.",
            "Inserir uma Quebra de Seção.",
            "Abrir a janela de impressão.",
            "Selecionar todo o texto do documento."
        ],
        resposta: 1,
        comentario: "Ctrl + Enter insere uma Quebra de Página imediata, movendo o cursor para o início da próxima página."
    },
    {
        banca: "FGV", orgao: "TJ", ano: 2021,
        enunciado: "A extensão padrão de salvamento de documentos no Microsoft Word, a partir da versão 2007, baseada na linguagem XML, é:",
        alternativas: [
            ".doc",
            ".rtf",
            ".txt",
            ".docx",
            ".pdf"
        ],
        resposta: 3,
        comentario: "A partir do Office 2007, a Microsoft adotou o formato OpenXML, adicionando um 'x' no final das extensões (Word: .docx, Excel: .xlsx, PowerPoint: .pptx)."
    },
    {
        banca: "CESGRANRIO", orgao: "Petrobras", ano: 2022,
        enunciado: "Para localizar e substituir palavras ao longo de um extenso documento no Microsoft Word, o usuário pode acessar a ferramenta 'Substituir' pressionando o atalho:",
        alternativas: [
            "Ctrl + F",
            "Ctrl + S",
            "Ctrl + L",
            "Ctrl + U",
            "Ctrl + B"
        ],
        resposta: 3,
        comentario: "No Word em português, Ctrl + L abre Localizar, enquanto Ctrl + U abre a janela de Substituir. Ctrl + B salva o documento."
    },

    // --- MS EXCEL ---
    {
        banca: "CESPE / CEBRASPE", orgao: "TCE", ano: 2023,
        enunciado: "No Microsoft Excel, a fórmula =SOMA(A1:A5) somará os valores das células A1, A2, A3, A4 e A5; enquanto a fórmula =SOMA(A1;A5) somará apenas as células A1 e A5.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 0,
        comentario: "Certo. Os dois pontos (:) representam um intervalo (ATÉ). O ponto e vírgula (;) representa células individuais (E)."
    },
    {
        banca: "VUNESP", orgao: "Unesp", ano: 2022,
        enunciado: "Um usuário do Excel 2019 digitou na célula C1 a fórmula: =MÉDIA(10; 20; 30). O resultado exibido na célula C1 será:",
        alternativas: [
            "10",
            "20",
            "30",
            "60",
            "ERRO"
        ],
        resposta: 1,
        comentario: "A função MÉDIA soma os valores e divide pela quantidade. (10+20+30) = 60 / 3 = 20."
    },
    {
        banca: "FCC", orgao: "TRT", ano: 2023,
        enunciado: "No Excel, quando uma fórmula apresenta o erro '#DIV/0!', isso significa que:",
        alternativas: [
            "O Excel não reconheceu o texto inserido na fórmula.",
            "Há uma tentativa de divisão por zero ou por uma célula vazia.",
            "O valor procurado por uma função (como PROCV) não foi encontrado.",
            "O conteúdo da célula é mais largo do que a coluna.",
            "Foi usada uma referência de célula inválida."
        ],
        resposta: 1,
        comentario: "O erro #DIV/0! ocorre literalmente quando há uma tentativa de divisão por zero. O erro ###### ocorre quando a coluna não é larga o suficiente."
    },
    {
        banca: "FGV", orgao: "Senado", ano: 2022,
        enunciado: "Qual caractere deve ser colocado antes da letra da coluna e/ou antes do número da linha no Excel para criar uma Referência Absoluta, ou seja, impedir que a célula mude ao arrastar a fórmula?",
        alternativas: [
            "%",
            "&",
            "$",
            "#",
            "@"
        ],
        resposta: 2,
        comentario: "O cifrão ($) trava a referência. Exemplo: $A$1. Se você copiar e colar essa fórmula, ela sempre apontará para A1."
    },
    {
        banca: "CESGRANRIO", orgao: "Banco do Brasil", ano: 2023,
        enunciado: "No Microsoft Excel, a função =SE(A1>=7; \"Aprovado\"; \"Reprovado\") fará o seguinte:",
        alternativas: [
            "Retorna 'Aprovado' se A1 for exatamente 7, e 'Reprovado' em outros casos.",
            "Retorna 'Aprovado' se A1 for maior ou igual a 7; caso contrário, retorna 'Reprovado'.",
            "Retorna 'Reprovado' se A1 for maior ou igual a 7.",
            "Soma as notas a partir de 7.",
            "Dá erro de sintaxe, pois falta um ponto e vírgula no final."
        ],
        resposta: 1,
        comentario: "A sintaxe da função SE é: =SE(Teste_Lógico; Valor_se_verdadeiro; Valor_se_falso). Como A1>=7, se verdadeiro, retorna Aprovado, senão Reprovado."
    },
    
    // --- LINUX ---
    {
        banca: "CESPE / CEBRASPE", orgao: "Polícia Federal", ano: 2021,
        enunciado: "No sistema operacional Linux, o comando 'ls' é utilizado para listar os arquivos e diretórios contidos no diretório atual de trabalho.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 0,
        comentario: "Certo. O comando 'ls' (list) lista o conteúdo do diretório atual, similar ao comando 'dir' no prompt do Windows."
    },
    {
        banca: "VUNESP", orgao: "Prefeitura", ano: 2023,
        enunciado: "Assinale a alternativa que apresenta o comando em Linux utilizado para apagar (remover) arquivos e diretórios.",
        alternativas: [
            "rm",
            "cd",
            "pwd",
            "mkdir",
            "cp"
        ],
        resposta: 0,
        comentario: "'rm' significa remove, usado para apagar. cd = change directory. pwd = print working directory. mkdir = make directory. cp = copy."
    },
    {
        banca: "FCC", orgao: "TRT", ano: 2022,
        enunciado: "O núcleo central do sistema operacional Linux, responsável por gerenciar o hardware e os recursos do sistema, comunicando o software ao hardware, é chamado de:",
        alternativas: [
            "Shell",
            "Bash",
            "Kernel",
            "GUI",
            "Root"
        ],
        resposta: 2,
        comentario: "O Kernel é o 'coração' (núcleo) do sistema operacional. O Shell (como o Bash) é o interpretador de comandos (a casca que interage com o usuário)."
    },
    {
        banca: "FGV", orgao: "TCE", ano: 2023,
        enunciado: "No Linux, o usuário administrador principal, que possui privilégios totais e irrestritos sobre o sistema operacional, recebe o nome padrão de:",
        alternativas: [
            "Admin",
            "Master",
            "Root",
            "Super",
            "Sysadmin"
        ],
        resposta: 2,
        comentario: "O usuário 'root' é o superusuário no Linux, equivalente à conta de Administrador do Windows, tendo controle total sobre o sistema."
    },
    {
        banca: "CESGRANRIO", orgao: "Dataprev", ano: 2024,
        enunciado: "Qual o comando Linux utilizado para alterar as permissões de leitura, escrita e execução de um arquivo ou diretório?",
        alternativas: [
            "chmod",
            "chown",
            "apt-get",
            "grep",
            "find"
        ],
        resposta: 0,
        comentario: "'chmod' (change mode) altera as permissões. 'chown' (change owner) altera o dono do arquivo."
    },

    // --- HARDWARE E ARMAZENAMENTO ---
    {
        banca: "VUNESP", orgao: "Polícia Militar", ano: 2022,
        enunciado: "Sobre componentes de hardware, a memória volátil, na qual são armazenados temporariamente os dados e programas em execução no momento pelo processador, é a:",
        alternativas: [
            "Memória ROM",
            "Disco Rígido (HD)",
            "Memória RAM",
            "Memória Flash (SSD)",
            "BIOS"
        ],
        resposta: 2,
        comentario: "A memória RAM (Random Access Memory) é volátil (perde os dados ao desligar a energia) e serve como área de trabalho (temporária) para o processador."
    },
    {
        banca: "CESPE / CEBRASPE", orgao: "PF", ano: 2021,
        enunciado: "Um dispositivo SSD (Solid State Drive) utiliza discos magnéticos internos de alta velocidade para garantir taxas de leitura e gravação superiores aos HDs tradicionais.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 1,
        comentario: "Errado. O SSD (Disco de Estado Sólido) não possui partes móveis nem discos magnéticos; ele utiliza memória Flash (circuitos eletrônicos), o que o torna mais rápido e resistente a impactos que o HD."
    },
    {
        banca: "FCC", orgao: "Defensoria", ano: 2023,
        enunciado: "Qual dos dispositivos abaixo é considerado exclusivamente um dispositivo de SAÍDA (Output)?",
        alternativas: [
            "Teclado",
            "Mouse",
            "Monitor (sem tela touch)",
            "Scanner",
            "Microfone"
        ],
        resposta: 2,
        comentario: "O Monitor comum exibe a informação para o usuário, portanto é dispositivo de SAÍDA. Teclado, mouse, scanner e microfone são de ENTRADA."
    },
    {
        banca: "FGV", orgao: "TJ", ano: 2021,
        enunciado: "O componente do computador que atua como a placa principal, conectando e permitindo a comunicação entre todos os outros componentes (processador, memória, HD), é a:",
        alternativas: [
            "Placa de Vídeo",
            "Fonte de Alimentação",
            "Placa-mãe (Motherboard)",
            "Memória Cache",
            "Placa de Rede"
        ],
        resposta: 2,
        comentario: "A Placa-Mãe é o backbone do computador. Todos os componentes se conectam a ela para se comunicarem entre si."
    },
    {
        banca: "CESGRANRIO", orgao: "BB", ano: 2021,
        enunciado: "A capacidade de armazenamento de dados é medida em Bytes. A ordem correta do menor para o maior de múltiplos de Byte é:",
        alternativas: [
            "KB, MB, GB, TB",
            "MB, KB, GB, TB",
            "GB, MB, TB, KB",
            "KB, GB, MB, TB",
            "MB, GB, KB, TB"
        ],
        resposta: 0,
        comentario: "A sequência correta (do menor para o maior) é: Kilo (KB) -> Mega (MB) -> Giga (GB) -> Tera (TB) -> Peta (PB)."
    },

    // --- MISTAS (Conceitos Gerais, Nuvem, Browsers) ---
    {
        banca: "VUNESP", orgao: "TJ-SP", ano: 2021,
        enunciado: "O termo Cloud Computing (Computação em Nuvem) refere-se:",
        alternativas: [
            "Ao uso exclusivo de softwares de código aberto instalados no próprio computador.",
            "À entrega de serviços de computação (servidores, armazenamento, bancos de dados, redes, software) pela Internet.",
            "Ao fenômeno meteorológico que afeta os sinais de Wi-Fi e rádio das empresas.",
            "Ao uso de pen drives na transferência em massa de dados offline.",
            "A um tipo de antivírus usado em redes corporativas fechadas."
        ],
        resposta: 1,
        comentario: "Computação em Nuvem permite usar recursos (armazenamento, processamento) via Internet, sem necessidade de mantê-los fisicamente no computador local. Ex: Google Drive, OneDrive."
    },
    {
        banca: "CESPE / CEBRASPE", orgao: "INSS", ano: 2016,
        enunciado: "O Google e o Bing são exemplos de navegadores (browsers) nativos do Windows e do Linux, respectivamente.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 1,
        comentario: "Errado. Google (pesquisa) e Bing são sites/motores de busca. Navegadores (browsers) são Google Chrome, Microsoft Edge, Mozilla Firefox, Safari."
    },
    {
        banca: "FCC", orgao: "TRT", ano: 2023,
        enunciado: "Na ferramenta de busca do Google, para procurar uma frase EXATA, o usuário deve colocar a frase entre:",
        alternativas: [
            "Aspas Duplas ( \" \" )",
            "Colchetes ( [ ] )",
            "Parênteses ( ( ) )",
            "Chaves ( { } )",
            "Asteriscos ( * * )"
        ],
        resposta: 0,
        comentario: "Para forçar a busca de uma expressão exata (naquela exata ordem de palavras), utiliza-se aspas duplas. Ex: \"concurso inss 2024\"."
    },
    {
        banca: "FGV", orgao: "AL", ano: 2022,
        enunciado: "No contexto de correio eletrônico, a sigla CCO (ou BCC em inglês) significa Cópia Oculta. Qual a característica de enviar um e-mail com destinatários no campo CCO?",
        alternativas: [
            "O e-mail é criptografado, impedindo interceptação.",
            "Os destinatários listados em CCO não veem a mensagem original.",
            "Os endereços listados no campo CCO não são visíveis para os outros destinatários da mensagem.",
            "O e-mail é enviado com prioridade máxima.",
            "Os destinatários não podem responder à mensagem."
        ],
        resposta: 2,
        comentario: "Cópia Carbono Oculta (CCO) permite enviar a mensagem para uma pessoa sem que os demais destinatários (do campo Para e CC) saibam que ela também recebeu a mensagem."
    },
    {
        banca: "CESGRANRIO", orgao: "Caixa", ano: 2021,
        enunciado: "A tecnologia VPN (Virtual Private Network) é comumente utilizada em ambientes corporativos para:",
        alternativas: [
            "Aumentar a velocidade do processador do computador.",
            "Criar uma conexão segura e criptografada sobre uma rede pública (como a Internet).",
            "Limpar o cache e os cookies do navegador de internet.",
            "Detectar e remover vírus de pendrives.",
            "Converter arquivos PDF em documentos de Word."
        ],
        resposta: 1,
        comentario: "VPN cria um 'túnel' seguro e criptografado pela internet, permitindo que usuários remotos acessem a rede da empresa de forma segura."
    },
    {
        banca: "CESPE / CEBRASPE", orgao: "Polícia Civil", ano: 2023,
        enunciado: "O Firewall é um software ou hardware projetado exclusivamente para detectar, neutralizar e remover vírus de computador (malwares) que já estejam instalados no disco rígido.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 1,
        comentario: "Errado. O Firewall é uma barreira de proteção (parede de fogo) que filtra o tráfego de rede (entradas e saídas) baseado em regras. Quem detecta e remove vírus instalados é o Antivírus."
    },
    {
        banca: "VUNESP", orgao: "PM-SP", ano: 2022,
        enunciado: "Qual a função primária de um Nobreak (UPS) em um sistema de computadores?",
        alternativas: [
            "Resfriar o processador em dias quentes.",
            "Aumentar o espaço de armazenamento do HD.",
            "Proteger contra picos de tensão e fornecer energia temporária por baterias em caso de queda de luz.",
            "Acelerar a conexão de internet a rádio.",
            "Realizar backup automático dos dados na nuvem."
        ],
        resposta: 2,
        comentario: "O Nobreak (Uninterruptible Power Supply) contém baterias que mantêm o computador ligado durante quedas de energia, além de estabilizar a tensão elétrica."
    },
    {
        banca: "FCC", orgao: "Sabesp", ano: 2021,
        enunciado: "No Microsoft Word, o recurso 'Controlar Alterações' (Track Changes) é especialmente útil para:",
        alternativas: [
            "Alterar o idioma padrão da interface do Word.",
            "Revisar documentos de forma colaborativa, marcando as inclusões, exclusões e formatações feitas por diferentes usuários.",
            "Recuperar arquivos deletados acidentalmente da Lixeira.",
            "Controlar a quantidade de tinta gasta pela impressora.",
            "Proteger o documento com uma senha."
        ],
        resposta: 1,
        comentario: "Controlar Alterações permite que a equipe veja o que foi modificado no texto (quem apagou, quem inseriu) para posterior aceitação ou rejeição."
    },
    {
        banca: "FGV", orgao: "TJM", ano: 2022,
        enunciado: "Assinale a opção que indica um software de compactação e descompactação de arquivos.",
        alternativas: [
            "Mozilla Thunderbird",
            "Microsoft PowerPoint",
            "WinRAR",
            "Adobe Acrobat Reader",
            "VLC Media Player"
        ],
        resposta: 2,
        comentario: "WinRAR, WinZip e 7-Zip são os softwares mais famosos utilizados para compactar (reduzir o tamanho) e descompactar arquivos e pastas."
    },
    {
        banca: "CESGRANRIO", orgao: "Banco do Brasil", ano: 2023,
        enunciado: "O termo Backup refere-se à:",
        alternativas: [
            "Formatação completa do disco rígido.",
            "Cópia de segurança de dados e arquivos importantes, guardada em outro local, para caso de perda dos dados originais.",
            "Atualização automática do Windows Update.",
            "Processo de invasão de um sistema fechado.",
            "Instalação de uma nova memória RAM."
        ],
        resposta: 1,
        comentario: "Backup é a cópia de segurança dos dados, essencial para recuperação em casos de falhas de hardware, ataques de ransomware ou exclusão acidental."
    },

    // --- CONTINUANDO A LISTA PARA CHEGAR A 50 ---
    {
        banca: "CESPE / CEBRASPE", orgao: "INSS", ano: 2022,
        enunciado: "No Microsoft Excel, a referência mista $A1 fixa a coluna A, mas permite que a linha 1 seja alterada se a fórmula for copiada para outras linhas.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 0,
        comentario: "Certo. O símbolo $ trava a referência imediatamente posterior a ele. Sendo $A1, trava a coluna A, mas deixa a linha solta."
    },
    {
        banca: "VUNESP", orgao: "TJ-SP", ano: 2021,
        enunciado: "No navegador Mozilla Firefox, o atalho de teclado Ctrl + H serve para:",
        alternativas: [
            "Salvar a página atual.",
            "Abrir a barra lateral de Histórico de navegação.",
            "Atualizar a página ignorando o cache.",
            "Abrir o gerenciador de downloads.",
            "Abrir a janela de impressão."
        ],
        resposta: 1,
        comentario: "Ctrl + H (de History) abre a barra/aba do histórico de navegação na maioria dos navegadores (Firefox, Chrome, Edge)."
    },
    {
        banca: "FCC", orgao: "TRE", ano: 2022,
        enunciado: "No sistema operacional Windows, a combinação das teclas Ctrl + Shift + Esc abre diretamente:",
        alternativas: [
            "O Painel de Controle.",
            "O Explorador de Arquivos.",
            "O Gerenciador de Tarefas.",
            "O Menu Iniciar.",
            "A tela de bloqueio do usuário."
        ],
        resposta: 2,
        comentario: "Ctrl + Shift + Esc é o atalho direto para abrir o Gerenciador de Tarefas (Task Manager). Ctrl+Alt+Del abre a tela de opções de segurança que contém o Gerenciador de Tarefas."
    },
    {
        banca: "FGV", orgao: "OAB", ano: 2023,
        enunciado: "Sobre armazenamento em nuvem (Google Drive, OneDrive), o processo de manter os arquivos locais do computador idênticos aos arquivos salvos na nuvem é chamado de:",
        alternativas: [
            "Fragmentação",
            "Desfragmentação",
            "Criptografia",
            "Sincronização",
            "Compactação"
        ],
        resposta: 3,
        comentario: "Sincronização é o processo de manter duas pastas (uma local e outra na nuvem, por exemplo) com o conteúdo idêntico, atualizando as alterações automaticamente."
    },
    {
        banca: "CESGRANRIO", orgao: "Petrobras", ano: 2024,
        enunciado: "A extensão padrão para arquivos de apresentação criados e salvos nas versões recentes do Microsoft PowerPoint é:",
        alternativas: [
            ".xls",
            ".docx",
            ".pptx",
            ".ptx",
            ".pwt"
        ],
        resposta: 2,
        comentario: "No PowerPoint a partir da versão 2007 (formato XML), a extensão padrão é .pptx."
    },
    {
        banca: "CESPE / CEBRASPE", orgao: "TRT", ano: 2021,
        enunciado: "Um firewall pessoal instalado em uma estação de trabalho impede que vírus já instalados no computador corrompam os arquivos do Microsoft Word.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 1,
        comentario: "Errado. Quem protege e limpa arquivos de vírus já instalados é o Antivírus. O Firewall controla o fluxo de rede (entrada e saída de dados)."
    },
    {
        banca: "VUNESP", orgao: "PC-SP", ano: 2022,
        enunciado: "Dentre as alternativas abaixo, qual é um endereço de e-mail malformado ou inválido em sua estrutura básica?",
        alternativas: [
            "usuario@provedor.com.br",
            "nome_sobrenome@email.com",
            "contato@empresa",
            "www.site.com.br@mail.com",
            "joao.silva@gov.br"
        ],
        resposta: 2,
        comentario: "A estrutura de um e-mail é nome@domínio. A alternativa 'contato@empresa' está inválida por não possuir um domínio de topo válido (como .com, .br)."
    },
    {
        banca: "FCC", orgao: "TRF", ano: 2023,
        enunciado: "No Microsoft Word, ao selecionar uma palavra e pressionar simultaneamente as teclas Ctrl e N, e logo após Ctrl e S, a palavra ficará:",
        alternativas: [
            "Apenas Negrito.",
            "Apenas Sublinhada.",
            "Negrito e Sublinhada.",
            "Negrito e Itálico.",
            "O texto será excluído."
        ],
        resposta: 2,
        comentario: "Em português, Ctrl+N aplica o formato Negrito e Ctrl+S aplica Sublinhado. O texto assumirá ambas as formatações (Negrito e Sublinhada)."
    },
    {
        banca: "FGV", orgao: "Receita Federal", ano: 2023,
        enunciado: "Qual a função da tecla F5 na maioria dos navegadores web (como Chrome e Edge)?",
        alternativas: [
            "Fechar a aba atual.",
            "Voltar para a página anterior.",
            "Atualizar (recarregar) a página web atual.",
            "Abrir a janela de downloads.",
            "Imprimir o documento."
        ],
        resposta: 2,
        comentario: "A tecla F5 (ou Ctrl+R) serve para Atualizar (Refresh/Reload) a página web atual."
    },
    {
        banca: "CESGRANRIO", orgao: "Caixa", ano: 2021,
        enunciado: "O que é um 'Cookie' no contexto da navegação na Internet?",
        alternativas: [
            "Um pequeno arquivo de texto salvo no computador pelo navegador para armazenar preferências e informações da sessão do usuário.",
            "Um vírus perigoso que rouba senhas bancárias.",
            "Uma extensão que bloqueia anúncios pop-up.",
            "Um protocolo de segurança usado para pagamentos online.",
            "A memória temporária do processador do computador."
        ],
        resposta: 0,
        comentario: "Cookies são pequenos arquivos de texto criados pelos sites e armazenados no seu computador para lembrar suas preferências, itens no carrinho, sessões de login, etc."
    },

    {
        banca: "CESPE / CEBRASPE", orgao: "PF", ano: 2021,
        enunciado: "O botnet é uma rede de computadores infectados (zumbis) que podem ser controlados remotamente para executar ataques coordenados, como ataques de negação de serviço (DDoS).",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 0,
        comentario: "Certo. Botnet (Bot + Network) é uma rede formada por diversos equipamentos infectados por 'bots', controlada por um criminoso para realizar ataques em massa."
    },
    {
        banca: "VUNESP", orgao: "Prefeitura", ano: 2023,
        enunciado: "Qual porta USB oferece as maiores taxas de transferência de dados teóricas dentre as opções abaixo?",
        alternativas: [
            "USB 1.1",
            "USB 2.0",
            "USB 3.0",
            "USB 3.2 Gen 2",
            "As portas USB têm a mesma velocidade, o que muda é apenas o formato do conector."
        ],
        resposta: 3,
        comentario: "As versões do padrão USB evoluem aumentando a velocidade. O USB 3.2 (e superiores como USB4) são consideravelmente mais rápidos que o 3.0 e muito mais rápidos que o 2.0."
    },
    {
        banca: "FCC", orgao: "PGE", ano: 2022,
        enunciado: "No Excel, a função =PROCV( ) é amplamente utilizada para:",
        alternativas: [
            "Procurar um valor na primeira coluna de uma tabela e retornar um valor na mesma linha de outra coluna.",
            "Proteger a planilha com senha contra gravação.",
            "Criar gráficos dinâmicos 3D automaticamente.",
            "Somar todos os valores vazios de uma coluna.",
            "Dividir o texto de uma célula em várias colunas."
        ],
        resposta: 0,
        comentario: "A função PROCV (Procura na Vertical) busca um valor na primeira coluna de um intervalo e retorna um valor correspondente em outra coluna na mesma linha."
    },
    {
        banca: "FGV", orgao: "TJ", ano: 2021,
        enunciado: "No Windows 10, a ferramenta nativa utilizada para proteger o disco rígido usando criptografia de disco completo é o:",
        alternativas: [
            "Windows Defender",
            "BitLocker",
            "OneDrive",
            "DirectX",
            "Scandisk"
        ],
        resposta: 1,
        comentario: "O BitLocker é um recurso nativo das versões Pro e Enterprise do Windows projetado para proteger dados fornecendo criptografia para volumes inteiros."
    },
    {
        banca: "CESGRANRIO", orgao: "BB", ano: 2021,
        enunciado: "O hardware responsável por fornecer energia de forma contínua e nas tensões corretas para todos os componentes internos do gabinete do computador é a:",
        alternativas: [
            "Placa-mãe",
            "Bateria da CMOS",
            "Fonte de Alimentação (Power Supply)",
            "Cooler (Ventoinha)",
            "Memória ROM"
        ],
        resposta: 2,
        comentario: "A Fonte de Alimentação recebe a energia elétrica da tomada (corrente alternada) e a transforma nas tensões contínuas necessárias (12V, 5V, 3.3V) para os componentes."
    },

    {
        banca: "CESPE / CEBRASPE", orgao: "PRF", ano: 2021,
        enunciado: "Na navegação web, limpar o 'Cache' do navegador exclui permanentemente o histórico de páginas visitadas e as senhas salvas, mas mantém as imagens carregadas pelas páginas.",
        alternativas: [
            "Certo",
            "Errado"
        ],
        resposta: 1,
        comentario: "Errado. Limpar o cache exclui os arquivos temporários armazenados (como imagens e scripts para agilizar carregamentos futuros). Para excluir senhas e histórico, deve-se selecionar essas opções específicas, o cache em si não apaga as senhas."
    },
    {
        banca: "VUNESP", orgao: "SAAE", ano: 2022,
        enunciado: "Em uma planilha do Excel 2016, a célula A1 contém o valor 10. A célula A2 contém a fórmula =A1*2. Se o usuário arrastar a alça de preenchimento da célula A2 para a célula A3, qual será o resultado exibido na célula A3?",
        alternativas: [
            "10",
            "20",
            "30",
            "40",
            "0"
        ],
        resposta: 3,
        comentario: "A2 possui =A1*2 (que dá 20). Ao arrastar para A3, a referência relativa muda para =A2*2. Como A2 é 20, 20*2 resulta em 40."
    },
    {
        banca: "FCC", orgao: "TCE", ano: 2023,
        enunciado: "O recurso 'Mala Direta' no Microsoft Word é utilizado predominantemente para:",
        alternativas: [
            "Enviar automaticamente mensagens de WhatsApp para clientes.",
            "Criar documentos personalizados em lote (como cartas ou etiquetas) mesclando um documento principal com uma fonte de dados (como uma tabela do Excel).",
            "Organizar a caixa de entrada do Microsoft Outlook.",
            "Verificar a ortografia de documentos em múltiplos idiomas simultaneamente.",
            "Mudar diretamente a diagramação do texto para o formato de panfletos de publicidade."
        ],
        resposta: 1,
        comentario: "A Mala Direta (Mail Merge) permite criar dezenas ou milhares de documentos iguais variando apenas os dados pessoais (nome, endereço) vinculando o Word a uma base de dados."
    },
    {
        banca: "FGV", orgao: "Sefaz", ano: 2022,
        enunciado: "Sobre Segurança da Informação, o processo de codificar dados de maneira que apenas pessoas autorizadas possam acessá-los e entendê-los chama-se:",
        alternativas: [
            "Backup",
            "Desfragmentação",
            "Criptografia",
            "Formatação",
            "Compressão"
        ],
        resposta: 2,
        comentario: "Criptografia é o processo de transformar texto claro em um formato ininteligível (cifrado) para proteger a confidencialidade da informação."
    },
    {
        banca: "CESGRANRIO", orgao: "Transpetro", ano: 2023,
        enunciado: "A extensão padrão de um arquivo executável no sistema operacional Windows, que carrega um programa ou aplicativo de instalação, é:",
        alternativas: [
            ".txt",
            ".exe",
            ".pdf",
            ".jpg",
            ".dll"
        ],
        resposta: 1,
        comentario: "A extensão .exe (executable) denota um arquivo executável, que ao ser aberto, inicia um programa no Windows."
    }
];
