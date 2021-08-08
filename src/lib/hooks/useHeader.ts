
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { RootState } from '../../modules';

export default function useHeader() {
    const dispatch = useDispatch();
    const header = useSelector((state: RootState) => state.header);
    const menu = useSelector((state: RootState) => state.header.menu);
    
    const onMenuClick = useCallback((select = 'MAGAZINE') => {
        // headerAction.setMenu({ menu: select});
        dispatch({type: 'header/setMenu', payload: {menu: select}});
    }, [dispatch]);

    return { menu, onMenuClick };
}