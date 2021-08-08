import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type CoreAction = ActionType<typeof actions>;

export type CoreState = {
    size: string;
    popup: {
        title: string | undefined;
        message: string;
        visible: boolean;
    };
};