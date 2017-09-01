export function omit(o, props) {
  if (!Array.isArray(props)) {
    throw new Error('props argument must be an array')  
  }

  return Object.entries(o).reduce((result, item) => {
    if (props.indexOf(item[0]) === -1) {
      result[item[0]] = item[1];
    }
    
    return result;
  }, {});
}