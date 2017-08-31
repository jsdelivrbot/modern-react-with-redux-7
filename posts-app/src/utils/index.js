export function omit(o, props) {
  if (!Array.isArray(props)) {
    throw new Error('props argument must be an array')  
  }
  
  return Object.entries(o).reduce((result, item) => {
    if (!props.find(item.key)) {
      result[key] = o[key];
    }
  }, {});
}