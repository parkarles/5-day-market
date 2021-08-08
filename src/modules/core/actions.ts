
import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const SET_MENU = 'header/SET_MENU';

// export const setMenu = createStandardAction(SET_MENU)<string>();
// export const openPopup = createStandardAction(OPEN_POPUP)<{
//     title?: string;
//     message: string;
// }>();

// export const closePopup = createStandardAction(CLOSE_POPUP)();