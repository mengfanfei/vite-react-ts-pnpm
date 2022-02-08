
export interface IState {
  name: string
  age: number
}

export const defaultState: IState = {
  name: '卢锡安',
  age: 18
}

export interface Actions {
  type: string
  [propName: string]: any
}

export function reducer(state: IState, actions: Actions) {
  console.log(actions);
  switch(actions.type) {
    case 'SET_NAME':
      return {...state, name: actions.name}
    case 'SET_AGE':
      return {...state, age: state.age + 1}
    default:
      return state
  }
}