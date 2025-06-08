# Front-End Design Engineering  
### **Turma:** 1TDSPB 


---

O projeto Conectrilhos foi desenvolvido utilizando Next.js 15.2.3, com foco em boas práticas de desenvolvimento, garantindo organização semântica, responsividade e experiência de usuário intuitiva.
Este projeto foi desenvolvido com o intuito de aprimorar a experiência dos usuários de transporte público, oferecendo informações claras e atualizadas.

---

## Página de Problemas Relatados

**Descrição:**  
Apresenta uma lista dinâmica dos problemas previamente relatados pelo usuário.

**Características:**
- Requisição `fetch` para exibir os problemas relacionados ao usuário logado.
- Exibição interativa com botões `accordion`, utilizando `aria-*` para acessibilidade.
- Validação de sessão com redirecionamento para login caso não esteja autenticado.
- Botão para relatar novo problema via `<Link>`.

---

## Página de Relatar Problema 

**Descrição:**  
Permite que o usuário relate um problema ocorrido no trajeto pelas estações.

**Características:**
- Formulário com campos de data e descrição.
- Integração com os dados do usuário via `localStorage`.
- Envio dos dados para a API usando `fetch` com método `POST`.
- Feedback ao usuário com mensagens de sucesso ou erro.
- Proteção por autenticação com redirecionamento ao login.

---

## Página de Serviços com Cards 

**Descrição:**  
Interface em grade com atalhos rápidos para funcionalidades como cupons, perfil, relato de problemas e visualização de problemas já relatados.

**Características:**
- Layout `grid` responsivo com `div` e `Link`.
- Links para:  
  - **Cupons** (`/cupons`)  
  - **Perfil** (`/perfil`)  
  - **Relatar Problema** (`/relatarproblema`)  
  - **Problemas Relatados** (`/problemasrelatados`)  

---

## Página de Login (`index.tsx`)

**Descrição:**  
Página onde os usuários podem realizar login no sistema.

**Características:**
- **Autenticação:** Verifica se o usuário já está logado utilizando `localStorage`. Caso contrário, exibe a tela de login.
- **Campos:** 
  - E-mail
  - Senha
- **Funcionalidade:**
  - Realiza o envio dos dados via `fetch` para a API de login, utilizando o método `POST`.
  - Caso o login seja bem-sucedido, os dados do usuário são armazenados no `localStorage` e a página é recarregada.
  - Caso contrário, exibe um alerta informando erro na autenticação.

---

## Página de Cadastro (`Cadastro.tsx`)

**Descrição:**  
Página de cadastro de novos usuários para o sistema.

**Características:**
- **Autenticação:** Verifica se o usuário já está logado e redireciona para a página principal, caso afirmativo.
- **Campos:**
  - Nome Completo
  - CPF
  - E-mail
  - Telefone
  - Data de Nascimento
  - Senha
  - Gênero (Masculino, Feminino, Não binário, Outro)
- **Funcionalidade:**
  - Realiza o envio dos dados via `fetch` para a API de cadastro, utilizando o método `POST`.
  - Em caso de sucesso, o usuário é redirecionado para a página inicial.
  - Em caso de erro, exibe um alerta informando o problema no cadastro.

---

### Membros do Projeto
Feedbacks são bem-vindos para melhorias contínuas!

| Gabriel Gomes                                                                                   | Natasha Mauricio                                                                               | Victor Rodrigues                                                                              |
|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| <img src="https://github.com/user-attachments/assets/2804f237-fa3e-44a0-8fd4-2bd31f2c7db0" width="150px"> | <img src="https://github.com/user-attachments/assets/b4362961-77c9-4d9f-8fd8-ec68476c0953" width="125px"> | <img src="https://github.com/user-attachments/assets/aa851d72-ced1-4501-8eec-69a0911c3af8" width="115px"> |
| **RM: 559597**                                                                                 | **RM: 561159**                                                                                 | **RM: 560087**                                                                                |
| [LinkedIn](https://www.linkedin.com/in/gabriel-gomes-cardoso-4513a9326/) <br> [GitHub](https://github.com/gaaaabz) | [LinkedIn](https://www.linkedin.com/in/natasha-mauricio-silva-santana/) <br> [GitHub](https://github.com/Natasha-Mauricio) | [LinkedIn](https://www.linkedin.com/in/victorrodrigues1227) <br> [GitHub](https://github.com/VoyDcode) |
