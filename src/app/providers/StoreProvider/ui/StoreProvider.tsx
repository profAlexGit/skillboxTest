import { type FC, type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@app/providers/StoreProvider/config/store';
import { type StateSchema } from '@app/providers/StoreProvider/config/stateSchema';
import { type DeepPartial } from 'redux';
import { type ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children: ReactNode;
  initialState?: StateSchema;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const {
    children,
    initialState,
    asyncReducers
  } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
