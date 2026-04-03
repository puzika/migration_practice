import styles from './styles/main.module.scss';

const Component = () => {
  return `
    <h1 class="${styles.greeting}">Whatup</h1>
  `;
}

document.body.insertAdjacentHTML('beforeend', Component());