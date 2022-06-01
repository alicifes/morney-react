let id = parseInt(window.localStorage.getItem('maxValue') ||'0');
const createId = () => {
  id+=1
  window.localStorage.setItem('maxValue',id.toString());
  return id
};
export {createId};