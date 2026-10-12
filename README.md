# Mapa da Virada RS

Mapa da abstenção nos 497 municípios do Rio Grande do Sul no 1º turno de 2026 (Presidente, dados oficiais do TSE), com um argumentador por IA para mobilizar o voto no 2º turno de 25/10/2026.

## Como funciona

| Arquivo | Para que serve |
|---|---|
| `index.html` | A página inteira: mapa, painel, ranking e argumentador |
| `_worker.js` | Servidor do Cloudflare Pages: responde `/api/argumentos` chamando o Workers AI (modelo aberto Gemma 4) e entrega o resto do site |
| `tse_rs_2026_1t_presidente.csv` | Base do TSE usada no mapa, por município |

O site roda no plano gratuito da Cloudflare. A IA usa a ligação `AI` (Workers AI), configurada no painel do projeto, em Settings, depois Bindings. No plano Free não há cobrança. Se a cota diária acabar, a IA volta às 21h e, até lá, a página mostra mensagens prontas.

## Proteções

- Cada IP pode fazer até 12 pedidos a cada 5 minutos.
- O mesmo pedido fica guardado por 24 h e não gasta a cota de novo.
- As instruções para a IA são montadas no servidor, então ninguém consegue usar a IA para outros fins.

## Atualizar

Basta editar ou substituir os arquivos aqui no GitHub. A Cloudflare publica a nova versão sozinha.

## Fontes

- **Números:** TSE, resultado oficial do 1º turno de 4/10/2026 para Presidente (100% apurado), coletado em 12/10/2026.
- **Mapa:** malha municipal do IBGE.
