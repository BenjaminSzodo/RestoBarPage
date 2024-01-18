import { POST_MENU , ALL_MENUS , UPDATE_MENU , DELETE_MENU } from "./actionsTypes";
import axios from "axios";


  export const postMenu = (url) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://localhost:3001/restobase/menu', { url });
        dispatch({
          type: POST_MENU,
          payload: response.data,
        });
      } catch (error) {
        console.error('Error creating promo:', error);
        // Puedes dispatchear otro tipo de acción en caso de error si lo deseas
      }
    };
  };

export const getAllMenus = () => {

    return async(dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/restobase/menus');
            const menus = response.data;
            return dispatch({
                type: ALL_MENUS,
                payload: menus,
            });
        } catch (error) {
            throw Error({error : error.message});
        }
    }

}

export const updateMenu = (id, updatedData) => {
  return async (dispatch) => {
    try {
      const response = await axios.put('http://localhost:3001/restobase/updatedmenu', { id, updatedData });
      dispatch({
        type: UPDATE_MENU,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error updating promo:', error);
      // Puedes dispatchear otro tipo de acción en caso de error si lo deseas
    }
  };
};

export const deleteMenu = (id) => {
    return async (dispatch) => {
      try {
        await axios.delete(`http://localhost:3001/restobase/deletemenu`, {id});
        dispatch({
          type: DELETE_MENU,
          payload: id,
        });
      } catch (error) {
        console.error('Error deleting promo:', error);
        // Puedes dispatchear otro tipo de acción en caso de error si lo deseas
      }
    };
  };