import { POST_PROMO , ALL_PROMOS , UPDATE_PROMO , DELETE_PROMO } from "./actionsTypes";
import axios from "axios";

export const postPromo = (url) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:3001/restobase/promo', { url });
        dispatch({
          type: POST_PROMO,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error creating promo:', error);
        // Puedes dispatchear otro tipo de acción en caso de error si lo deseas
      }
    };
  };


export const getAllPromos = () => {

    return async(dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/restobase/promos');
            const promos = response.data;
            return dispatch({
                type: ALL_PROMOS,
                payload: promos,
            });
        } catch (error) {
            throw Error({error : error.message});
        }
    }

}

export const updatePromo = (id, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put('http://localhost:3001/restobase/updatedpromo', { id, updatedData });
      dispatch({
        type: UPDATE_PROMO,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error updating promo:', error);
      // Puedes dispatchear otro tipo de acción en caso de error si lo deseas
    }
  };
};
  
export const deletePromo = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/restobase/deletepromo`, {id});
      dispatch({
        type: DELETE_PROMO,
        payload: id,
      });
    } catch (error) {
      console.error('Error deleting promo:', error);
      // Puedes dispatchear otro tipo de acción en caso de error si lo deseas
    }
  };
};
