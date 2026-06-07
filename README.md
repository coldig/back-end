# ColDig - Back-end

Um backend robusto desenvolvido em **Django 6.0.4** para gerenciamento de agendamentos e calendários. O projeto é configurado com melhorias de segurança, suporte a múltiplos ambientes e está pronto para produção.

## 🎯 Sobre o Projeto

Este é o servidor back-end do ColDig, uma aplicação de agendamentos e gestão de calendários. O sistema foi desenvolvido seguindo boas práticas de desenvolvimento Django, com configurações otimizadas para performance e segurança.

## 🛠️ Tecnologias Utilizadas

- **Django** 6.0.4 - Framework web Python
- **Python** - Linguagem de programação
- **SQLite** - Banco de dados (desenvolvimento)
- **WhiteNoise** - Middleware para servir arquivos estáticos
- **Segurança SSL** - Redirecionamento HTTPS habilitado

## 📁 Estrutura do Projeto

```
coldig/back-end/
├── core/              # Configurações principais do projeto Django
├── calendario/        # App principal para gerenciamento de agendamentos
├── static/            # Arquivos estáticos (CSS, JavaScript, imagens)
├── staticfiles/       # Arquivos estáticos compilados
├── templates/         # Templates HTML
├── manage.py          # Script de gerenciamento Django
└── db.sqlite3         # Banco de dados local
```

## 🚀 Principais Funcionalidades

- **Sistema de Agendamentos** - Página dedicada para agendar compromissos
- **Visualização de Agendamentos** - Interface para consultar agendamentos cadastrados
- **Autenticação Django** - Sistema de autenticação nativo
- **Admin Django** - Painel administrativo para gerenciar dados
- **Internacionalização** - Configurado para português brasileiro (pt-BR)
- **Fuso Horário** - America/Sao_Paulo

## 🔧 Configurações de Segurança

- SSL/HTTPS habilitado para produção
- Middleware de segurança implementado
- Proteção CSRF ativa
- Compressão de arquivos estáticos com WhiteNoise
- Hosts permitidos configuráveis

## 📋 Pré-requisitos

- Python 3.8+
- pip (gerenciador de pacotes Python)
- Django 6.0.4

## 🚀 Como Executar

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/coldig/back-end.git
   cd back-end
   ```

2. **Crie um ambiente virtual:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # No Windows: venv\Scripts\activate
   ```

3. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Execute as migrações do banco de dados:**
   ```bash
   python manage.py migrate
   ```

5. **Inicie o servidor:**
   ```bash
   python manage.py runserver
   ```

6. **Acesse a aplicação:**
   - Servidor local: `http://localhost:8000`
   - Admin Django: `http://localhost:8000/admin`

## 📊 Endpoints Principais

- `/agendar` - Página para criar novo agendamento
- `/agendamentos` - Listagem de agendamentos cadastrados
- `/admin` - Painel administrativo Django

## 💡 Desenvolvimento

### Criar um Super Usuário (para admin):
```bash
python manage.py createsuperuser
```

### Coletar arquivos estáticos:
```bash
python manage.py collectstatic --noinput
```

## 📦 Dependências Principais

- django==6.0.4
- whitenoise - Middleware para servir arquivos estáticos eficientemente

## 🌐 Idioma e Localização

- **Idioma:** Português Brasil (pt-BR)
- **Fuso Horário:** America/Sao_Paulo

## 📝 Licença

[Adicione aqui a licença do seu projeto]

## 👥 Contribuidores

- [Seu Nome/Organização]

## 📧 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.
