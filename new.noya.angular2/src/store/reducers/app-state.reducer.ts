import {Action, Reducer} from 'redux';
import {composeReducers, defaultFormReducer} from '@angular-redux/form';
import {IAppState} from '../states/state';
import {CARDS_LOADED, CVs_LOADED, HOME_PAGE_TEXT_LOADED} from '../const';
import * as _ from 'lodash'
import {MetaData, Payload} from "../actions/actions";
import {FSA} from "flux-standard-action";

export const appStateReducer: Reducer<IAppState> = (state: IAppState, a: Action): IAppState => {
  const action = a as FSA<Payload, MetaData>;
  let newStore: IAppState = _.cloneDeep(state);
  switch (a.type) {
    case CARDS_LOADED:
      newStore.cards = action.payload;
      return newStore;
    case HOME_PAGE_TEXT_LOADED:
      newStore.homePageText = action.payload[0].Text;
      return newStore;
    case CVs_LOADED:
      newStore.biographies=action.payload;
      return newStore;
    default:
      return state;
  }
}

export const rootReducer = composeReducers(defaultFormReducer(), appStateReducer)