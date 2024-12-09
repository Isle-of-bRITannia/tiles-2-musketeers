import { Tile } from './tiles/api.js';

import { fireGirl, uh, line } from './tiles/imageTiles/index.js';
import { rasterize } from './tiles/observe/rasterize.js';
import { renderRaster } from './tiles/observe/renderRaster.js';

const width = 856,
      height = 630;

const canvas = document.querySelector('#canvas');
canvas.width = width;
canvas.height = height;

const ctx = canvas?.getContext('2d');

// const tile = Tile.swirl(
  // Tile.above(
  //   Tile.swirl(
  //     Tile.above(
  //       Tile.swirl(
  //         Tile.above(
  //       Tile.pure('red'),
  //       line
  //         )
  //       )
  //     )
  //   ),
    // Tile.beside(
    //   uh, 
    //   // Tile.pure('tan')
    // )
    // Tile.behind(
      // Tile.above(
        // uh, 
        // Tile.pure('tan')
      // )
    // )
    // Tile.quad(line, Tile.pure('red'), line, Tile.pure('red'))
  // )
// );
// const test = Tile.beside(Tile.above(Tile.pure('red'),line));
// const tile = Tile.quad(test, test, test, test);
// const tile = Tile.beside(
//   Tile.beside(
//     Tile.beside(
//       Tile.above(Tile.pure('red'),line),
//       Tile.above(line,Tile.pure('red')),
//       Tile.above(Tile.pure('red'),line)
//       ),
//       // Tile.above(line,Tile.pure('red'))
//       )
//       );

// const tile = Tile.above(Tile.above(Tile.pure('tan'), Tile.pure('red'), Tile.above(Tile.pure('red'),Tile.pure('tan'))))
const squish1 = Tile.beside(Tile.beside(Tile.beside(Tile.pure('tan'),Tile.pure('tan')), Tile.pure('tan'),Tile.pure('tan')), Tile.beside(Tile.pure('tan'),Tile.pure('tan')),Tile.beside(Tile.pure('tan'),line))
const squish2 = Tile.beside(Tile.beside(line,Tile.pure('tan')),Tile.beside(Tile.pure('tan'),Tile.pure('tan')), Tile.beside(Tile.pure('tan'),Tile.pure('tan')), Tile.beside(Tile.pure('tan'),Tile.pure('tan')));
const squish3 = Tile.above(Tile.above(line,Tile.pure('tan')),Tile.above(Tile.pure('tan'),Tile.pure('tan')))
const squish4 = Tile.above(Tile.above(Tile.pure('tan'),Tile.pure('tan')),Tile.above(Tile.pure('tan'),line))

const item1 = Tile.beside(Tile.beside(Tile.pure('tan'),squish1),Tile.beside(squish2,Tile.pure('tan')));
const item2 = Tile.above(Tile.above(squish3, Tile.above(Tile.pure('tan'), squish4)), Tile.above(item1));
const item3 = Tile.above(Tile.above(Tile.above(Tile.pure('tan'), squish3), squish4), Tile.above(item1));
const item4 = Tile.beside(Tile.beside(squish2,Tile.pure('tan')))
const item5 = Tile.above(Tile.above(squish3, Tile.above(Tile.pure('tan'))))


const col1 = Tile.above(Tile.above(Tile.above(item1, item2)), item2)
const col2 = Tile.above(Tile.above(Tile.above(item4,item4), item4))
const col3 = Tile.pure('tan');
const col4 = Tile.above(Tile.above(Tile.above(item4, item2)), item3)

const tile = Tile.beside(Tile.beside(col1,col2),Tile.beside(col3, col4));

const raster = rasterize({width, height})(tile);

renderRaster(raster)(ctx);

console.log('done');