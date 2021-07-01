import { INCREMENT } from './types';

export const increment = (n) => {
  return {
    type: INCREMENT,
    data: n
  }
}