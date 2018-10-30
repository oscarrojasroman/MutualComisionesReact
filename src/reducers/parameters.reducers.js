import { parametersConstants } from '../constants';


let parameter = JSON.parse(localStorage.getItem('parameter'));
const initialState = parameter ? { add: false , parameter} : {};

export function add(state = initialState, action) {
  switch (action.type) {
    case parametersConstants.REQUEST:
      return {
        add: true,    
        parameter: action.parameter    
      };
    case parametersConstants.SUCCESS:
      return {
        add: true, 
        parameter: action.parameter         
      };
    case parametersConstants.ERROR:
      return {};
    default:
      return state
  }
}