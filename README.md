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
- Enderecos: so a unidade Madalena tem endereco completo; Boa Viagem e Espinheiro aparecem apenas com o bairro e link do Google Maps.
