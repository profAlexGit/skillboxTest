import { type FC, type PropsWithChildren, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type ReduxStoreWithManager } from '../../config/stateSchema';
import { type StateSchemaKey } from '../../config/stateSchema';
import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps extends PropsWithChildren {
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount = true
  } = props;

  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers)
      .forEach(([name, reducer]) => {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      });

    if (removeAfterUnmount) {
      return () => {
        Object.entries(reducers)
          .forEach(([name]) => {
            store.reducerManager.remove(name as StateSchemaKey);
            dispatch({ type: `@DESTROY ${name} reducer` });
          });
      };
    }
  }, []);

  return (
    <>
      {children}
    </>
  );
};
