import * as modules from 'exampleGame';

function createAllAnimations() {
  const { anims } = window.exampleGame.scene.getAt(0);

  Object.keys(modules).forEach(name => {
    if (!modules[name].createAnimations) return;

    // console.log(`Loading assets for ${name}...`)
    modules[name].createAnimations(anims);
  });
}

export default createAllAnimations;
