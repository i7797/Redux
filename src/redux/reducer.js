// reducer.js
const NameType = (state = " ", action) => {
    switch (action.type) {
      case 'Nour':
        return "Hello Nour";
      case 'Ruba':
        return "Hello Ruba";
      default:
        return state;
    }
  };
  
  export default NameType;
  