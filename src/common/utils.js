/**
 * 公共工具类函数
 */
let type = {};
['String', 'Object', 'Number', 'Array', 'Undefined', 'Function', 'Null', 'Symbol'].forEach((name) => {
  type['is' + name] = function(obj) {
    return Object.prototype.toString.call(obj) === '[object ' + name + ']'
  }
})

export const Type = type
