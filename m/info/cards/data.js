// ============================================================
// BASE DE DADOS DOS FLASHCARDS - Concursos Públicos (Informática)
// 50 flashcards organizados por categoria
// ============================================================

const flashcardsDB = [
  // ──────────────────────────────────────────────
  // 1. SISTEMAS OPERACIONAIS - Windows 10
  // ──────────────────────────────────────────────
  {
    id: 1,
    category: "Sistemas Operacionais",
    subcategory: "Windows 10",
    emoji: "🪟",
    icon: "windows",
    term: "Gerenciador de Tarefas",
    detail: "Acessado pelo atalho Ctrl + Shift + Esc (ou Ctrl + Alt + Del), permite visualizar e encerrar processos, monitorar desempenho de CPU, memória, disco e rede. Muito cobrado: a diferença entre 'Finalizar tarefa' (encerra o app) e 'Finalizar processo' (encerra forçadamente).",
    tip: "⚠️ Em provas: é comum perguntar o atalho e as abas disponíveis (Processos, Desempenho, Histórico, Inicializar, Usuários, Detalhes, Serviços)."
  },
  {
    id: 2,
    category: "Sistemas Operacionais",
    subcategory: "Windows 10",
    emoji: "📁",
    icon: "folder",
    term: "Explorador de Arquivos",
    detail: "Atalho: Win + E. Permite navegar por pastas, copiar, mover e renomear arquivos. O sistema de arquivos padrão do Windows 10 é o NTFS, que suporta permissões, criptografia (EFS), compactação e arquivos maiores que 4 GB.",
    tip: "⚠️ Em provas: FAT32 não suporta arquivos > 4 GB. NTFS é o padrão. exFAT é usado em pendrives para compatibilidade."
  },
  {
    id: 3,
    category: "Sistemas Operacionais",
    subcategory: "Windows 10",
    emoji: "⌨️",
    icon: "keyboard",
    term: "Atalhos do Windows 10",
    detail: "Win + D = Área de trabalho | Win + L = Bloquear | Win + I = Configurações | Win + R = Executar | Win + S = Pesquisar | Alt + Tab = Alternar janelas | Alt + F4 = Fechar janela | Ctrl + Z = Desfazer | Ctrl + Y = Refazer.",
    tip: "⚠️ Em provas: Win + E (Explorador), Win + Pause/Break (Propriedades do Sistema) e Print Screen (captura tela) são os mais cobrados."
  },
  {
    id: 4,
    category: "Sistemas Operacionais",
    subcategory: "Windows 10",
    emoji: "🔧",
    icon: "settings",
    term: "Painel de Controle vs Configurações",
    detail: "O Windows 10 possui dois locais de configuração: o Painel de Controle (legado, acesso por 'control') e o app Configurações (Win + I). A Microsoft está migrando funções para Configurações. O Painel de Controle ainda contém opções avançadas como Ferramentas Administrativas.",
    tip: "⚠️ Em provas: Perguntas sobre onde encontrar determinada configuração — programas padrão, impressoras, firewall, atualizações."
  },
  {
    id: 5,
    category: "Sistemas Operacionais",
    subcategory: "Windows 10",
    emoji: "💾",
    icon: "disk",
    term: "Versões 32 bits vs 64 bits",
    detail: "A versão de 32 bits suporta no máximo 4 GB de RAM. A versão de 64 bits suporta até 128 GB (Home) ou 2 TB (Pro). Programas de 32 bits rodam em 64 bits (via WoW64), mas o contrário NÃO é possível. A pasta 'Program Files (x86)' armazena apps de 32 bits.",
    tip: "⚠️ Em provas: A limitação de 4 GB na versão 32 bits é a questão mais frequente sobre este tema."
  },
  {
    id: 6,
    category: "Sistemas Operacionais",
    subcategory: "Windows 10",
    emoji: "🛡️",
    icon: "shield",
    term: "Windows Defender",
    detail: "Antivírus nativo do Windows 10, oferece proteção em tempo real contra vírus, malware e spyware. Inclui Firewall do Windows, Proteção contra ransomware (Acesso controlado a pastas) e Windows Hello (autenticação biométrica).",
    tip: "⚠️ Em provas: É gratuito e já vem integrado. Pode ser desativado ao instalar outro antivírus."
  },
  // ──────────────────────────────────────────────
  // 1.2 SISTEMAS OPERACIONAIS - Linux (SUSE)
  // ──────────────────────────────────────────────
  {
    id: 7,
    category: "Sistemas Operacionais",
    subcategory: "Linux / SUSE",
    emoji: "🐧",
    icon: "linux",
    term: "Estrutura de Diretórios Linux",
    detail: "/ (raiz) | /home (usuários) | /etc (configurações) | /var (logs, dados variáveis) | /tmp (temporários) | /bin e /sbin (binários do sistema) | /usr (programas do usuário) | /root (home do superusuário) | /dev (dispositivos) | /boot (inicialização).",
    tip: "⚠️ Em provas: A raiz é '/' (e não C:\\). O /etc é o diretório de configurações mais cobrado."
  },
  {
    id: 8,
    category: "Sistemas Operacionais",
    subcategory: "Linux / SUSE",
    emoji: "📟",
    icon: "terminal",
    term: "Comandos Básicos do Linux",
    detail: "ls (listar) | cd (mudar diretório) | cp (copiar) | mv (mover/renomear) | rm (remover) | mkdir (criar pasta) | chmod (permissões) | chown (dono) | cat (exibir arquivo) | grep (buscar texto) | sudo (executar como root) | man (manual).",
    tip: "⚠️ Em provas: chmod 755 = rwxr-xr-x. O 'rm -rf' remove recursivamente sem confirmação. 'sudo' eleva privilégios."
  },
  {
    id: 9,
    category: "Sistemas Operacionais",
    subcategory: "Linux / SUSE",
    emoji: "🔐",
    icon: "lock",
    term: "Permissões no Linux (chmod)",
    detail: "Cada arquivo tem 3 grupos de permissão: Dono (u), Grupo (g), Outros (o). Cada grupo pode ter: Leitura (r=4), Escrita (w=2), Execução (x=1). Exemplo: chmod 754 → Dono: rwx(7), Grupo: r-x(5), Outros: r--(4).",
    tip: "⚠️ Em provas: Conversão entre notação octal (755) e simbólica (rwxr-xr-x) é frequentíssima!"
  },
  {
    id: 10,
    category: "Sistemas Operacionais",
    subcategory: "Linux / SUSE",
    emoji: "📦",
    icon: "package",
    term: "Gerenciador de Pacotes (SUSE)",
    detail: "O SUSE Linux usa o gerenciador YaST (Yet another Setup Tool) para administração do sistema e o zypper como gerenciador de pacotes via terminal. Pacotes são no formato .rpm. Comandos: zypper install, zypper remove, zypper update.",
    tip: "⚠️ Em provas: SUSE usa RPM (como Red Hat/Fedora). Debian/Ubuntu usam .deb e apt-get."
  },
  // ──────────────────────────────────────────────
  // 2. EDIÇÃO DE TEXTOS, PLANILHAS E APRESENTAÇÕES
  // ──────────────────────────────────────────────
  {
    id: 11,
    category: "Office 365",
    subcategory: "Microsoft Word",
    emoji: "📝",
    icon: "word",
    term: "Formatação no Word",
    detail: "Ctrl + N = Negrito | Ctrl + I = Itálico | Ctrl + S = Sublinhado | Ctrl + E = Centralizar | Ctrl + J = Justificar | Ctrl + L = Alinhar à esquerda | Ctrl + G = Alinhar à direita. Estilos (Título 1, 2, 3) permitem criar sumários automáticos.",
    tip: "⚠️ Em provas: Diferenciar formatação de caractere (negrito, fonte) vs parágrafo (alinhamento, espaçamento). O sumário automático depende dos Estilos."
  },
  {
    id: 12,
    category: "Office 365",
    subcategory: "Microsoft Word",
    emoji: "📄",
    icon: "document",
    term: "Mala Direta (Word)",
    detail: "Recurso que permite criar documentos personalizados em massa (cartas, etiquetas, envelopes) combinando um documento principal com uma fonte de dados (Excel, Access, CSV). Abas: Correspondências → Iniciar Mala Direta → Selecionar Destinatários → Inserir Campos.",
    tip: "⚠️ Em provas: A fonte de dados pode ser uma planilha Excel. Os campos de mesclagem aparecem entre << >>."
  },
  {
    id: 13,
    category: "Office 365",
    subcategory: "Microsoft Word",
    emoji: "💾",
    icon: "save",
    term: "Formatos de Arquivo (Word)",
    detail: ".docx = formato padrão do Word (XML) | .doc = formato antigo (97-2003) | .pdf = Portable Document Format | .odt = formato do LibreOffice Writer | .rtf = Rich Text Format (compatibilidade universal). O Word pode salvar em todos esses formatos via 'Salvar Como'.",
    tip: "⚠️ Em provas: .docx NÃO abre nativamente em versões antigas sem o pacote de compatibilidade. PDF pode ser editado no Word 2013+."
  },
  {
    id: 14,
    category: "Office 365",
    subcategory: "Microsoft Excel",
    emoji: "📊",
    icon: "chart",
    term: "Funções Essenciais do Excel",
    detail: "=SOMA(A1:A10) → soma valores | =MÉDIA(A1:A10) → média | =SE(condição;verdadeiro;falso) → condicional | =CONT.SE(intervalo;critério) → conta se | =PROCV(valor;tabela;coluna;0) → busca vertical | =CONCATENAR() ou & → unir textos.",
    tip: "⚠️ Em provas: PROCV é a função mais cobrada! O 4º argumento 0 = correspondência exata e 1 = aproximada."
  },
  {
    id: 15,
    category: "Office 365",
    subcategory: "Microsoft Excel",
    emoji: "🔗",
    icon: "link",
    term: "Referências no Excel ($ cifrão)",
    detail: "Relativa: A1 (muda ao copiar) | Absoluta: $A$1 (não muda) | Mista: $A1 ou A$1 (fixa coluna ou linha). O atalho F4 alterna entre os tipos de referência. Referências absolutas são essenciais em fórmulas copiadas para outras células.",
    tip: "⚠️ Em provas: Questões pedem para prever o resultado de fórmulas copiadas. Sem $, a referência se desloca."
  },
  {
    id: 16,
    category: "Office 365",
    subcategory: "Microsoft Excel",
    emoji: "📈",
    icon: "trending",
    term: "Gráficos e Tabela Dinâmica",
    detail: "Gráficos: Inserir → Gráfico (Barras, Pizza, Linhas, Dispersão). Tabela Dinâmica: resume e analisa grandes volumes de dados. Criada via Inserir → Tabela Dinâmica. Permite arrastar campos para Linhas, Colunas, Valores e Filtros.",
    tip: "⚠️ Em provas: Tabela Dinâmica é para ANÁLISE de dados. Gráfico de Pizza é para proporções. Gráfico de Linhas para tendências ao longo do tempo."
  },
  {
    id: 17,
    category: "Office 365",
    subcategory: "Microsoft Excel",
    emoji: "🧮",
    icon: "calculator",
    term: "Formatação Condicional (Excel)",
    detail: "Aplica formatação visual automática baseada em regras. Ex: células > 100 ficam verdes, < 0 ficam vermelhas. Acessível em Página Inicial → Formatação Condicional. Tipos: Regras de Realce, Barras de Dados, Escalas de Cor, Conjuntos de Ícones.",
    tip: "⚠️ Em provas: Formatação condicional NÃO altera o valor da célula, apenas a aparência. Pode usar fórmulas personalizadas."
  },
  {
    id: 18,
    category: "Office 365",
    subcategory: "Microsoft PowerPoint",
    emoji: "🎬",
    icon: "presentation",
    term: "Apresentações no PowerPoint",
    detail: "F5 = iniciar apresentação do início | Shift + F5 = iniciar do slide atual | Ctrl + M = novo slide | Layouts definem a disposição de elementos. Modos de exibição: Normal, Classificação de Slides, Anotações, Leitura, Apresentação de Slides.",
    tip: "⚠️ Em provas: F5 vs Shift+F5 é muito cobrado. Animações são efeitos em objetos. Transições são efeitos entre slides."
  },
  {
    id: 19,
    category: "Office 365",
    subcategory: "Microsoft PowerPoint",
    emoji: "✨",
    icon: "sparkle",
    term: "Transições vs Animações (PPT)",
    detail: "Transição: efeito visual na TROCA entre slides (ex: Esmaecer, Empurrar, Cortina). Animação: efeito em OBJETOS dentro do slide (ex: Aparecer, Desaparecer, Zoom). Categorias de animação: Entrada, Ênfase, Saída, Trajetórias de Animação.",
    tip: "⚠️ Em provas: Bancas tentam confundir os dois conceitos. Transição = entre slides. Animação = dentro do slide."
  },
  {
    id: 20,
    category: "Office 365",
    subcategory: "Office 365 Geral",
    emoji: "☁️",
    icon: "cloud",
    term: "Office 365 na Nuvem",
    detail: "O Microsoft 365 permite edição colaborativa em tempo real via OneDrive e SharePoint. Versões web (Word Online, Excel Online) funcionam no navegador. Salvamento automático na nuvem. Coautoria permite que vários usuários editem simultaneamente.",
    tip: "⚠️ Em provas: Office 365 é por assinatura (SaaS). Diferente das versões perpétuas (Office 2019, 2021). Requer internet para ativar."
  },
  // ──────────────────────────────────────────────
  // 3. REDES DE COMPUTADORES
  // ──────────────────────────────────────────────
  {
    id: 21,
    category: "Redes de Computadores",
    subcategory: "Conceitos Básicos",
    emoji: "🌐",
    icon: "globe",
    term: "Modelo OSI (7 Camadas)",
    detail: "7-Aplicação | 6-Apresentação | 5-Sessão | 4-Transporte | 3-Rede | 2-Enlace | 1-Física. Macete: 'Aplicação Apresenta a Sessão ao Transporte pela Rede com Enlace Físico'. O modelo TCP/IP simplifica em 4 camadas: Aplicação, Transporte, Internet, Acesso à Rede.",
    tip: "⚠️ Em provas: HTTP e FTP estão na camada de Aplicação. TCP e UDP na de Transporte. IP na de Rede."
  },
  {
    id: 22,
    category: "Redes de Computadores",
    subcategory: "Conceitos Básicos",
    emoji: "📡",
    icon: "antenna",
    term: "Protocolos TCP vs UDP",
    detail: "TCP (Transmission Control Protocol): Confiável, orientado a conexão, garante entrega e ordem dos pacotes. Usado em HTTP, FTP, e-mail. UDP (User Datagram Protocol): Não confiável, sem conexão, mais rápido. Usado em streaming, VoIP, DNS, jogos online.",
    tip: "⚠️ Em provas: TCP = confiável com handshake de 3 vias (SYN, SYN-ACK, ACK). UDP = rápido mas sem garantia."
  },
  {
    id: 23,
    category: "Redes de Computadores",
    subcategory: "Conceitos Básicos",
    emoji: "🔢",
    icon: "numbers",
    term: "Endereço IP e Sub-rede",
    detail: "IPv4: 32 bits, formato X.X.X.X (ex: 192.168.1.1). Classes: A (1-126), B (128-191), C (192-223). IPs privados: 10.x.x.x, 172.16-31.x.x, 192.168.x.x. IPv6: 128 bits, formato hexadecimal (ex: 2001:0db8::1). Máscara de sub-rede divide rede/host.",
    tip: "⚠️ Em provas: 127.0.0.1 = localhost (loopback). IPs privados NÃO navegam diretamente na Internet (precisam de NAT)."
  },
  {
    id: 24,
    category: "Redes de Computadores",
    subcategory: "Conceitos Básicos",
    emoji: "🔌",
    icon: "plug",
    term: "Topologias de Rede",
    detail: "Estrela: todos conectados a um switch central (mais usada). Barramento: cabo único compartilhado (obsoleta). Anel: dados circulam em uma direção. Malha: todos interconectados (alta redundância). A topologia em estrela é a padrão em redes Ethernet atuais.",
    tip: "⚠️ Em provas: Estrela é a mais comum e cobrada. Se o switch falha, toda a rede cai. Malha é a mais redundante."
  },
  {
    id: 25,
    category: "Redes de Computadores",
    subcategory: "Ferramentas e Aplicativos",
    emoji: "🛠️",
    icon: "tools",
    term: "Ferramentas de Rede",
    detail: "ping: testa conectividade (ICMP) | tracert/traceroute: mostra caminho dos pacotes | ipconfig/ifconfig: configurações de rede | nslookup: consulta DNS | netstat: conexões ativas | nmap: varredura de portas. No Windows usa-se 'ipconfig', no Linux 'ifconfig' ou 'ip addr'.",
    tip: "⚠️ Em provas: 'ping' usa o protocolo ICMP (não TCP nem UDP). 'ipconfig /all' mostra MAC, DNS e Gateway."
  },
  {
    id: 26,
    category: "Redes de Computadores",
    subcategory: "Internet e Intranet",
    emoji: "🏢",
    icon: "building",
    term: "Internet vs Intranet vs Extranet",
    detail: "Internet: rede mundial, pública, acesso irrestrito. Intranet: rede privada de uma organização, usa mesmos protocolos (TCP/IP, HTTP), acesso restrito a funcionários. Extranet: parte da Intranet acessível a parceiros externos autorizados (ex: fornecedores, clientes).",
    tip: "⚠️ Em provas: Intranet usa as MESMAS tecnologias da Internet (navegador, HTTP, FTP). A diferença é o ACESSO restrito."
  },
  {
    id: 27,
    category: "Redes de Computadores",
    subcategory: "Conceitos Básicos",
    emoji: "📶",
    icon: "wifi",
    term: "Wi-Fi e Padrões IEEE 802.11",
    detail: "802.11b: 11 Mbps (2.4 GHz) | 802.11g: 54 Mbps (2.4 GHz) | 802.11n (Wi-Fi 4): 600 Mbps (2.4/5 GHz) | 802.11ac (Wi-Fi 5): 6.9 Gbps (5 GHz) | 802.11ax (Wi-Fi 6): 9.6 Gbps (2.4/5/6 GHz). A segurança evoluiu: WEP → WPA → WPA2 (AES) → WPA3.",
    tip: "⚠️ Em provas: WPA2 com AES é o padrão seguro mais cobrado. WEP é inseguro e obsoleto."
  },
  {
    id: 28,
    category: "Redes de Computadores",
    subcategory: "Conceitos Básicos",
    emoji: "🔄",
    icon: "sync",
    term: "DNS (Domain Name System)",
    detail: "Traduz nomes de domínio (www.google.com) para endereços IP (142.250.80.46). Funciona de forma hierárquica: Raiz → TLD (.com, .br) → Domínio → Subdomínio. O servidor DNS pode ser configurado manualmente (ex: Google DNS 8.8.8.8). Porta padrão: 53.",
    tip: "⚠️ Em provas: DNS usa a porta 53. É como uma 'lista telefônica' da Internet. Sem DNS, seria necessário decorar IPs."
  },
  // ──────────────────────────────────────────────
  // 4. NAVEGADORES WEB
  // ──────────────────────────────────────────────
  {
    id: 29,
    category: "Navegadores Web",
    subcategory: "Microsoft Edge",
    emoji: "🌊",
    icon: "edge",
    term: "Microsoft Edge (Chromium)",
    detail: "Baseado no Chromium (mesmo motor do Chrome). Recursos: Coleções (organizar pesquisas), Leitura Avançada (Imersiva), Barra Lateral, Modo IE (compatibilidade), PDF integrado. Suporta extensões da Chrome Web Store. Atalhos iguais ao Chrome.",
    tip: "⚠️ Em provas: Edge substituiu o Internet Explorer. É baseado em Chromium desde 2020. Ctrl+Shift+Del limpa dados."
  },
  {
    id: 30,
    category: "Navegadores Web",
    subcategory: "Mozilla Firefox",
    emoji: "🦊",
    icon: "firefox",
    term: "Mozilla Firefox (ESR)",
    detail: "Navegador open-source da Mozilla. ESR = Extended Support Release (atualizações de segurança estendidas, ideal para empresas). Recursos: Proteção Aprimorada contra Rastreamento, containers, about:config (configurações avançadas), sincronização via Firefox Account.",
    tip: "⚠️ Em provas: Firefox é software LIVRE (código aberto). A versão ESR é para ambientes corporativos com suporte prolongado."
  },
  {
    id: 31,
    category: "Navegadores Web",
    subcategory: "Recursos Gerais",
    emoji: "🔒",
    icon: "padlock",
    term: "Navegação Privada / InPrivate",
    detail: "Não salva histórico, cookies, dados de formulário ou cache ao fechar a janela. Firefox: Ctrl+Shift+P (Navegação Privativa). Edge/Chrome: Ctrl+Shift+N (InPrivate/Anônimo). IMPORTANTE: NÃO garante anonimato total — o provedor de Internet e sites ainda podem rastrear.",
    tip: "⚠️ Em provas: Navegação privada NÃO é VPN. O empregador e o provedor AINDA podem ver o tráfego."
  },
  {
    id: 32,
    category: "Navegadores Web",
    subcategory: "Mecanismos de Busca",
    emoji: "🔍",
    icon: "search",
    term: "Operadores de Busca (Google)",
    detail: "\"aspas\" = busca exata | site:dominio.com = busca dentro de um site | -termo = excluir termo | filetype:pdf = buscar tipo de arquivo | OR = alternativa | * = curinga | intitle: = no título | inurl: = na URL | cache: = versão em cache.",
    tip: "⚠️ Em provas: 'site:gov.br concurso' busca apenas em sites .gov.br. 'filetype:pdf' é frequentemente cobrado."
  },
  {
    id: 33,
    category: "Navegadores Web",
    subcategory: "Recursos Gerais",
    emoji: "📑",
    icon: "tabs",
    term: "Atalhos de Navegadores",
    detail: "Ctrl + T = nova aba | Ctrl + W = fechar aba | Ctrl + Shift + T = reabrir última aba fechada | Ctrl + L ou F6 = barra de endereço | Ctrl + D = adicionar favorito | Ctrl + H = histórico | Ctrl + J = downloads | F11 = tela cheia | F5 = atualizar.",
    tip: "⚠️ Em provas: Ctrl + Shift + T (reabrir aba) é um dos mais cobrados. Funciona no Chrome, Edge e Firefox."
  },
  // ──────────────────────────────────────────────
  // 5. CORREIO ELETRÔNICO
  // ──────────────────────────────────────────────
  {
    id: 34,
    category: "Correio Eletrônico",
    subcategory: "Conceitos",
    emoji: "📧",
    icon: "email",
    term: "Protocolos de E-mail",
    detail: "SMTP (porta 587/465): envio de e-mails. POP3 (porta 110/995): recebimento com download (remove do servidor por padrão). IMAP (porta 143/993): recebimento com sincronização (mantém no servidor). Webmail usa HTTP/HTTPS para acesso via navegador.",
    tip: "⚠️ Em provas: SMTP = ENVIAR. POP3 = baixa e apaga. IMAP = sincroniza e mantém no servidor. IMAP é o mais moderno."
  },
  {
    id: 35,
    category: "Correio Eletrônico",
    subcategory: "Conceitos",
    emoji: "📨",
    icon: "inbox",
    term: "CC, CCO e Campos do E-mail",
    detail: "Para (To): destinatário principal. CC (Com Cópia): destinatários secundários visíveis a todos. CCO/BCC (Com Cópia Oculta): destinatários ocultos — ninguém vê quem está em CCO. Assunto: título do e-mail. Anexo: arquivo adicionado à mensagem.",
    tip: "⚠️ Em provas: CCO é usado para enviar e-mail em massa sem revelar os destinatários. É uma questão clássica!"
  },
  {
    id: 36,
    category: "Correio Eletrônico",
    subcategory: "Ferramentas",
    emoji: "📬",
    icon: "mailbox",
    term: "Webmail vs Cliente de E-mail",
    detail: "Webmail: acesso pelo navegador (Gmail, Outlook.com, Yahoo Mail). Não precisa de instalação. Cliente de e-mail: aplicativo instalado (Outlook, Thunderbird). Permite trabalhar offline e gerenciar múltiplas contas. Thunderbird é gratuito e open-source da Mozilla.",
    tip: "⚠️ Em provas: O Outlook (desktop) é um cliente de e-mail. O Outlook.com é um webmail. São coisas DIFERENTES."
  },
  {
    id: 37,
    category: "Correio Eletrônico",
    subcategory: "Conceitos",
    emoji: "⚠️",
    icon: "warning",
    term: "Phishing por E-mail",
    detail: "Técnica de engenharia social que usa e-mails falsos imitando instituições legítimas (bancos, governo) para roubar dados. Sinais: remetente suspeito, erros de português, links diferentes do texto exibido, urgência excessiva, anexos inesperados.",
    tip: "⚠️ Em provas: Phishing é a ameaça por e-mail MAIS cobrada. Spear phishing é direcionado a uma pessoa específica."
  },
  // ──────────────────────────────────────────────
  // 6. REDES SOCIAIS
  // ──────────────────────────────────────────────
  {
    id: 38,
    category: "Redes Sociais",
    subcategory: "Conceitos Gerais",
    emoji: "👥",
    icon: "people",
    term: "Características das Redes Sociais",
    detail: "Plataformas de interação digital. X/Twitter: microblogging (posts curtos). Instagram: foco em imagens e stories. Facebook: a maior rede social. LinkedIn: rede profissional. YouTube: vídeos. Todas utilizam algoritmos de recomendação baseados em engajamento.",
    tip: "⚠️ Em provas: LinkedIn é a rede PROFISSIONAL. YouTube é a maior plataforma de VÍDEOS. Twitter permite 280 caracteres."
  },
  {
    id: 39,
    category: "Redes Sociais",
    subcategory: "Conceitos Gerais",
    emoji: "🔏",
    icon: "privacy",
    term: "Privacidade em Redes Sociais",
    detail: "Configurações de privacidade controlam quem vê suas publicações (público, amigos, privado). Autenticação em dois fatores (2FA) aumenta a segurança. A LGPD (Lei Geral de Proteção de Dados) regula o uso de dados pessoais por plataformas no Brasil.",
    tip: "⚠️ Em provas: A LGPD (Lei 13.709/2018) é frequentemente cobrada junto com redes sociais e segurança da informação."
  },
  {
    id: 40,
    category: "Redes Sociais",
    subcategory: "Conceitos Gerais",
    emoji: "📢",
    icon: "megaphone",
    term: "Fake News e Desinformação",
    detail: "Notícias falsas compartilhadas em redes sociais. Tipos: Misinformação (erro sem intenção), Desinformação (intencional), Malinformação (verdadeira mas usada para prejudicar). Combate: verificar fonte, checar data, desconfiar de manchetes sensacionalistas, usar fact-checking.",
    tip: "⚠️ Em provas: Diferenciar misinformação (sem intenção de enganar) de desinformação (com intenção de enganar)."
  },
  // ──────────────────────────────────────────────
  // 7. SEGURANÇA DA INFORMAÇÃO
  // ──────────────────────────────────────────────
  {
    id: 41,
    category: "Segurança da Informação",
    subcategory: "Conceitos",
    emoji: "🔑",
    icon: "key",
    term: "Princípios da Segurança (CID)",
    detail: "Confidencialidade: garantir que apenas pessoas autorizadas acessem a informação (criptografia). Integridade: garantir que a informação não seja alterada indevidamente (hash). Disponibilidade: garantir que a informação esteja acessível quando necessário (backup, redundância).",
    tip: "⚠️ Em provas: CID (ou CIA em inglês) é a BASE de toda questão de segurança. Autenticidade e Não-repúdio são complementares."
  },
  {
    id: 42,
    category: "Segurança da Informação",
    subcategory: "Conceitos",
    emoji: "🔐",
    icon: "encryption",
    term: "Criptografia Simétrica vs Assimétrica",
    detail: "Simétrica: mesma chave para cifrar e decifrar (AES, DES, 3DES). Mais rápida. Assimétrica: par de chaves pública/privada (RSA, ECC). Pública cifra, privada decifra. Assinatura digital: privada assina, pública verifica. HTTPS usa ambas (híbrida).",
    tip: "⚠️ Em provas: Assimétrica resolve o problema de distribuição de chaves. Assinatura digital garante autenticidade e integridade."
  },
  {
    id: 43,
    category: "Segurança da Informação",
    subcategory: "Vírus",
    emoji: "🦠",
    icon: "virus",
    term: "Vírus de Computador",
    detail: "Programa malicioso que se ANEXA a arquivos legítimos e depende de ação do usuário para se propagar. Tipos: Vírus de Boot (setor de inicialização), Vírus de Macro (documentos Office), Vírus Polimórfico (muda seu código), Vírus Stealth (esconde-se do antivírus).",
    tip: "⚠️ Em provas: Vírus PRECISA de hospedeiro e ação do usuário. Worm se propaga SOZINHO pela rede. Essa é a diferença chave!"
  },
  {
    id: 44,
    category: "Segurança da Informação",
    subcategory: "Worms",
    emoji: "🐛",
    icon: "worm",
    term: "Worms (Vermes)",
    detail: "Malware que se propaga AUTOMATICAMENTE pela rede, sem necessidade de ação do usuário ou arquivo hospedeiro. Consome recursos de rede e pode derrubar servidores. Não precisa se anexar a programas. Exemplos históricos: Blaster, Sasser, WannaCry (ransomworm).",
    tip: "⚠️ Em provas: WORM = automático, pela rede, sem hospedeiro. VÍRUS = precisa de ação do usuário e arquivo hospedeiro."
  },
  {
    id: 45,
    category: "Segurança da Informação",
    subcategory: "Outros Malwares",
    emoji: "🐴",
    icon: "trojan",
    term: "Trojan (Cavalo de Troia)",
    detail: "Programa que parece legítimo mas contém código malicioso oculto. NÃO se replica automaticamente. O usuário instala pensando ser algo útil. Tipos: Trojan Downloader (baixa outros malwares), Trojan Banker (rouba dados bancários), Trojan Backdoor (abre porta de acesso remoto).",
    tip: "⚠️ Em provas: Trojan NÃO se replica (diferente de vírus e worm). Engana o usuário com aparência legítima."
  },
  {
    id: 46,
    category: "Segurança da Informação",
    subcategory: "Outros Malwares",
    emoji: "👁️",
    icon: "spy",
    term: "Spyware e Keylogger",
    detail: "Spyware: coleta informações do usuário sem consentimento. Tipos: Keylogger (registra teclas digitadas), Screenlogger (captura telas), Adware (exibe propagandas). Pode ser instalado por trojans ou junto com softwares gratuitos. Combate: antispyware e antivírus.",
    tip: "⚠️ Em provas: Keylogger captura TECLADO. Screenlogger captura TELA. Adware exibe PROPAGANDAS. Todos são tipos de spyware."
  },
  {
    id: 47,
    category: "Segurança da Informação",
    subcategory: "Outros Malwares",
    emoji: "💰",
    icon: "ransom",
    term: "Ransomware",
    detail: "Malware que CRIPTOGRAFA os arquivos da vítima e exige RESGATE (ransom) em criptomoedas para devolver o acesso. Tipos: Crypto (criptografa arquivos) e Locker (bloqueia o acesso ao sistema). Exemplo famoso: WannaCry (2017). Prevenção: backup atualizado!",
    tip: "⚠️ Em provas: Ransomware é o malware 'sequestrador'. O principal método de prevenção é o BACKUP atualizado e offline."
  },
  {
    id: 48,
    category: "Segurança da Informação",
    subcategory: "Aplicativos de Segurança",
    emoji: "🧱",
    icon: "firewall",
    term: "Firewall",
    detail: "Sistema que FILTRA o tráfego de rede com base em regras pré-definidas. Pode ser hardware (appliance) ou software (Windows Firewall). Controla entrada e saída de dados. NÃO é antivírus — não analisa conteúdo de malware, apenas regras de conexão (IP, porta, protocolo).",
    tip: "⚠️ Em provas: Firewall FILTRA pacotes. NÃO detecta vírus. NÃO substitui antivírus. Pode bloquear portas e IPs."
  },
  {
    id: 49,
    category: "Segurança da Informação",
    subcategory: "Aplicativos de Segurança",
    emoji: "🛡️",
    icon: "antivirus",
    term: "Antivírus e Antispyware",
    detail: "Antivírus: detecta, previne e remove malwares. Métodos: assinatura (banco de dados de ameaças conhecidas), heurística (análise de comportamento), sandbox (execução isolada). Antispyware: focado em spywares. Muitos antivírus modernos incluem proteção antispyware integrada.",
    tip: "⚠️ Em provas: Heurística detecta ameaças NOVAS/desconhecidas. Assinatura detecta apenas ameaças JÁ catalogadas."
  },
  {
    id: 50,
    category: "Segurança da Informação",
    subcategory: "Backup e Nuvem",
    emoji: "☁️",
    icon: "backup",
    term: "Backup e Armazenamento em Nuvem",
    detail: "Tipos de backup: Completo (tudo), Incremental (apenas alterações desde o ÚLTIMO backup), Diferencial (alterações desde o último backup COMPLETO). Nuvem (Cloud): OneDrive, Google Drive, Dropbox, iCloud. IaaS, PaaS, SaaS são modelos de serviço em nuvem.",
    tip: "⚠️ Em provas: Incremental é mais RÁPIDO para fazer, mas mais LENTO para restaurar. Diferencial é o meio-termo. Completo é o mais seguro."
  }
];

// Função para embaralhar (Fisher-Yates shuffle)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Mapeamento de cores por categoria
const categoryColors = {
  "Sistemas Operacionais": { primary: "#6366f1", gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)", bg: "rgba(99,102,241,0.12)", glow: "rgba(99,102,241,0.3)" },
  "Office 365": { primary: "#0ea5e9", gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)", bg: "rgba(14,165,233,0.12)", glow: "rgba(14,165,233,0.3)" },
  "Redes de Computadores": { primary: "#10b981", gradient: "linear-gradient(135deg, #10b981, #34d399)", bg: "rgba(16,185,129,0.12)", glow: "rgba(16,185,129,0.3)" },
  "Navegadores Web": { primary: "#f59e0b", gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)", bg: "rgba(245,158,11,0.12)", glow: "rgba(245,158,11,0.3)" },
  "Correio Eletrônico": { primary: "#ec4899", gradient: "linear-gradient(135deg, #ec4899, #f472b6)", bg: "rgba(236,72,153,0.12)", glow: "rgba(236,72,153,0.3)" },
  "Redes Sociais": { primary: "#8b5cf6", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)", bg: "rgba(139,92,246,0.12)", glow: "rgba(139,92,246,0.3)" },
  "Segurança da Informação": { primary: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #f87171)", bg: "rgba(239,68,68,0.12)", glow: "rgba(239,68,68,0.3)" }
};

// Ícones SVG por categoria
const categoryIcons = {
  "Sistemas Operacionais": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  "Office 365": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  "Redes de Computadores": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  "Navegadores Web": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/><line x1="10.88" y1="21.94" x2="15.46" y2="14"/></svg>`,
  "Correio Eletrônico": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  "Redes Sociais": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  "Segurança da Informação": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
};
