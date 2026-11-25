# Dona Nita Esmalteria - previa do site

Previa conceitual de site para a Dona Nita Esmalteria. Nao e o site final: o conteudo (precos, enderecos, textos) vem do material enviado e precisa de revisao da cliente antes de ir ao ar.

Stack: React + Vite + TypeScript.

## Como rodar

```bash
npm install
npm run dev
```

## Build de producao

```bash
npm run build
npm run preview
```

A saida fica em `dist/`.

## Notas

- As fotos estao embutidas em base64 em `src/photos-a.ts`, `src/photos-b.ts` e `src/photos-c.ts`.
- As fontes Fraunces e Inter carregam do Google Fonts (precisa de internet).
- Todos os botoes de contato usam o link oficial do WhatsApp da bio do Instagram @donanita_esmalteria.
- Enderecos das tres unidades (Madalena, Boa Viagem e Espinheiro) conferidos nas fichas do Google Maps linkadas no bio.site oficial da Dona Nita. Madalena: "Sala 101 (1o andar)" vem do destaque do Instagram; a ficha do Google diz "Lj 101".

## Animacoes e interacoes

- Hero: o titulo "Dona Nita" anima letra por letra, com brilho dourado e flutuacao suave; o logo circular tambem flutua.
- Toque nas secoes: tocar em cartoes (servicos, Bom saber, galeria, Black Friday, unidades, mapa) ou no fundo de uma secao gera uma onda dourada a partir do ponto do toque e um efeito de "pop" no cartao.
- Entrada na rolagem: blocos aparecem com fade e deslocamento ao entrar na tela.
- Todas as animacoes respeitam `prefers-reduced-motion`.

## Seletor de mapas

A secao "Tres unidades em Recife" lista as unidades com etiquetas A (Madalena), B (Boa Viagem) e C (Espinheiro). Tocar em uma unidade troca o mapa do Google embutido (iframe, sem chave de API) e atualiza o titulo, o endereco e o botao "Abrir no Google Maps". No celular a pagina rola ate o mapa ao tocar. Os dados ficam na constante `UNITS` em `src/App.tsx` (nome, endereco, latitude, longitude e link da ficha).

## Deploy

O workflow `.github/workflows/deploy.yml` faz o build e publica no GitHub Pages a cada push na `main`.
