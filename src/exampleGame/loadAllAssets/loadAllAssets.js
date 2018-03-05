import * as modules from 'exampleGame';
import path from 'path';

function loadAllAssets() {
  const { load } = window.exampleGame.scene.getAt(0);

  Object.keys(modules).forEach(name => {
    if (!modules[name].loadAssets) return;

    // console.log(`Loading assets for ${name}...`)
    console.log(`Environment is ${process.env.NODE_ENV}`);
    const moduleAssetsRoot =
      process.env.NODE_ENV === 'production' ? 'example-game' : '/';
    const moduleAssetsPath = path.resolve(
      moduleAssetsRoot,
      'src',
      'exampleGame',
      name,
      'assets'
    );
    load.setPath(moduleAssetsPath);
    modules[name].loadAssets(load);
    load.path = '';
  });
}

export default loadAllAssets;
