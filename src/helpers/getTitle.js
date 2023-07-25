const getTitle = obj => {
  if (obj.title) {
    return obj.title;
  }
  if (obj.name) {
    return obj.name;
  }
};

export default getTitle;
