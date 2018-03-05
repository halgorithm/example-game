import * as modules from 'exampleGame';
import path from 'path';

function loadAllAssets() {
  const { load } = window.exampleGame.scene.getAt(0);

  Object.keys(modules).forEach(name => {
    if (!modules[name].loadAssets) return;

    // console.log(`Loading assets for ${name}...`)
    load.setPath(path.resolve(__dirname, 'src', 'exampleGame', name, 'assets'));
    modules[name].loadAssets(load);
    load.path = '';
  });
}

export default loadAllAssets;
