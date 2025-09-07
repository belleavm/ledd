This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Conecta tu carpeta local con tu github, con la primera linea defines que es tu branch main, con la segunda confirmas cual es el repositorio en github al que esta conectado, si dice que esta conectado a alguno lo eliminas con la tervera linea y con la cuarta asignas un nuevo repositorio:

```bash
git init -b main
# para verificar si esta conectado a un repositorio
git remote -v 
# para desconectar de un repositorio 
git remote remove origin
# para conectar a un repositorio
git remote add origin https://github.com/belleavm/ledd.git
# installar next y react
npm install next react react-dom
```

Ahora, corre el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

?? Reglas de oro
Nunca hagas git add . sin tener .gitignore configurado.
Si cambias de gestor (npm ? yarn/pnpm), ajusta el .gitignore para ignorar sus archivos de lock adicionales.
Para proyectos Next: nunca subas .next/ ni out/ (esos los genera el build).


Este proyecto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
