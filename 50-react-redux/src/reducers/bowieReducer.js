import babyBowie from '../assets/babyBowie.jpeg';
import hipsterBowie from '../assets/hipsterBowie.jpg';
import ziggyBowie from '../assets/ziggyBowie.jpg';
import goblinBowie from '../assets/goblinBowie.jpg';


const initialState = {
    bowies: {
        1: {
          id: 1,
          name: 'Baby Bowie',
          votes: 0,
          image: babyBowie
        },        
        2: {
          id: 2,
          name: 'Hipster Bowie',
          votes: 0,
          image: hipsterBowie
        },
        3: {
          id: 3,
          name: 'Ziggy Stardust',
          votes: 0,
          image: ziggyBowie
        },
        4: {
          id: 4,
          name: 'Goblin King',
          votes: -1000,
          image: goblinBowie
        },
      }
}

const bowieReducer = (state = initialState, action) => {
    console.log("reducer state: ", state)
    console.log("reducer action: ", action)
    switch(action.type) {
        case "INCREASE_VOTE": {
            return {
                ...state,
                bowies: {
                    ...state.bowies,
                    [action.payload.id]: {
                      ...state.bowies[action.payload.id],
                      votes: state.bowies[action.payload.id]['votes'] + 1
                    }
                  }
            }
        }
        case "DECREASE_VOTE": {
          return {
            ...state,
            bowies: {
                ...state.bowies,
                [action.payload.id]: {
                  ...state.bowies[action.payload.id],
                  votes: state.bowies[action.payload.id]['votes'] - 1
                }
              }
        }
        }
        default:
            return state;
    }
}

export default bowieReducer;