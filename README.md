# IGTI Bootcamp - Desenvolvedor Full Stack
## Trabalho Prático do Módulo 3

Construa, utilizando React e preferencialmente Class Components, uma aplicação para realizar a transformação de textos, conforme regras abaixo:

**Implementar, utilizando React e preferencialmente Class Components, uma aplicação denominada “react-text-transformer” que possuirá um input editável e diversos outros inputs somente-leitura, para exibir transformações a partir do texto informado pelo usuário. As transformações a serem realizadas são:**

1. Texto invertido.

2. Texto numérico, com as seguintes regras:
    * Texto convertido para maiúsculas.
    * Texto com remoção de acentos (opcional)
    * Troca de O por 0 (zero)
    * Troca de L por 1
    * Troca de E por 3
    * Troca de A por 4
    * Troca de S por 5
    * Troca de T por 7

3. Texto no formato CSV, com as seguintes regras:
    * Cada palavra deve ser envolvida por aspas duplas.
    * As palavras devem ser separadas por ponto-e-vírgula.

4. Slug, com as seguintes regras:
    * Texto em minúsculas.
    * Texto com remoção de acentos (opcional).
    * Cada palavra deve ser separada por hífen.

5. Somente vogais, preservando os espaços em branco.

6. Somente consoantes, preservando os espaços em branco.

7. Formato de variável (camelCase), com as seguintes regras.
    * Texto com remoção de acentos (opcional).
    * Primeira palavra totalmente em minúsculas.
    * Demais palavras em minúsculas com o primeiro caractere maiúsculo.2. Implementar, opcionalmente, uma funcionalidade que permite que o usuário copie o texto transformado para a Área de Transferência. 

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
