# Solução para Erro: "Gmail API: Request had insufficient authentication scopes"

## Problema
Você está recebendo o erro `412 Gmail_API: Request had insufficient authentication scopes` ao tentar usar o EmailJS com Gmail.

## Soluções

### Solução 1: Reautenticar o Gmail no EmailJS

1. **Remover o serviço Gmail existente:**
   - No EmailJS, vá em **Email Services**
   - Encontre o serviço Gmail que está com erro
   - Clique em **Delete** ou **Remove**

2. **Criar novo serviço Gmail:**
   - Clique em **Add New Service**
   - Escolha **Gmail**
   - Durante a autenticação, **aceite TODAS as permissões** solicitadas
   - Não cancele ou pule nenhuma etapa

3. **Verificar permissões no Google:**
   - Acesse: https://myaccount.google.com/permissions
   - Verifique se o EmailJS tem acesso completo
   - Se necessário, remova e reconecte

### Solução 2: Usar outro provedor (Recomendado)

Se o erro persistir, use um dos seguintes:

#### Opção A: Outlook/Hotmail
1. No EmailJS, escolha **Outlook** ao invés de Gmail
2. Conecte sua conta Microsoft
3. Geralmente funciona melhor que Gmail

#### Opção B: SendGrid (Mais confiável)
1. Crie conta gratuita em https://sendgrid.com/ (100 emails/dia grátis)
2. No EmailJS, escolha **SendGrid**
3. Configure com suas credenciais do SendGrid

### Solução 3: Verificar configurações do Google

1. Acesse: https://myaccount.google.com/security
2. Verifique se "Acesso de apps menos seguros" está habilitado (se aplicável)
3. Verifique se a verificação em duas etapas não está bloqueando

### Solução 4: Usar SMTP direto (Avançado)

Se nada funcionar, você pode configurar SMTP diretamente no EmailJS:
1. Escolha **Custom SMTP Server** no EmailJS
2. Configure com as credenciais SMTP do Gmail:
   - Host: smtp.gmail.com
   - Port: 587
   - Username: seu-email@gmail.com
   - Password: Use uma "Senha de app" do Google (não sua senha normal)

## Recomendação

Para evitar problemas, recomendo usar **Outlook** ou **SendGrid** ao invés de Gmail, pois são mais fáceis de configurar e geralmente não apresentam esses erros de autenticação.
