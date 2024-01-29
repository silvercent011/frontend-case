# Desafio de Desenvolvimento Front-end

## Como iniciar a aplicação?


Instalando dependências:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

Iniciando servidor de desenvolvimento


```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```


## Como utilizar?
Todos os componentes têm os seus estados vazios implementados, sendo o padrão, para "popular" os componentes, basta apenas interagir com um clique.

## Arquitetura
Como utilizamos dados fictícios, a camada de dados foi separada em serviços (todos na pasta Services), que poderiam facilmente ser substituídos por requisições a Web APIs.

## Estilo
Foi instalado o módulo `nuxt-icons`, já que ele possui o pacote Remix Icons, o qual é utilizado no Figma.
Alguns estilos, posicionamento e espaçamento especificamente foram colocados em classes utilizadas por toda a aplicação, mas há muito css local em componentes também, sempre usando a tag `scoped` para evitar um 'vazamento' de estilos.


## Testes
Alguns componentes foram iniciados com uso de TDD, mas por algum motivo o módulo oficial de testes do Nuxt 3 está dando alguns problemas de compatibilidade em minha máquina, então foi removido do `nuxt.config.ts`.

## Pontos de melhoria
Em 4 dias acredito que não foi possível entregar 100%, mas tem pontos de melhoria que vejo nessa entrega, entre eles:

* Uma gestão melhor desenvolvida do grid no dashboard.
* Uso melhor dos estilos, reconheço que há repetições em alguns componentes.
* Utilizar módulos internos na aplicação para gerenciar o comportamento do framework, adicionar pastas no sistema de importação automática, por exemplo.