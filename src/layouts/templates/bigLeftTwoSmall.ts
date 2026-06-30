import type {ILayoutTemplate} from '../../types/types.ts';


export const bigLeftTwoSmall: ILayoutTemplate = {
    id: '1',
    name: 'Большое фото слева + два маленьких справа',
    column: 2,
    row: 2,
    slots: [{
      rowStart: 1,
      rowEnd: 3,
      colStart: 1,
      colEnd: 2,
      orientation: 'vertical',
    },
      {
      rowStart: 1,
      rowEnd: 2,
      colStart: 2,
      colEnd: 3,
      orientation: 'horizontal',
    },
    {
      rowStart: 2,
      rowEnd: 3,
      colStart: 2,
      colEnd: 3,
      orientation: 'horizontal',
    }],
}