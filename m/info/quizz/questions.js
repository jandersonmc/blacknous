// ============================================================
// 📚 BASE DE DADOS - 100 PERGUNTAS DE INFORMÁTICA
// ============================================================

const questions = [
  // ============================================================
  // 1. SISTEMAS OPERACIONAIS - Windows 10 (Perguntas 1-10)
  // ============================================================
  {
    id: 1,
    category: "💻 Windows 10",
    question: "Qual é o atalho de teclado no Windows 10 para abrir o Gerenciador de Tarefas?",
    options: [
      "Ctrl + Alt + Del",
      "Ctrl + Shift + Esc",
      "Alt + F4",
      "Windows + X"
    ],
    correct: 1,
    explanation: "Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas, sem passar pela tela de segurança."
  },
  {
    id: 2,
    category: "💻 Windows 10",
    question: "No Windows 10, qual é a principal diferença entre as versões de 32 bits e 64 bits em relação à memória RAM?",
    options: [
      "A versão 32 bits suporta até 8 GB de RAM",
      "A versão 64 bits suporta no máximo 4 GB de RAM",
      "A versão 32 bits suporta no máximo 4 GB de RAM",
      "Ambas suportam a mesma quantidade de RAM"
    ],
    correct: 2,
    explanation: "O Windows 10 de 32 bits pode endereçar no máximo 4 GB de RAM, enquanto a versão 64 bits suporta até 2 TB dependendo da edição."
  },
  {
    id: 3,
    category: "💻 Windows 10",
    question: "Qual ferramenta do Windows 10 permite criar e gerenciar partições de disco?",
    options: [
      "Desfragmentador de Disco",
      "Gerenciamento de Disco",
      "Limpeza de Disco",
      "Verificação de Erros"
    ],
    correct: 1,
    explanation: "O Gerenciamento de Disco (diskmgmt.msc) permite criar, excluir, formatar e redimensionar partições."
  },
  {
    id: 4,
    category: "💻 Windows 10",
    question: "No Windows 10, o que é a Cortana?",
    options: [
      "Um antivírus nativo do sistema",
      "Um assistente virtual com comandos de voz e pesquisa",
      "Um gerenciador de arquivos avançado",
      "Uma ferramenta de backup na nuvem"
    ],
    correct: 1,
    explanation: "A Cortana é a assistente virtual da Microsoft, integrada ao Windows 10, que responde a comandos de voz e auxilia em pesquisas."
  },
  {
    id: 5,
    category: "💻 Windows 10",
    question: "Qual atalho no Windows 10 captura a tela inteira e salva automaticamente na pasta Capturas de Tela?",
    options: [
      "Print Screen",
      "Alt + Print Screen",
      "Windows + Print Screen",
      "Ctrl + Print Screen"
    ],
    correct: 2,
    explanation: "Windows + Print Screen captura toda a tela e salva automaticamente como arquivo PNG na pasta Capturas de Tela dentro de Imagens."
  },
  {
    id: 6,
    category: "💻 Windows 10",
    question: "No Windows 10, qual é o sistema de arquivos padrão utilizado na instalação?",
    options: [
      "FAT32",
      "ext4",
      "NTFS",
      "exFAT"
    ],
    correct: 2,
    explanation: "O NTFS (New Technology File System) é o sistema de arquivos padrão do Windows 10, oferecendo suporte a permissões, criptografia e journaling."
  },
  {
    id: 7,
    category: "💻 Windows 10",
    question: "O que é o Windows Defender no Windows 10?",
    options: [
      "Um editor de textos",
      "Um firewall exclusivo para redes corporativas",
      "O antivírus e antimalware integrado ao sistema",
      "Um navegador de internet"
    ],
    correct: 2,
    explanation: "O Windows Defender (agora Microsoft Defender) é a solução de segurança integrada ao Windows 10, oferecendo proteção contra vírus, malware e outras ameaças."
  },
  {
    id: 8,
    category: "💻 Windows 10",
    question: "Qual é a função do recurso BitLocker no Windows 10?",
    options: [
      "Compactar arquivos para economizar espaço",
      "Criptografar unidades de disco inteiras",
      "Gerenciar atualizações do sistema",
      "Controlar o acesso à internet"
    ],
    correct: 1,
    explanation: "O BitLocker é uma ferramenta de criptografia de disco disponível nas edições Pro e Enterprise do Windows 10."
  },
  {
    id: 9,
    category: "💻 Windows 10",
    question: "No Windows 10, o que é o Painel de Controle?",
    options: [
      "Um gerenciador de downloads",
      "Uma central de configurações legada do sistema",
      "Um editor de imagens",
      "Uma ferramenta exclusiva para programadores"
    ],
    correct: 1,
    explanation: "O Painel de Controle é a central de configurações clássica do Windows que coexiste com o aplicativo Configurações no Windows 10."
  },
  {
    id: 10,
    category: "💻 Windows 10",
    question: "Qual comando abre o Prompt de Comando no Windows 10?",
    options: [
      "cmd",
      "terminal",
      "shell",
      "console"
    ],
    correct: 0,
    explanation: "O comando 'cmd' abre o Prompt de Comando (Command Prompt), o interpretador de linha de comando do Windows."
  },

  // ============================================================
  // 1.2 SISTEMAS OPERACIONAIS - Linux SUSE (Perguntas 11-18)
  // ============================================================
  {
    id: 11,
    category: "🐧 Linux SUSE",
    question: "Qual é a ferramenta gráfica de administração exclusiva do openSUSE/SUSE Linux?",
    options: [
      "Synaptic",
      "YaST (Yet another Setup Tool)",
      "Webmin",
      "Cockpit"
    ],
    correct: 1,
    explanation: "O YaST é a ferramenta de configuração e administração central do SUSE Linux, permitindo gerenciar hardware, software, rede e segurança."
  },
  {
    id: 12,
    category: "🐧 Linux SUSE",
    question: "No Linux, qual comando é utilizado para listar o conteúdo de um diretório?",
    options: [
      "dir",
      "list",
      "ls",
      "show"
    ],
    correct: 2,
    explanation: "O comando 'ls' (list) é usado para listar arquivos e diretórios no Linux. Pode ser combinado com opções como -l, -a, -h."
  },
  {
    id: 13,
    category: "🐧 Linux SUSE",
    question: "Qual gerenciador de pacotes é utilizado no SUSE Linux?",
    options: [
      "apt-get",
      "yum",
      "zypper",
      "pacman"
    ],
    correct: 2,
    explanation: "O zypper é o gerenciador de pacotes de linha de comando do SUSE Linux, utilizado para instalar, remover e atualizar pacotes RPM."
  },
  {
    id: 14,
    category: "🐧 Linux SUSE",
    question: "No Linux, qual é o diretório raiz do sistema?",
    options: [
      "C:\\",
      "/home",
      "/",
      "/root"
    ],
    correct: 2,
    explanation: "No Linux, o diretório raiz é representado por '/' (barra). Todos os outros diretórios são subdiretórios dele."
  },
  {
    id: 15,
    category: "🐧 Linux SUSE",
    question: "Qual comando Linux altera as permissões de um arquivo?",
    options: [
      "chown",
      "chmod",
      "chgrp",
      "chperm"
    ],
    correct: 1,
    explanation: "O comando 'chmod' (change mode) altera as permissões de leitura, escrita e execução de arquivos e diretórios."
  },
  {
    id: 16,
    category: "🐧 Linux SUSE",
    question: "No Linux SUSE, qual é o ambiente de desktop padrão?",
    options: [
      "GNOME apenas",
      "Unity",
      "KDE Plasma ou GNOME (escolha durante instalação)",
      "XFCE"
    ],
    correct: 2,
    explanation: "O openSUSE oferece KDE Plasma e GNOME como opções principais de ambiente de desktop durante a instalação."
  },
  {
    id: 17,
    category: "🐧 Linux SUSE",
    question: "No Linux, o que faz o comando 'sudo'?",
    options: [
      "Desliga o computador",
      "Executa um comando com privilégios de superusuário (root)",
      "Cria um novo usuário",
      "Formata uma partição"
    ],
    correct: 1,
    explanation: "O 'sudo' (Super User DO) permite executar comandos com permissões elevadas de administrador (root)."
  },
  {
    id: 18,
    category: "🐧 Linux SUSE",
    question: "No Linux, qual diretório armazena os arquivos pessoais dos usuários?",
    options: [
      "/etc",
      "/var",
      "/home",
      "/usr"
    ],
    correct: 2,
    explanation: "O diretório /home contém os diretórios pessoais de cada usuário do sistema (ex: /home/joao, /home/maria)."
  },

  // ============================================================
  // 2. EDIÇÃO DE TEXTOS, PLANILHAS E APRESENTAÇÕES (Perguntas 19-38)
  // ============================================================
  {
    id: 19,
    category: "📝 Microsoft Word",
    question: "No Microsoft Word 365, qual atalho é usado para salvar um documento?",
    options: [
      "Ctrl + A",
      "Ctrl + S",
      "Ctrl + P",
      "Ctrl + N"
    ],
    correct: 1,
    explanation: "Ctrl + S (Save) salva o documento atual. Ctrl + A seleciona tudo, Ctrl + P imprime e Ctrl + N cria novo documento."
  },
  {
    id: 20,
    category: "📝 Microsoft Word",
    question: "No Word 365, qual recurso permite rastrear alterações feitas por diferentes autores em um documento?",
    options: [
      "Mala Direta",
      "Controlar Alterações",
      "Referências Cruzadas",
      "Macros"
    ],
    correct: 1,
    explanation: "O recurso 'Controlar Alterações' (Track Changes) registra todas as modificações feitas no documento, permitindo revisão colaborativa."
  },
  {
    id: 21,
    category: "📝 Microsoft Word",
    question: "Qual extensão de arquivo é o formato padrão do Word 365?",
    options: [
      ".doc",
      ".docx",
      ".txt",
      ".rtf"
    ],
    correct: 1,
    explanation: "O formato .docx é o padrão do Word desde a versão 2007, baseado no formato Office Open XML."
  },
  {
    id: 22,
    category: "📝 Microsoft Word",
    question: "No Word 365, como inserir uma quebra de página?",
    options: [
      "Pressionar Enter várias vezes",
      "Ctrl + Enter",
      "Alt + Enter",
      "Shift + Enter"
    ],
    correct: 1,
    explanation: "Ctrl + Enter insere uma quebra de página forçada. Shift + Enter insere apenas uma quebra de linha."
  },
  {
    id: 23,
    category: "📝 Microsoft Word",
    question: "No Word 365, qual guia contém o recurso de Mala Direta (Mail Merge)?",
    options: [
      "Página Inicial",
      "Inserir",
      "Correspondências",
      "Layout"
    ],
    correct: 2,
    explanation: "A guia 'Correspondências' contém as ferramentas de Mala Direta para criar cartas, etiquetas e envelopes personalizados."
  },
  {
    id: 24,
    category: "📝 Microsoft Word",
    question: "O que é o recurso 'Estilos' no Word 365?",
    options: [
      "Modelos de documentos prontos",
      "Formatações predefinidas que podem ser aplicadas a textos",
      "Temas de cores para o Word",
      "Fontes especiais para títulos"
    ],
    correct: 1,
    explanation: "Estilos são conjuntos de formatação predefinidos (fonte, tamanho, cor, espaçamento) que padronizam e organizam o documento."
  },
  {
    id: 25,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, qual função soma os valores de um intervalo de células?",
    options: [
      "=TOTAL(A1:A10)",
      "=SOMA(A1:A10)",
      "=ADICIONAR(A1:A10)",
      "=SOMAR(A1:A10)"
    ],
    correct: 1,
    explanation: "A função =SOMA() (ou =SUM() em inglês) é usada para somar valores de um intervalo de células."
  },
  {
    id: 26,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, qual função retorna o valor VERDADEIRO se uma condição for atendida?",
    options: [
      "=QUANDO()",
      "=CASO()",
      "=SE()",
      "=TESTE()"
    ],
    correct: 2,
    explanation: "A função =SE() (IF) testa uma condição e retorna um valor se verdadeira e outro se falsa. Ex: =SE(A1>10;\"Sim\";\"Não\")."
  },
  {
    id: 27,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, o que é uma referência absoluta?",
    options: [
      "Uma referência que muda ao copiar a fórmula",
      "Uma referência fixa indicada pelo símbolo $ (ex: $A$1)",
      "Uma referência a outra planilha",
      "Uma referência a um arquivo externo"
    ],
    correct: 1,
    explanation: "Referência absoluta ($A$1) mantém a célula fixa ao copiar fórmulas. O $ trava linha e/ou coluna."
  },
  {
    id: 28,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, qual função conta células que contêm números em um intervalo?",
    options: [
      "=CONTAR()",
      "=CONT.NÚM()",
      "=CONT.VALORES()",
      "=CONT.SE()"
    ],
    correct: 1,
    explanation: "=CONT.NÚM() conta apenas as células que contêm valores numéricos. =CONT.VALORES() conta qualquer célula não vazia."
  },
  {
    id: 29,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, qual função busca um valor em uma tabela verticalmente?",
    options: [
      "=PROCH()",
      "=BUSCAR()",
      "=PROCV()",
      "=PESQUISAR()"
    ],
    correct: 2,
    explanation: "=PROCV() (VLOOKUP) busca um valor na primeira coluna de uma tabela e retorna um valor correspondente em outra coluna."
  },
  {
    id: 30,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, o que é uma Tabela Dinâmica (Pivot Table)?",
    options: [
      "Uma tabela que se atualiza automaticamente da internet",
      "Uma ferramenta para resumir e analisar grandes volumes de dados",
      "Uma tabela com fórmulas que mudam de posição",
      "Uma tabela vinculada a um banco de dados externo"
    ],
    correct: 1,
    explanation: "Tabela Dinâmica permite resumir, analisar, explorar e apresentar dados de forma interativa e personalizada."
  },
  {
    id: 31,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, qual é a extensão padrão de um arquivo de planilha?",
    options: [
      ".xls",
      ".xlsx",
      ".csv",
      ".xlsm"
    ],
    correct: 1,
    explanation: "O formato .xlsx é o padrão desde o Excel 2007. O .xlsm é para planilhas com macros e .csv é texto delimitado."
  },
  {
    id: 32,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, qual função calcula a média aritmética de um intervalo?",
    options: [
      "=MEDIA()",
      "=MÉDIA()",
      "=MED()",
      "=AVG()"
    ],
    correct: 1,
    explanation: "=MÉDIA() (AVERAGE) calcula a média aritmética dos valores de um intervalo de células."
  },
  {
    id: 33,
    category: "🎯 Microsoft PowerPoint",
    question: "No PowerPoint 365, qual é a extensão padrão de uma apresentação?",
    options: [
      ".ppt",
      ".pptx",
      ".ppsx",
      ".pptm"
    ],
    correct: 1,
    explanation: "O formato .pptx é o padrão do PowerPoint desde 2007. O .ppsx é para apresentações que abrem direto em modo de exibição."
  },
  {
    id: 34,
    category: "🎯 Microsoft PowerPoint",
    question: "No PowerPoint 365, qual atalho inicia a apresentação de slides do início?",
    options: [
      "F5",
      "F7",
      "Ctrl + F5",
      "Shift + F5"
    ],
    correct: 0,
    explanation: "F5 inicia a apresentação do primeiro slide. Shift + F5 inicia do slide atual."
  },
  {
    id: 35,
    category: "🎯 Microsoft PowerPoint",
    question: "No PowerPoint 365, o que são 'Transições'?",
    options: [
      "Animações aplicadas a objetos individuais",
      "Efeitos visuais na passagem entre slides",
      "Movimentos do cursor durante a apresentação",
      "Links entre apresentações diferentes"
    ],
    correct: 1,
    explanation: "Transições são efeitos visuais que ocorrem na mudança de um slide para outro (ex: Esmaecer, Empurrar, Cortina)."
  },
  {
    id: 36,
    category: "🎯 Microsoft PowerPoint",
    question: "No PowerPoint 365, como se chama o modo de exibição que mostra todos os slides em miniatura?",
    options: [
      "Modo Normal",
      "Modo de Leitura",
      "Classificação de Slides",
      "Modo Estrutura de Tópicos"
    ],
    correct: 2,
    explanation: "O modo 'Classificação de Slides' exibe todos os slides em miniatura, facilitando a reorganização da apresentação."
  },
  {
    id: 37,
    category: "📝 Microsoft Word",
    question: "No Word 365, o recurso 'Sumário Automático' é encontrado na guia:",
    options: [
      "Página Inicial",
      "Inserir",
      "Referências",
      "Layout"
    ],
    correct: 2,
    explanation: "A guia 'Referências' contém ferramentas para Sumário, Notas de Rodapé, Citações, Legendas e Índice."
  },
  {
    id: 38,
    category: "📊 Microsoft Excel",
    question: "No Excel 365, a função =CONCATENAR() é usada para:",
    options: [
      "Somar valores numéricos",
      "Juntar textos de diferentes células em uma única string",
      "Dividir o texto de uma célula em várias",
      "Converter números em texto"
    ],
    correct: 1,
    explanation: "=CONCATENAR() (ou o operador &) une textos de diferentes células. No Excel 365, =CONCAT() também é aceita."
  },

  // ============================================================
  // 3. REDES DE COMPUTADORES (Perguntas 39-53)
  // ============================================================
  {
    id: 39,
    category: "🌐 Redes de Computadores",
    question: "Qual dispositivo de rede é responsável por encaminhar pacotes de dados entre redes diferentes?",
    options: [
      "Hub",
      "Switch",
      "Roteador",
      "Repetidor"
    ],
    correct: 2,
    explanation: "O roteador (router) opera na camada 3 do modelo OSI e encaminha pacotes entre redes diferentes usando endereços IP."
  },
  {
    id: 40,
    category: "🌐 Redes de Computadores",
    question: "O que é um endereço IP?",
    options: [
      "O nome de domínio de um site",
      "Um identificador numérico único para dispositivos em uma rede",
      "A senha de acesso à rede",
      "O nome do provedor de internet"
    ],
    correct: 1,
    explanation: "O endereço IP (Internet Protocol) é um identificador numérico único atribuído a cada dispositivo conectado a uma rede."
  },
  {
    id: 41,
    category: "🌐 Redes de Computadores",
    question: "Qual protocolo é utilizado para transferir páginas web na internet?",
    options: [
      "FTP",
      "SMTP",
      "HTTP/HTTPS",
      "POP3"
    ],
    correct: 2,
    explanation: "O HTTP (HyperText Transfer Protocol) e sua versão segura HTTPS são usados para transferir páginas web entre servidor e navegador."
  },
  {
    id: 42,
    category: "🌐 Redes de Computadores",
    question: "O que é uma Intranet?",
    options: [
      "A internet disponível apenas em grandes empresas",
      "Uma rede privada que usa tecnologias de internet dentro de uma organização",
      "Um tipo de conexão wireless",
      "Uma rede social corporativa"
    ],
    correct: 1,
    explanation: "Uma Intranet é uma rede privada interna de uma organização que utiliza tecnologias da internet (TCP/IP, HTTP) para compartilhar informações."
  },
  {
    id: 43,
    category: "🌐 Redes de Computadores",
    question: "Qual é a função do protocolo DNS?",
    options: [
      "Enviar e-mails",
      "Traduzir nomes de domínio em endereços IP",
      "Criptografar dados na rede",
      "Gerenciar permissões de acesso"
    ],
    correct: 1,
    explanation: "O DNS (Domain Name System) traduz nomes de domínio legíveis (ex: www.google.com) em endereços IP numéricos."
  },
  {
    id: 44,
    category: "🌐 Redes de Computadores",
    question: "O que significa a sigla TCP/IP?",
    options: [
      "Total Computer Protocol / Internet Provider",
      "Transmission Control Protocol / Internet Protocol",
      "Transfer Communication Process / Internet Path",
      "Technical Computing Platform / Internal Process"
    ],
    correct: 1,
    explanation: "TCP/IP é o conjunto de protocolos que forma a base da comunicação na internet, definindo como os dados são transmitidos."
  },
  {
    id: 45,
    category: "🌐 Redes de Computadores",
    question: "Qual tipo de rede abrange uma área geográfica limitada, como um escritório ou residência?",
    options: [
      "WAN",
      "MAN",
      "LAN",
      "VPN"
    ],
    correct: 2,
    explanation: "LAN (Local Area Network) é uma rede local que cobre uma área geográfica limitada, como um escritório, prédio ou residência."
  },
  {
    id: 46,
    category: "🌐 Redes de Computadores",
    question: "O que é um Firewall?",
    options: [
      "Um software antivírus",
      "Um sistema que monitora e controla o tráfego de rede baseado em regras de segurança",
      "Um protocolo de criptografia",
      "Um tipo de cabo de rede"
    ],
    correct: 1,
    explanation: "O Firewall é um sistema de segurança que monitora e filtra o tráfego de rede, permitindo ou bloqueando conexões conforme regras definidas."
  },
  {
    id: 47,
    category: "🌐 Redes de Computadores",
    question: "O protocolo FTP é utilizado para:",
    options: [
      "Enviar e-mails",
      "Transferir arquivos entre computadores pela rede",
      "Navegar em páginas web",
      "Fazer chamadas de vídeo"
    ],
    correct: 1,
    explanation: "O FTP (File Transfer Protocol) é usado para transferir arquivos entre um cliente e um servidor na rede."
  },
  {
    id: 48,
    category: "🌐 Redes de Computadores",
    question: "O que é Wi-Fi?",
    options: [
      "Um tipo de cabo de rede de alta velocidade",
      "Uma tecnologia de rede sem fio baseada no padrão IEEE 802.11",
      "Um protocolo de segurança de rede",
      "Um serviço de internet por satélite"
    ],
    correct: 1,
    explanation: "Wi-Fi é uma tecnologia de rede sem fio que utiliza ondas de rádio baseada no padrão IEEE 802.11 para conectar dispositivos à rede."
  },
  {
    id: 49,
    category: "🌐 Redes de Computadores",
    question: "O que é VPN (Virtual Private Network)?",
    options: [
      "Um tipo de antivírus para redes",
      "Uma rede privada virtual que cria uma conexão segura e criptografada sobre a internet",
      "Um serviço de armazenamento em nuvem",
      "Um protocolo para acelerar a internet"
    ],
    correct: 1,
    explanation: "A VPN cria um túnel criptografado sobre a internet, permitindo conexões seguras como se o usuário estivesse na rede local da organização."
  },
  {
    id: 50,
    category: "🌐 Redes de Computadores",
    question: "Qual porta padrão é utilizada pelo protocolo HTTPS?",
    options: [
      "80",
      "443",
      "21",
      "25"
    ],
    correct: 1,
    explanation: "A porta 443 é a padrão do HTTPS. A porta 80 é do HTTP, 21 do FTP e 25 do SMTP."
  },
  {
    id: 51,
    category: "🌐 Redes de Computadores",
    question: "O que diferencia um Switch de um Hub?",
    options: [
      "O Hub é mais rápido que o Switch",
      "O Switch envia dados apenas para a porta de destino, enquanto o Hub envia para todas as portas",
      "O Hub criptografa os dados automaticamente",
      "Não existe diferença entre eles"
    ],
    correct: 1,
    explanation: "O Switch é mais inteligente, enviando dados apenas para a porta do dispositivo destinatário, enquanto o Hub transmite para todas as portas."
  },
  {
    id: 52,
    category: "🌐 Redes de Computadores",
    question: "O que é o protocolo DHCP?",
    options: [
      "Um protocolo de criptografia de dados",
      "Um protocolo que atribui endereços IP automaticamente aos dispositivos da rede",
      "Um protocolo de transferência de arquivos",
      "Um protocolo de autenticação de usuários"
    ],
    correct: 1,
    explanation: "O DHCP (Dynamic Host Configuration Protocol) atribui automaticamente endereços IP e outras configurações de rede aos dispositivos."
  },
  {
    id: 53,
    category: "🌐 Redes de Computadores",
    question: "O que é computação em nuvem (Cloud Computing)?",
    options: [
      "Armazenar dados apenas em pen drives",
      "Utilizar recursos computacionais (servidores, armazenamento, software) via internet sob demanda",
      "Usar apenas software instalado localmente",
      "Conectar-se à internet via satélite"
    ],
    correct: 1,
    explanation: "Computação em nuvem permite acessar recursos de TI (processamento, armazenamento, software) pela internet, sem necessidade de infraestrutura local."
  },

  // ============================================================
  // 4. NAVEGADORES WEB (Perguntas 54-65)
  // ============================================================
  {
    id: 54,
    category: "🌍 Navegadores Web",
    question: "No Microsoft Edge, qual atalho abre uma nova guia?",
    options: [
      "Ctrl + N",
      "Ctrl + T",
      "Ctrl + Tab",
      "Alt + T"
    ],
    correct: 1,
    explanation: "Ctrl + T abre uma nova guia (tab) no Microsoft Edge e na maioria dos navegadores. Ctrl + N abre uma nova janela."
  },
  {
    id: 55,
    category: "🌍 Navegadores Web",
    question: "No Microsoft Edge, como acessar a navegação InPrivate (modo privado)?",
    options: [
      "Ctrl + Shift + P",
      "Ctrl + Shift + N",
      "Ctrl + P",
      "Alt + P"
    ],
    correct: 0,
    explanation: "No Edge, Ctrl + Shift + P abre uma janela InPrivate. No Chrome, o atalho equivalente é Ctrl + Shift + N."
  },
  {
    id: 56,
    category: "🌍 Navegadores Web",
    question: "No Firefox, como acessar a navegação privativa?",
    options: [
      "Ctrl + Shift + N",
      "Ctrl + Shift + P",
      "Ctrl + Alt + P",
      "Alt + Shift + N"
    ],
    correct: 1,
    explanation: "No Firefox, Ctrl + Shift + P abre uma janela de Navegação Privativa, que não salva histórico, cookies ou dados de formulário."
  },
  {
    id: 57,
    category: "🌍 Navegadores Web",
    question: "O que são cookies no contexto de navegadores web?",
    options: [
      "Vírus que infectam o navegador",
      "Pequenos arquivos de dados armazenados pelo site no computador do usuário",
      "Extensões que melhoram a navegação",
      "Certificados de segurança dos sites"
    ],
    correct: 1,
    explanation: "Cookies são pequenos arquivos de texto que os sites armazenam no computador para lembrar preferências, login e dados de sessão."
  },
  {
    id: 58,
    category: "🌍 Navegadores Web",
    question: "O que é uma extensão (add-on) de navegador?",
    options: [
      "Uma atualização obrigatória do navegador",
      "Um programa complementar que adiciona funcionalidades ao navegador",
      "Um tipo de vírus que se instala no navegador",
      "Uma configuração de rede do navegador"
    ],
    correct: 1,
    explanation: "Extensões são programas complementares que adicionam recursos e funcionalidades extras ao navegador, como bloqueadores de anúncios."
  },
  {
    id: 59,
    category: "🌍 Navegadores Web",
    question: "Qual atalho atualiza (recarrega) a página no navegador?",
    options: [
      "F3",
      "F5",
      "F7",
      "F9"
    ],
    correct: 1,
    explanation: "F5 recarrega a página atual. Ctrl + F5 força a recarga ignorando o cache do navegador."
  },
  {
    id: 60,
    category: "🌍 Navegadores Web",
    question: "O Google é um exemplo de:",
    options: [
      "Navegador web",
      "Provedor de internet",
      "Mecanismo de busca (motor de pesquisa)",
      "Sistema operacional"
    ],
    correct: 2,
    explanation: "O Google é um mecanismo de busca (search engine) que indexa e permite pesquisar conteúdo na web."
  },
  {
    id: 61,
    category: "🌍 Navegadores Web",
    question: "O que significa HTTPS na barra de endereços do navegador?",
    options: [
      "Que o site é governamental",
      "Que a conexão é criptografada e segura",
      "Que o site é gratuito",
      "Que o site está hospedado no Brasil"
    ],
    correct: 1,
    explanation: "HTTPS (HTTP Secure) indica que a comunicação entre o navegador e o servidor é criptografada via TLS/SSL, protegendo os dados."
  },
  {
    id: 62,
    category: "🌍 Navegadores Web",
    question: "No Edge e Firefox, qual atalho abre o histórico de navegação?",
    options: [
      "Ctrl + J",
      "Ctrl + H",
      "Ctrl + D",
      "Ctrl + B"
    ],
    correct: 1,
    explanation: "Ctrl + H abre o histórico de navegação na maioria dos navegadores (H de History)."
  },
  {
    id: 63,
    category: "🌍 Navegadores Web",
    question: "O que são favoritos (bookmarks) no navegador?",
    options: [
      "Sites que pagam para aparecer em destaque",
      "Links salvos pelo usuário para acesso rápido a sites",
      "Histórico das páginas mais visitadas",
      "Downloads recentes"
    ],
    correct: 1,
    explanation: "Favoritos são links de páginas web salvos pelo usuário para facilitar o acesso futuro sem precisar digitar o endereço."
  },
  {
    id: 64,
    category: "🌍 Navegadores Web",
    question: "O Microsoft Edge é baseado em qual motor de renderização?",
    options: [
      "Gecko",
      "WebKit",
      "Chromium (Blink)",
      "Trident"
    ],
    correct: 2,
    explanation: "Desde 2020, o Microsoft Edge é baseado no Chromium, usando o motor de renderização Blink, o mesmo do Google Chrome."
  },
  {
    id: 65,
    category: "🌍 Navegadores Web",
    question: "No Firefox, qual mecanismo de renderização é utilizado?",
    options: [
      "Blink",
      "WebKit",
      "Gecko",
      "Trident"
    ],
    correct: 2,
    explanation: "O Firefox utiliza o motor de renderização Gecko, desenvolvido pela Mozilla."
  },

  // ============================================================
  // 5. CORREIO ELETRÔNICO (Perguntas 66-75)
  // ============================================================
  {
    id: 66,
    category: "📧 Correio Eletrônico",
    question: "Qual protocolo é utilizado para ENVIAR e-mails?",
    options: [
      "POP3",
      "IMAP",
      "SMTP",
      "HTTP"
    ],
    correct: 2,
    explanation: "O SMTP (Simple Mail Transfer Protocol) é o protocolo padrão para envio de e-mails. POP3 e IMAP são para recebimento."
  },
  {
    id: 67,
    category: "📧 Correio Eletrônico",
    question: "Qual a diferença principal entre POP3 e IMAP?",
    options: [
      "POP3 é mais seguro que IMAP",
      "POP3 baixa e-mails para o dispositivo local; IMAP sincroniza e mantém no servidor",
      "IMAP é apenas para webmail",
      "POP3 é mais rápido para enviar e-mails"
    ],
    correct: 1,
    explanation: "O POP3 baixa os e-mails para o dispositivo local (podendo removê-los do servidor). O IMAP mantém sincronização bidirecional com o servidor."
  },
  {
    id: 68,
    category: "📧 Correio Eletrônico",
    question: "O que significa o campo 'Cco' (Bcc) em um e-mail?",
    options: [
      "Cópia Confirmada Online",
      "Cópia de Controle Oficial",
      "Cópia Oculta (os destinatários não veem uns aos outros)",
      "Correio com Confirmação Obrigatória"
    ],
    correct: 2,
    explanation: "Cco (Com Cópia Oculta) ou Bcc (Blind Carbon Copy) envia cópia do e-mail sem que os outros destinatários saibam."
  },
  {
    id: 69,
    category: "📧 Correio Eletrônico",
    question: "O que é Webmail?",
    options: [
      "Um programa que deve ser instalado no computador para ler e-mails",
      "Um serviço que permite acessar e-mails pelo navegador web, sem instalar software",
      "Um tipo de spam",
      "Um protocolo de envio de e-mails"
    ],
    correct: 1,
    explanation: "Webmail é um serviço que permite acessar a caixa de e-mail através do navegador web (ex: Gmail, Outlook.com, Yahoo Mail)."
  },
  {
    id: 70,
    category: "📧 Correio Eletrônico",
    question: "O que é phishing por e-mail?",
    options: [
      "Um filtro de spam eficiente",
      "Uma tentativa de obter dados pessoais por meio de e-mails fraudulentos",
      "Um recurso de criptografia de e-mails",
      "Um protocolo de autenticação de e-mails"
    ],
    correct: 1,
    explanation: "Phishing é uma técnica de engenharia social que usa e-mails falsos para enganar o usuário e roubar dados pessoais ou financeiros."
  },
  {
    id: 71,
    category: "📧 Correio Eletrônico",
    question: "O campo 'Cc' em um e-mail serve para:",
    options: [
      "Enviar com confirmação de leitura",
      "Enviar cópia do e-mail para outros destinatários (visível a todos)",
      "Criptografar o conteúdo do e-mail",
      "Comprimir os anexos do e-mail"
    ],
    correct: 1,
    explanation: "Cc (Com Cópia ou Carbon Copy) envia cópia do e-mail para outros destinatários, e todos podem ver quem recebeu."
  },
  {
    id: 72,
    category: "📧 Correio Eletrônico",
    question: "Qual é o tamanho máximo típico de um anexo em serviços de e-mail como Gmail e Outlook?",
    options: [
      "5 MB",
      "25 MB",
      "100 MB",
      "1 GB"
    ],
    correct: 1,
    explanation: "A maioria dos serviços de e-mail (Gmail, Outlook) limita anexos a 25 MB. Para arquivos maiores, é recomendado usar serviços de nuvem."
  },
  {
    id: 73,
    category: "📧 Correio Eletrônico",
    question: "O que é SPAM?",
    options: [
      "E-mail com vírus",
      "E-mail não solicitado enviado em massa, geralmente com fins publicitários",
      "E-mail criptografado",
      "E-mail com anexo grande"
    ],
    correct: 1,
    explanation: "SPAM são mensagens eletrônicas não solicitadas enviadas em massa, geralmente com conteúdo publicitário ou fraudulento."
  },
  {
    id: 74,
    category: "📧 Correio Eletrônico",
    question: "O que significa 'Responder a Todos' em um e-mail?",
    options: [
      "Encaminhar o e-mail para todos os contatos",
      "Responder ao remetente e a todos os destinatários incluídos no e-mail original",
      "Responder apenas ao remetente",
      "Criar uma lista de discussão"
    ],
    correct: 1,
    explanation: "'Responder a Todos' envia a resposta para o remetente original e para todos os destinatários (Para e Cc) do e-mail original."
  },
  {
    id: 75,
    category: "📧 Correio Eletrônico",
    question: "O Outlook 365 é classificado como:",
    options: [
      "Apenas um webmail",
      "Apenas um cliente de e-mail para desktop",
      "Um serviço completo que inclui cliente desktop, aplicativo móvel e webmail",
      "Um navegador de internet"
    ],
    correct: 2,
    explanation: "O Outlook 365 é uma solução completa de e-mail disponível como aplicativo desktop, mobile e versão web (Outlook.com)."
  },

  // ============================================================
  // 6. REDES SOCIAIS (Perguntas 76-83)
  // ============================================================
  {
    id: 76,
    category: "📱 Redes Sociais",
    question: "O LinkedIn é uma rede social voltada principalmente para:",
    options: [
      "Compartilhamento de fotos pessoais",
      "Jogos online",
      "Networking profissional e mercado de trabalho",
      "Transmissão de vídeos ao vivo"
    ],
    correct: 2,
    explanation: "O LinkedIn é uma rede social profissional para networking, recrutamento, desenvolvimento de carreira e compartilhamento de conteúdo profissional."
  },
  {
    id: 77,
    category: "📱 Redes Sociais",
    question: "No X (antigo Twitter), qual é o limite de caracteres para uma postagem (tweet)?",
    options: [
      "140 caracteres",
      "280 caracteres",
      "500 caracteres",
      "Sem limite"
    ],
    correct: 1,
    explanation: "Desde 2017, o X/Twitter expandiu o limite de 140 para 280 caracteres por postagem para usuários da versão gratuita."
  },
  {
    id: 78,
    category: "📱 Redes Sociais",
    question: "O que são hashtags (#) nas redes sociais?",
    options: [
      "Links para sites externos",
      "Palavras-chave precedidas de # que categorizam e facilitam a busca de conteúdo",
      "Senhas criptografadas",
      "Endereços de e-mail abreviados"
    ],
    correct: 1,
    explanation: "Hashtags são palavras ou frases precedidas por # usadas para categorizar conteúdo e facilitar a descoberta por outros usuários."
  },
  {
    id: 79,
    category: "📱 Redes Sociais",
    question: "O YouTube é uma plataforma principalmente para:",
    options: [
      "Mensagens de texto instantâneas",
      "Compartilhamento e visualização de vídeos",
      "Edição de documentos online",
      "Comércio eletrônico"
    ],
    correct: 1,
    explanation: "O YouTube é a maior plataforma de compartilhamento de vídeos do mundo, pertencente ao Google desde 2006."
  },
  {
    id: 80,
    category: "📱 Redes Sociais",
    question: "No Instagram, o que são 'Stories'?",
    options: [
      "Publicações permanentes no perfil",
      "Conteúdos temporários que desaparecem após 24 horas",
      "Mensagens diretas entre usuários",
      "Álbuns de fotos organizados"
    ],
    correct: 1,
    explanation: "Stories são publicações temporárias (fotos, vídeos, textos) que ficam visíveis por 24 horas e depois desaparecem automaticamente."
  },
  {
    id: 81,
    category: "📱 Redes Sociais",
    question: "O que é engenharia social no contexto de redes sociais?",
    options: [
      "Desenvolvimento de software para redes sociais",
      "Técnica de manipulação psicológica para obter informações confidenciais",
      "Criação de perfis profissionais",
      "Gestão de comunidades online"
    ],
    correct: 1,
    explanation: "Engenharia social é uma técnica de manipulação que explora a confiança das pessoas para obter informações sensíveis ou acesso não autorizado."
  },
  {
    id: 82,
    category: "📱 Redes Sociais",
    question: "O Facebook permite controlar quem vê suas publicações através de:",
    options: [
      "Criptografia de ponta a ponta",
      "Configurações de privacidade (Público, Amigos, Somente eu, etc.)",
      "Certificados digitais",
      "Tokens de autenticação"
    ],
    correct: 1,
    explanation: "O Facebook oferece configurações de privacidade que permitem definir a visibilidade de cada publicação (Público, Amigos, Personalizado, Somente eu)."
  },
  {
    id: 83,
    category: "📱 Redes Sociais",
    question: "O que é um 'perfil falso' (fake profile) em redes sociais?",
    options: [
      "Um perfil verificado pela plataforma",
      "Uma conta criada com informações falsas para enganar outros usuários",
      "Um perfil de empresa",
      "Uma conta de teste oficial da plataforma"
    ],
    correct: 1,
    explanation: "Perfil falso é uma conta criada com dados fictícios ou de terceiros, frequentemente usado para fraudes, cyberbullying ou desinformação."
  },

  // ============================================================
  // 7. SEGURANÇA DA INFORMAÇÃO (Perguntas 84-100)
  // ============================================================
  {
    id: 84,
    category: "🔒 Segurança da Informação",
    question: "O que é um vírus de computador?",
    options: [
      "Um programa que melhora o desempenho do computador",
      "Um programa malicioso que se replica anexando-se a outros arquivos ou programas",
      "Uma atualização do sistema operacional",
      "Um tipo de firewall"
    ],
    correct: 1,
    explanation: "Vírus é um programa malicioso que se replica inserindo cópias de si mesmo em outros programas ou arquivos, dependendo de execução humana para se propagar."
  },
  {
    id: 85,
    category: "🔒 Segurança da Informação",
    question: "O que é um Worm (verme)?",
    options: [
      "Um vírus que destrói hardware",
      "Um malware que se propaga automaticamente pela rede sem necessidade de interação do usuário",
      "Um tipo de firewall",
      "Um programa de backup"
    ],
    correct: 1,
    explanation: "Worm é um malware autorreplicante que se propaga pela rede automaticamente, sem necessitar de um programa hospedeiro ou ação do usuário."
  },
  {
    id: 86,
    category: "🔒 Segurança da Informação",
    question: "O que é um Cavalo de Troia (Trojan)?",
    options: [
      "Um antivírus gratuito",
      "Um malware que se disfarça de software legítimo para enganar o usuário",
      "Um sistema de criptografia",
      "Uma ferramenta de backup"
    ],
    correct: 1,
    explanation: "Trojan é um malware que se apresenta como um programa útil ou legítimo, mas executa ações maliciosas em segundo plano."
  },
  {
    id: 87,
    category: "🔒 Segurança da Informação",
    question: "O que é Ransomware?",
    options: [
      "Um antivírus avançado",
      "Um malware que criptografa arquivos e exige pagamento de resgate para desbloqueá-los",
      "Um tipo de firewall",
      "Um programa de compactação de arquivos"
    ],
    correct: 1,
    explanation: "Ransomware é um malware que criptografa dados da vítima e exige pagamento (geralmente em criptomoedas) para restaurar o acesso."
  },
  {
    id: 88,
    category: "🔒 Segurança da Informação",
    question: "O que é Spyware?",
    options: [
      "Um programa que acelera a internet",
      "Um software que coleta informações do usuário sem seu consentimento",
      "Uma ferramenta de monitoramento legítima",
      "Um tipo de antivírus"
    ],
    correct: 1,
    explanation: "Spyware é um software que monitora e coleta informações sobre atividades do usuário sem seu conhecimento ou consentimento."
  },
  {
    id: 89,
    category: "🔒 Segurança da Informação",
    question: "O que é um Keylogger?",
    options: [
      "Uma chave de criptografia",
      "Um software malicioso que registra tudo que é digitado no teclado",
      "Um gerenciador de senhas",
      "Um tipo de teclado virtual seguro"
    ],
    correct: 1,
    explanation: "Keylogger é um tipo de spyware que registra todas as teclas digitadas pelo usuário, podendo capturar senhas, dados bancários e informações pessoais."
  },
  {
    id: 90,
    category: "🔒 Segurança da Informação",
    question: "O que é autenticação em dois fatores (2FA)?",
    options: [
      "Usar duas senhas diferentes",
      "Um método que combina dois tipos de verificação (algo que você sabe + algo que você tem/é)",
      "Fazer login em dois dispositivos ao mesmo tempo",
      "Ter duas contas no mesmo serviço"
    ],
    correct: 1,
    explanation: "2FA adiciona uma camada extra de segurança usando dois fatores diferentes: algo que você sabe (senha), algo que você tem (celular) ou algo que você é (biometria)."
  },
  {
    id: 91,
    category: "🔒 Segurança da Informação",
    question: "Qual tipo de backup copia TODOS os dados, independentemente de alterações?",
    options: [
      "Backup Incremental",
      "Backup Diferencial",
      "Backup Completo (Full)",
      "Backup Espelhado"
    ],
    correct: 2,
    explanation: "O Backup Completo (Full) copia todos os dados selecionados, independentemente de terem sido alterados ou não desde o último backup."
  },
  {
    id: 92,
    category: "🔒 Segurança da Informação",
    question: "O que é um backup incremental?",
    options: [
      "Copia todos os dados toda vez",
      "Copia apenas os dados alterados desde o último backup de qualquer tipo",
      "Copia apenas os dados alterados desde o último backup completo",
      "Faz uma cópia espelho do disco inteiro"
    ],
    correct: 1,
    explanation: "O Backup Incremental copia apenas os dados que foram alterados desde o último backup (seja completo ou incremental), sendo mais rápido e econômico."
  },
  {
    id: 93,
    category: "🔒 Segurança da Informação",
    question: "Qual é um exemplo de armazenamento em nuvem (cloud storage)?",
    options: [
      "Pen drive",
      "Disco rígido externo",
      "Google Drive, OneDrive, Dropbox",
      "DVD gravável"
    ],
    correct: 2,
    explanation: "Google Drive, OneDrive e Dropbox são serviços de armazenamento em nuvem que permitem guardar e acessar arquivos pela internet."
  },
  {
    id: 94,
    category: "🔒 Segurança da Informação",
    question: "O que é criptografia?",
    options: [
      "Um método para comprimir arquivos",
      "Uma técnica para converter dados legíveis em formato codificado, protegendo informações",
      "Um tipo de antivírus",
      "Um protocolo de rede"
    ],
    correct: 1,
    explanation: "Criptografia é a técnica de codificar dados para que apenas pessoas autorizadas (com a chave correta) possam acessar as informações."
  },
  {
    id: 95,
    category: "🔒 Segurança da Informação",
    question: "O que é um Adware?",
    options: [
      "Um software de administração de redes",
      "Um programa que exibe propagandas indesejadas, geralmente sem consentimento do usuário",
      "Um tipo de antivírus",
      "Um aplicativo de edição de anúncios"
    ],
    correct: 1,
    explanation: "Adware é um software que exibe anúncios publicitários indesejados, frequentemente instalado junto com programas gratuitos."
  },
  {
    id: 96,
    category: "🔒 Segurança da Informação",
    question: "O que é o princípio da confidencialidade na segurança da informação?",
    options: [
      "Garantir que a informação esteja sempre disponível",
      "Garantir que a informação seja acessível apenas por pessoas autorizadas",
      "Garantir que a informação não seja alterada",
      "Garantir que a informação tenha autoria comprovada"
    ],
    correct: 1,
    explanation: "Confidencialidade assegura que as informações sejam acessíveis somente por pessoas, processos ou entidades autorizadas."
  },
  {
    id: 97,
    category: "🔒 Segurança da Informação",
    question: "Quais são os três pilares da segurança da informação (tríade CIA)?",
    options: [
      "Criptografia, Internet e Autenticação",
      "Confidencialidade, Integridade e Disponibilidade",
      "Controle, Investigação e Auditoria",
      "Certificação, Identidade e Acesso"
    ],
    correct: 1,
    explanation: "A tríade CIA (Confidentiality, Integrity, Availability) representa os três pilares fundamentais: Confidencialidade, Integridade e Disponibilidade."
  },
  {
    id: 98,
    category: "🔒 Segurança da Informação",
    question: "O que é um Antispyware?",
    options: [
      "Um programa que bloqueia sites maliciosos",
      "Um software projetado para detectar e remover spywares do computador",
      "Um tipo de firewall",
      "Um protocolo de segurança"
    ],
    correct: 1,
    explanation: "Antispyware é um software especializado em detectar, prevenir e remover spywares e outros programas que espionam o usuário."
  },
  {
    id: 99,
    category: "🔒 Segurança da Informação",
    question: "O que é um ataque DDoS?",
    options: [
      "Um vírus que danifica o hardware",
      "Um ataque que sobrecarrega um servidor com múltiplas requisições simultâneas, tornando-o indisponível",
      "Um tipo de phishing avançado",
      "Uma técnica de criptografia"
    ],
    correct: 1,
    explanation: "DDoS (Distributed Denial of Service) é um ataque em que múltiplos sistemas enviam requisições massivas a um alvo, sobrecarregando e derrubando o serviço."
  },
  {
    id: 100,
    category: "🔒 Segurança da Informação",
    question: "O que é um backup diferencial?",
    options: [
      "Copia todos os dados toda vez",
      "Copia apenas os dados alterados desde o último backup incremental",
      "Copia os dados alterados desde o último backup completo (full)",
      "Copia apenas arquivos de sistema"
    ],
    correct: 2,
    explanation: "O Backup Diferencial copia todos os dados alterados desde o último backup completo (full), acumulando alterações a cada execução."
  }
];
