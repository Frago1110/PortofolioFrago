import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

function Hero() {
  const heroClasses = 'relative h-screen w-full overflow-hidden bg-zinc-950 text-zinc-300';
  const backgroundLayerClasses = 'absolute inset-0';
  const blobOneClasses = 'absolute h-[82rem] w-[82rem] rounded-full bg-zinc-500/20 blur-3xl';
  const blobTwoClasses = 'absolute h-[120rem] w-[120rem] rounded-full bg-zinc-500/20 blur-3xl';
  const filterLayerClasses = 'absolute inset-0 bg-black/50';
  const contentWrapperClasses = 'relative z-10 h-full px-6 py-10 md:px-12';
  const titleBlockClasses =
    'absolute left-6 top-10 z-20 flex flex-col gap-4 p-2 md:left-12 md:top-2';
  const titleClasses =
    'text-5xl font-extralight leading-none tracking-tight text-white md:text-7xl';
  const roleClasses = 'text-xs uppercase tracking-[0.2em] text-zinc-400 md:text-sm';
  const descriptionBlockClasses = 'absolute bottom-16 right-10 z-20 max-w-md p-4 text-left';
  const descriptionClasses = 'text-2xl font-extralight text-zinc-300';

  const b1x = useMotionValue(0);
  const b1y = useMotionValue(0);
  const b1scale = useMotionValue(1);
  const b1rotate = useMotionValue(0);

  const b2x = useMotionValue(0);
  const b2y = useMotionValue(0);
  const b2scale = useMotionValue(1);

  function smoothNoise(t) {
    const i = Math.floor(t);
    const f = t - i;
    const u = f * f * (3 - 2 * f);
    const a = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    const b = Math.sin((i + 1) * 127.1 + 311.7) * 43758.5453;
    return (a - Math.floor(a)) * (1 - u) + (b - Math.floor(b)) * u;
  }

  useAnimationFrame((t) => {
    const W = window.innerWidth;
    const H = window.innerHeight;

    const phase1 = t * 0.00042;
    const nx = (smoothNoise(phase1 * 0.6) - 0.5) * 60;
    const ny = (smoothNoise(phase1 * 0.6 + 99) - 0.5) * 60;

    b1x.set(W / 2 + Math.sin(3 * phase1 + 1.0) * W * 0.38 + nx - 256);
    b1y.set(H / 2 + Math.sin(2 * phase1) * H * 0.38 + ny - 256);
    b1scale.set(1 + Math.sin(phase1 * 2.3) * 0.07 + Math.sin(phase1 * 1.1) * 0.04);
    b1rotate.set(Math.sin(phase1 * 1.7) * 15);

    const phase2 = t * 0.00031;
    b2x.set(Math.sin(2 * phase2 + 2.5) * W * 0.28 - 160);
    b2y.set(Math.sin(3 * phase2) * H * 0.28 - 160);
    b2scale.set(1 + Math.sin(phase2 * 1.8) * 0.06);
  });

  return (
    <section id="hero" className={heroClasses}>
      <div className={backgroundLayerClasses}>
        <motion.div
          className={blobOneClasses}
          style={{
            x: b1x,
            y: b1y,
            scale: b1scale,
            rotate: b1rotate,
          }}
        />
        <motion.div
          className={blobTwoClasses}
          style={{
            x: b2x,
            y: b2y,
            scale: b2scale,
          }}
        />
      </div>
      <div className={filterLayerClasses} />
      <div className={contentWrapperClasses}>
        <div className={titleBlockClasses}>
          <h1 className={titleClasses}>Ilario Fragomeni</h1>
          <p className={roleClasses}>Développeur web full stack junior</p>
        </div>
        <div className={descriptionBlockClasses}>
          <p className={descriptionClasses}>
            Étudiant en première année à la Web Academy Epitech, je développe des applications web
            full stack en utilisant des architectures REST et des bases de données relationnelles.
            Je recherche une alternance afin de renforcer mes compétences techniques et contribuer
            activement à des projets concrets au sein d'une équipe.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
