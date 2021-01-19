import React, {
  createContext,
  useContext
} from 'react';
import { action, makeObservable, observable } from 'mobx';
import Color, {
  getColorName
} from '../constsants/Color';

class PaletteStore {
  @observable
  color: Color
  @observable
  name: string

  constructor(color: Color) {
    this.color = color;
    this.name = getColorName(color);
    makeObservable(this);
  }

  @action
  changeColor(color: Color) {
    this.color = color;
    this.name = getColorName(color);
  }
}

export const PaletteContext = createContext<PaletteStore>(new PaletteStore(Color.RED));

interface Props {
  children: React.ReactNode
}

export const PaletteProvider: React.FC<Props> = ( { children } ) => {
  const palette = useContext(PaletteContext);

  return (
    <PaletteContext.Provider value={palette}>
      {children}
    </PaletteContext.Provider>
  )
};
