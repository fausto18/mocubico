# 🏡 Mô Cubico – API de Arrendamento e Venda de Imóveis

Este é o backend da aplicação **Mô Cubico**, desenvolvida com Node.js, Express e Supabase. A API permite o cadastro, autenticação de usuários, criação e gestão de imóveis, upload de arquivos, e controle de acesso baseado em função (ex: admin, proprietário).

---

## 🚀 Tecnologias Utilizadas

- Node.js + Express
- Supabase (Auth + Storage + PostgreSQL)
- Sequelize ORM
- JWT (usado via Supabase)
- Multer (upload de arquivos)

---

## ⚙️ Variáveis de Ambiente (.env)

```env
PORT=8080
SUPABASE_URL=https://<sua-instancia>.supabase.co
SUPABASE_KEY=<anon-public-key>
SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
JWT_SECRET=chave_para_jwt_caso_use
```

---

## 📦 Instalação

```bash
npm install
npm start
```

---

## 🔐 Autenticação e Autorização

A autenticação é feita via Supabase Auth. O campo `role` do usuário é armazenado em `user_metadata.role`.

---

## 📫 Endpoints da API

### 🔑 Autenticação (`/api/auth`)

| Método | Rota               | Descrição                    |
| ------ | ------------------ | ---------------------------- |
| POST   | `/register`        | Registra um novo usuário     |
| POST   | `/login`           | Faz login e retorna o token  |
| POST   | `/logout`          | Logout (limpeza no frontend) |
| POST   | `/forgot-password` | Envia e-mail de recuperação  |

### 🧑 Usuários (`/api/users`)

| Método | Rota   | Descrição               |
| ------ | ------ | ----------------------- |
| GET    | `/`    | Lista todos os usuários |
| GET    | `/:id` | Busca usuário por ID    |

### 🏠 Propriedades (`/api/properties`)

| Método | Rota   | Descrição                |
| ------ | ------ | ------------------------ |
| GET    | `/`    | Lista todos os imóveis   |
| GET    | `/:id` | Busca imóvel por ID      |
| POST   | `/`    | Cadastra novo imóvel     |
| PUT    | `/:id` | Atualiza dados do imóvel |
| DELETE | `/:id` | Remove imóvel            |

### 📤 Upload de arquivos (`/api/upload`)

| Método | Rota | Descrição                     |
| ------ | ---- | ----------------------------- |
| POST   | `/`  | Upload de imagem ou documento |

> Formato `multipart/form-data`, campo `file`

### 🛡️ Área Admin (`/api/admin`)

| Método | Rota         | Descrição                            |
| ------ | ------------ | ------------------------------------ |
| GET    | `/dashboard` | Acesso ao painel de administração    |
| POST   | `/promote`   | Promove um usuário para outro `role` |

> ⚠️ Requer token de um usuário com `role: "admin"` no header:
> `Authorization: Bearer <access_token>`

---

## 📦 Upload para Supabase Storage

Os arquivos são armazenados no bucket `imoveis`. Após o upload, a URL pública do arquivo é retornada no JSON.

---

## 🛠 Exemplo de uso no Postman

1. **Login**

   - POST `/api/auth/login`
   - Body:
     ```json
     {
       "email": "teste@teste.com",
       "password": "senha123"
     }
     ```

2. **Cadastrar imóvel**

   - POST `/api/properties`
   - Headers: `Authorization: Bearer <access_token>`
   - Body:
     ```json
     {
       "tipo": "Apartamento",
       "modalidade": "Arrendamento",
       "descricao": "T3 com varanda",
       "provincia": "Luanda",
       "municipio": "Talatona",
       "bairro": "Camama",
       "preco": 24000.0,
       "proprietario_id": "<user_uuid>"
     }
     ```

3. **Upload de imagem**
   - POST `/api/upload`
   - Formato: `multipart/form-data`
   - Campo: `file`

---

## 📄 Licença

MIT © 2025
