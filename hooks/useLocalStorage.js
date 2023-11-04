export const useLocalStorage = (todo) => {
  const getLocalStorage = () => {
    const listTask = localStorage.getItem("todo");
    if (!listTask) {
      localStorage.setItem("todo", JSON.stringify([]));
    }
    if (listTask) {
      return JSON.parse(listTask);
    }
  };

  const setLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };
  return { getLocalStorage, setLocalStorage };
};
