export default () => {
  const body = document.body;
  body.onload = () => {
    body.classList.add(`loaded`);
  };
};
