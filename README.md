# ATLAS — Core 0.1

Primeiro protótipo da ATLAS. Projeto independente do Priht.

## O que já funciona
- Interface responsiva de console.
- Navegação entre Visão geral, Core e Módulos.
- Linha de comando local com `/ajuda`, `/status`, `/modulos`, `/sobre` e `/limpar`.
- Indicadores que distinguem o módulo ativo dos módulos planejados.

## O que ainda NÃO faz
- Não é uma IA conectada a um LLM.
- Não pesquisa a internet.
- Não salva memória persistente.
- Não acessa arquivos ou aplicativos do computador.
- Não executa ações externas.

Essas capacidades serão adicionadas por etapas, com credenciais mantidas fora do repositório.

## Rodar no Mac
1. Descompacte o ZIP.
2. Abra a pasta `atlas-core-inicial`.
3. Abra `index.html` no navegador.

Opcional: pelo Terminal, entre na pasta e execute:
```bash
python3 -m http.server 8000
```
Depois abra `http://localhost:8000`.

## Publicar no GitHub Pages
1. Crie um repositório novo chamado `atlas-core` no GitHub.
2. Envie o conteúdo desta pasta para a raiz do repositório (não envie a pasta ZIP).
3. No GitHub, abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois salve.
6. Aguarde a publicação. O GitHub mostrará o endereço do site nessa mesma página.

## Regra de segurança
Nunca coloque senhas, tokens, chaves privadas ou credenciais de serviços em arquivos públicos do GitHub. Quando a ATLAS ganhar um backend, os segredos ficarão em variáveis de ambiente no servidor.
