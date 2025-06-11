
# 🏡 Mô Cubico – Plataforma de Gestão Imobiliária Inteligente

**Mô Cubico** é uma API backend robusta e escalável desenvolvida com Node.js, Express e Supabase, que oferece funcionalidades completas para o **gerenciamento digital de imóveis** para venda ou arrendamento em Angola. O sistema é preparado para múltiplos perfis de utilizadores (administradores, proprietários, intermediários, inquilinos), com autenticação segura via Supabase Auth, permissões baseadas em papéis (RBAC) e integração com armazenamento de arquivos (fotos e documentos) usando Supabase Storage.

---

## 🎯 Objetivos do Projeto

- Modernizar e digitalizar o processo de gestão e divulgação de imóveis
- Permitir o registro seguro e autenticação de usuários com diferentes perfis
- Gerenciar propriedades de forma estruturada com CRUD completo
- Oferecer uploads organizados de imagens e documentos para cada imóvel
- Proteger áreas administrativas com autenticação real via JWT e validação de função (role-based access)
- Integrar com o banco de dados PostgreSQL do Supabase utilizando Sequelize ORM

---

## 🚀 Tecnologias Utilizadas

- **Node.js + Express** – Backend RESTful rápido e modular
- **Supabase** – Auth, Storage e PostgreSQL gerenciado
- **Sequelize** – ORM para manipulação do banco de dados relacional
- **JWT (via Supabase)** – Tokens para autenticação segura
- **Multer** – Upload de arquivos via memória para o Supabase Storage
- **dotenv + cors** – Configurações de ambiente e controle de acesso HTTP

---

## 📦 Instalação

```bash
git clone  https://github.com/fausto18/mocubico.git
cd upload-api
npm install
## Inicialização 
npm start

## 📫 Endpoints Disponíveis (Testáveis via Postman)

### 🔑 Autenticação (`/api/auth`)

| Método | Rota               | Descrição                         |
|--------|--------------------|-----------------------------------|
| POST   | `/register`        | Registra novo usuário (com role)  |
| POST   | `/login`           | Login e retorno de access_token   |
| POST   | `/logout`          | Logout (limpeza no frontend)      |
| POST   | `/forgot-password` | Envia e-mail de redefinição       |

### 👤 Usuários (`/api/users`)

| Método | Rota     | Descrição                    |
|--------|----------|------------------------------|
| GET    | `/`      | Lista todos os usuários      |
| GET    | `/:id`   | Retorna dados de um usuário  |

### 🏘️ Imóveis (`/api/properties`)

| Método | Rota       | Descrição                             |
|--------|------------|----------------------------------------|
| GET    | `/`        | Lista todos os imóveis                 |
| GET    | `/:id`     | Retorna um imóvel específico           |
| POST   | `/`        | Cadastra novo imóvel (com proprietário)|
| PUT    | `/:id`     | Atualiza imóvel existente              |
| DELETE | `/:id`     | Remove imóvel                          |

### 🗂 Upload de Arquivos (`/api/upload`)

| Método | Rota | Descrição                        |
|--------|------|----------------------------------|
| POST   | `/`  | Upload de foto ou documento (Supabase Storage) |

- Formato: `multipart/form-data`
- Campo: `file`

### 🛡️ Área Administrativa (`/api/admin`)

| Método | Rota          | Descrição                                |
|--------|---------------|-------------------------------------------|
| GET    | `/dashboard`  | Acesso ao painel administrativo protegido|
| POST   | `/promote`    | Promove usuário para outro `role`         |

> Todas essas rotas exigem token:  
> `Authorization: Bearer <access_token>`

---

## 📁 Estrutura de Upload

- Os arquivos são enviados para o bucket Supabase chamado `imoveis`
- A resposta do upload inclui a URL pública para acesso da imagem ou documento

---

## 🧪 Teste no Postman

1. **Login**  
   POST `/api/auth/login`  
   Body:
   ```json
   { "email": "teste@teste.com", "password": "senha123" }
   ```

2. **Cadastrar Imóvel**  
   POST `/api/properties`  
   Headers:
   ```
   Authorization: Bearer <access_token>
   ```
   Body:
   ```json
   {
     "tipo": "Vivenda",
     "modalidade": "Venda",
     "descricao": "Vivenda T4 moderna",
     "provincia": "Huíla",
     "municipio": "Lubango",
     "bairro": "Arco Íris",
     "preco": 24000.00,
     "proprietario_id": "<uuid-do-proprietario>"
   }
   ```

3. **Upload de Foto**  
   POST `/api/upload`  
   - Tipo: `form-data`  
   - Campo: `file` com uma imagem ou PDF

---

## 🔐 Segurança

- Tokens JWT emitidos pelo Supabase garantem segurança nas comunicações
- Funções (`role`) são controladas via `user_metadata` (ex: admin, intermediário, inquilino)
- Regras de Row-Level Security podem ser configuradas no Supabase para proteger dados sensíveis

---

## 🧠 Observação

- As senhas são armazenadas e gerenciadas pelo Supabase com criptografia
- A recuperação de senha é automática via link enviado ao e-mail do usuário

---

## 👨‍💻 Autor

Desenvolvido por [Fausto Sacufundala]  
 © 2025 – Projeto para modernização da gestão imobiliária digital

---
