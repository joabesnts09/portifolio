# Configuração do EmailJS para Formulário de Contato

## Passo a Passo

### 1. Criar conta no EmailJS
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita (permite até 200 emails/mês)

### 2. Configurar Email Service
1. No dashboard, vá em **Email Services**
2. Clique em **Add New Service**
3. Escolha **Gmail**
4. **IMPORTANTE - Para evitar erro de autenticação:**
   - Quando conectar sua conta Gmail, certifique-se de conceder **todas as permissões** solicitadas
   - Se aparecer o erro "insufficient authentication scopes", você precisa:
     a) Remover o serviço Gmail existente (se já criou)
     b) Criar um novo serviço Gmail
     c) Durante a autenticação, **aceite todas as permissões** solicitadas pelo Google
     d) Se necessário, vá em sua conta Google > Segurança > Acesso de apps menos seguros e verifique as configurações
5. **Alternativa se o erro persistir:** Use **Gmail/Google Workspace** ao invés de apenas Gmail, ou considere usar outro provedor como **Outlook** ou **SendGrid**
6. Após conectar com sucesso, copie o **Service ID**

### 3. Criar Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Use este template:

```
De: {{from_name}} ({{from_email}})
Assunto: {{subject}}

Mensagem:
{{message}}

---
Email enviado através do formulário de contato do portfólio.
```

4. Salve e copie o **Template ID**

### 4. Obter Public Key
1. Vá em **Account** > **General**
2. Copie a **Public Key**

### 5. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto com:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id_aqui
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key_aqui
NEXT_PUBLIC_RECEIVER_EMAIL=seu-email@exemplo.com
```

### 6. Reiniciar o servidor
Após adicionar as variáveis, reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Notas Importantes
- O arquivo `.env.local` já está no `.gitignore` e não será commitado
- As variáveis devem começar com `NEXT_PUBLIC_` para serem acessíveis no front-end
- O plano gratuito do EmailJS permite 200 emails/mês
