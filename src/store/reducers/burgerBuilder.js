import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    loading: false,
    error: false,
    building: false
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const handleIngredient = (state, action, isPos) => {
    const newIngredients = {
        ...state.ingredients,
        [action.ingredientName]: state.ingredients[action.ingredientName] + (isPos ? 1 : -1)
    }
    const updatedIngredients = updateObject(state.ingredients, newIngredients)
    const updatedState = {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + (isPos ? INGREDIENT_PRICES[action.ingredientName] : -INGREDIENT_PRICES[action.ingredientName]),
        building: true
    }
    return updateObject(state, updatedState);    
}

const setIngredients = (state, action) => {
    return updateObject(state, { 
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat,
        }, 
        error: false, 
        totalPrice: initialState.totalPrice,
        building: false
    });
}

const burgerBuilderReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: return handleIngredient(state, action, true);
        case actionTypes.REMOVE_INGREDIENT: return handleIngredient(state, action, false);
        case actionTypes.SET_INGREDIENTS: return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED: return updateObject({ error: true });
        default: return state;
    }
};

export default burgerBuilderReducer;