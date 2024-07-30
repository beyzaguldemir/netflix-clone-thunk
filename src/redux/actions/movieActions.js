import { ActionTypes } from "../actionTypes"
import api from "../../utils/api"
// api den popüler filmleri alıp reducer a aktaran bir asenkron thunk fonksiyonu
export const getPopular=()=>(dispatch)=>{
    dispatch({
        type:ActionTypes.MOVIES_LOADING,
    })

    const params={
        region:"TUR",
    }

    api.get("/movie/popular",{params}).then((res)=>dispatch({
        type:ActionTypes.MOVİES_SUCCESS,
        payload:res.data,
    })).catch((err)=>dispatch({
        type:ActionTypes.MOVİES_ERROR,
        payload:err.message,
    }))
}