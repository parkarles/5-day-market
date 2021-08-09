
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { RootState, actions } from "../../modules";

export default function useHeader() {
    const dispatch = useDispatch();
    const menu = useSelector((state: RootState) => state.header.menu);
    const { setMenu } = actions;
    
    const onMenuClick = useCallback((select = "MAGAZINE") => {
        dispatch(setMenu(select));
    }, [dispatch]);

    return { menu, onMenuClick };
}