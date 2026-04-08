import { useEffect, useRef } from 'react'

function createSprite(rows) {
  const columns = rows.reduce((max, row) => Math.max(max, row.length), 0)
  const pixels = rows.flatMap((row, rowIndex) =>
    [...row].flatMap((tone, columnIndex) =>
      tone === '0'
        ? []
        : [
            {
              key: `${rowIndex}-${columnIndex}`,
              row: rowIndex,
              column: columnIndex,
              tone,
            },
          ],
    ),
  )

  return {
    columns,
    rows: rows.length,
    pixels,
  }
}

function createSpriteStyle(sprite, pixelSize, extraStyles = {}, tones = null) {
  const toneStyles = tones
    ? Object.fromEntries(
        Object.entries(tones).map(([tone, value]) => [`--sprite-tone-${tone}`, value]),
      )
    : {}

  return {
    ...extraStyles,
    ...toneStyles,
    '--sprite-columns': sprite.columns,
    '--sprite-rows': sprite.rows,
    '--sprite-pixel-size': `${pixelSize}px`,
  }
}

function SpritePixels({ sprite, prefix }) {
  return sprite.pixels.map((pixel) => (
    <span
      className={`pixel-sprite__pixel pixel-sprite__pixel--tone-${pixel.tone}`}
      key={`${prefix}-${pixel.key}`}
      style={{
        '--sprite-pixel-x': pixel.column,
        '--sprite-pixel-y': pixel.row,
      }}
    />
  ))
}

const SPRITES = {
  starTiny: createSprite(['010', '131', '010']),
  starDiamond: createSprite(['00100', '01310', '13531', '01310', '00100']),
  starCluster: createSprite(['01010', '10301', '03030', '10301', '01010']),
  starBurst: createSprite([
    '0001000',
    '0013100',
    '0135310',
    '1355531',
    '0135310',
    '0013100',
    '0001000',
  ]),
  comet: createSprite([
    '000000000001',
    '000000000012',
    '000001111234',
    '001123455554',
    '000001111234',
    '000000000012',
    '000000000001',
  ]),
  cloud: createSprite([
    '000000001110000000',
    '000000123333100000',
    '000001233444321000',
    '000123344444433210',
    '001233444444444321',
    '012334444444444432',
    '123344444444444443',
    '123344444444444432',
    '012334444444443321',
    '001233444444332100',
    '000123333333221000',
    '000001222221100000',
  ]),
  moon: createSprite([
    '000000011111100000',
    '000001233333321000',
    '000123344444432100',
    '001233444444440000',
    '012334444444400000',
    '123344444444000000',
    '123444445440000000',
    '123444444400000000',
    '123444444400000000',
    '123444445400000000',
    '123344444440000000',
    '012334444444400000',
    '001233444444432100',
    '000123344444321000',
    '000001233333210000',
    '000000011111000000',
  ]),
  earth: createSprite([
    '00001110000',
    '00012332100',
    '00123444310',
    '01234455432',
    '12344555443',
    '12344455443',
    '12345544443',
    '01234455432',
    '00123444310',
    '00012332100',
    '00001110000',
  ]),
  saturn: createSprite([
    '0000001111000000',
    '0000012333321000',
    '0000123444443210',
    '0011123444443211',
    '1111234555544321',
    '0112344444444432',
    '1111234555544321',
    '0011123444443211',
    '0000123333333210',
    '0000011111111100',
    '0011100000001110',
    '0001000000000010',
  ]),
  satelliteArray: createSprite([
    '110000011110000011',
    '110001233332100011',
    '110012344444321011',
    '000123455555432100',
    '110012344444321011',
    '110001233332100011',
    '110000011110000011',
  ]),
  satelliteProbe: createSprite([
    '000000111000000',
    '000000121000000',
    '000001232100000',
    '110012343210011',
    '111123454321111',
    '110012343210011',
    '000001232100000',
    '000000121000000',
    '000001111100000',
    '000011000110000',
  ]),
}

const PIXEL_PARTICLES = [
  { id: 1, x: 8, y: 14, sprite: SPRITES.starTiny, pixelSize: 4, color: '#8fa6ff', delay: '0s', duration: '11s' },
  { id: 2, x: 18, y: 28, sprite: SPRITES.starDiamond, pixelSize: 3, color: '#ffd5b4', delay: '1.4s', duration: '13s' },
  { id: 3, x: 26, y: 18, sprite: SPRITES.starCluster, pixelSize: 3, color: '#d4baff', delay: '0.8s', duration: '10s' },
  { id: 4, x: 34, y: 42, sprite: SPRITES.starTiny, pixelSize: 4, color: '#a9b8ff', delay: '2.2s', duration: '14s' },
  { id: 5, x: 46, y: 22, sprite: SPRITES.starDiamond, pixelSize: 3, color: '#ffd7c2', delay: '1.1s', duration: '12s' },
  { id: 6, x: 54, y: 35, sprite: SPRITES.starTiny, pixelSize: 4, color: '#cdbdff', delay: '0.3s', duration: '11s' },
  { id: 7, x: 63, y: 16, sprite: SPRITES.starCluster, pixelSize: 3, color: '#a5bcff', delay: '2.7s', duration: '13s' },
  { id: 8, x: 72, y: 44, sprite: SPRITES.starDiamond, pixelSize: 4, color: '#ffd7b9', delay: '1.8s', duration: '15s' },
  { id: 9, x: 82, y: 24, sprite: SPRITES.starTiny, pixelSize: 3, color: '#d5bfff', delay: '0.6s', duration: '12s' },
  { id: 10, x: 88, y: 52, sprite: SPRITES.starCluster, pixelSize: 3, color: '#a6b9ff', delay: '1.9s', duration: '14s' },
  { id: 11, x: 14, y: 64, sprite: SPRITES.starDiamond, pixelSize: 4, color: '#d1beff', delay: '0.5s', duration: '16s' },
  { id: 12, x: 22, y: 78, sprite: SPRITES.starTiny, pixelSize: 3, color: '#ffe0c2', delay: '1.6s', duration: '11s' },
  { id: 13, x: 37, y: 68, sprite: SPRITES.starCluster, pixelSize: 3, color: '#afc0ff', delay: '2.4s', duration: '13s' },
  { id: 14, x: 49, y: 82, sprite: SPRITES.starTiny, pixelSize: 3, color: '#cfbeff', delay: '0.9s', duration: '12s' },
]

const PIXEL_BEACONS = [
  { id: 1, x: 12, y: 22, sprite: SPRITES.starBurst, pixelSize: 3, color: '#a6b9ff', delay: '0.4s', duration: '8s' },
  { id: 2, x: 31, y: 58, sprite: SPRITES.starBurst, pixelSize: 3, color: '#d2bfff', delay: '1.2s', duration: '9s' },
  { id: 3, x: 57, y: 18, sprite: SPRITES.starBurst, pixelSize: 3, color: '#ffd8bc', delay: '0.8s', duration: '7s' },
  { id: 4, x: 74, y: 34, sprite: SPRITES.starBurst, pixelSize: 4, color: '#b4c3ff', delay: '1.9s', duration: '10s' },
  { id: 5, x: 86, y: 68, sprite: SPRITES.starBurst, pixelSize: 3, color: '#d6c6ff', delay: '0.3s', duration: '8.5s' },
]

const PIXEL_COMETS = [
  { id: 1, x: 18, y: 16, sprite: SPRITES.comet, pixelSize: 4, delay: '0s', duration: '13s', color: '#a9b9ff' },
  { id: 2, x: 64, y: 12, sprite: SPRITES.comet, pixelSize: 4, delay: '4.8s', duration: '15s', color: '#ffd6b8' },
  { id: 3, x: 78, y: 48, sprite: SPRITES.comet, pixelSize: 4, delay: '8.2s', duration: '14s', color: '#d1c0ff' },
]

const PIXEL_CLOUDS = [
  { id: 1, x: 9, y: 9, sprite: SPRITES.cloud, pixelSize: 3.5, scale: 1.34, color: '#5d6cff', delay: '0s', duration: '15s' },
  { id: 2, x: 64, y: 18, sprite: SPRITES.cloud, pixelSize: 3.5, scale: 1.18, color: '#8c66ff', delay: '3s', duration: '17s' },
  { id: 3, x: 78, y: 70, sprite: SPRITES.cloud, pixelSize: 3.5, scale: 1.48, color: '#6b80ff', delay: '6s', duration: '19s' },
]

const PIXEL_PLANETS = [
  {
    id: 1,
    x: 73,
    y: 8,
    sprite: SPRITES.moon,
    pixelSize: 4.5,
    delay: '0s',
    duration: '28s',
    glow: 'rgba(255, 245, 248, 0.2)',
    tones: {
      1: '#aa9ea8',
      2: '#cec2ca',
      3: '#f0eaee',
      4: '#fffdfd',
      5: '#bcaeb8',
    },
  },
  {
    id: 2,
    x: 13,
    y: 64,
    sprite: SPRITES.saturn,
    pixelSize: 4,
    delay: '3.5s',
    duration: '31s',
    glow: 'rgba(244, 222, 196, 0.18)',
    tones: {
      1: '#685d64',
      2: '#907c73',
      3: '#ccb5a5',
      4: '#f4ece1',
      5: '#dcc4ae',
    },
  },
  {
    id: 3,
    x: 84,
    y: 36,
    sprite: SPRITES.earth,
    pixelSize: 4,
    delay: '6s',
    duration: '24s',
    glow: 'rgba(160, 202, 255, 0.16)',
    tones: {
      1: '#4b5568',
      2: '#536e90',
      3: '#7ba3d5',
      4: '#ecf6ff',
      5: '#8db27c',
    },
  },
]

const PIXEL_SATELLITES = [
  {
    id: 1,
    x: 24,
    y: 22,
    sprite: SPRITES.satelliteArray,
    pixelSize: 4,
    delay: '0s',
    duration: '18s',
    glow: 'rgba(190, 202, 255, 0.16)',
    tones: {
      1: '#6a6374',
      2: '#948b9f',
      3: '#ddd7e6',
      4: '#fffaff',
      5: '#b8c9ff',
    },
  },
  {
    id: 2,
    x: 68,
    y: 56,
    sprite: SPRITES.satelliteProbe,
    pixelSize: 4,
    delay: '5s',
    duration: '20s',
    glow: 'rgba(212, 194, 255, 0.16)',
    tones: {
      1: '#6e6678',
      2: '#9d90ab',
      3: '#e3dbea',
      4: '#fffaff',
      5: '#d3c3ff',
    },
  },
]

export function PixelArtBackdrop({ settings }) {
  const backdropRef = useRef(null)

  useEffect(() => {
    const element = backdropRef.current

    if (!element || typeof window === 'undefined') {
      return undefined
    }

    let frameId = 0
    let shiftX = 0
    let shiftY = 0
    let scrollDrift = 0

    const commitMotion = () => {
      frameId = 0
      element.style.setProperty('--pixel-shift-x', `${shiftX.toFixed(2)}px`)
      element.style.setProperty('--pixel-shift-y', `${shiftY.toFixed(2)}px`)
      element.style.setProperty('--pixel-scroll-y', `${scrollDrift.toFixed(2)}px`)
    }

    const queueMotion = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(commitMotion)
      }
    }

    const handlePointerMove = (event) => {
      if (!settings.parallax) {
        return
      }

      shiftX = ((event.clientX / window.innerWidth) - 0.5) * 18
      shiftY = ((event.clientY / window.innerHeight) - 0.5) * 18
      queueMotion()
    }

    const handlePointerLeave = () => {
      shiftX = 0
      shiftY = 0
      queueMotion()
    }

    const handleScroll = () => {
      if (!settings.parallax) {
        scrollDrift = 0
        queueMotion()
        return
      }

      scrollDrift = Math.max(-28, Math.min(28, window.scrollY * -0.035))
      queueMotion()
    }

    handleScroll()
    handlePointerLeave()

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [settings.parallax])

  return (
    <div className="pixel-backdrop" ref={backdropRef}>
      {settings.enabled ? (
        <div className="pixel-backdrop__scene" aria-hidden="true">
          {settings.particles ? (
            <div className="pixel-backdrop__layer pixel-backdrop__layer--particles">
              {PIXEL_PARTICLES.map((particle) => (
                <span
                  className="pixel-particle"
                  key={particle.id}
                  style={createSpriteStyle(particle.sprite, particle.pixelSize, {
                    '--pixel-x': `${particle.x}%`,
                    '--pixel-y': `${particle.y}%`,
                    '--pixel-color': particle.color,
                    '--pixel-delay': particle.delay,
                    '--pixel-duration': particle.duration,
                  })}
                >
                  <span className="pixel-sprite">
                    <SpritePixels prefix={`particle-${particle.id}`} sprite={particle.sprite} />
                  </span>
                </span>
              ))}
            </div>
          ) : null}

          {settings.beacons ? (
            <div className="pixel-backdrop__layer pixel-backdrop__layer--beacons">
              {PIXEL_BEACONS.map((beacon) => (
                <span
                  className="pixel-beacon"
                  key={beacon.id}
                  style={createSpriteStyle(beacon.sprite, beacon.pixelSize, {
                    '--beacon-x': `${beacon.x}%`,
                    '--beacon-y': `${beacon.y}%`,
                    '--beacon-color': beacon.color,
                    '--beacon-delay': beacon.delay,
                    '--beacon-duration': beacon.duration,
                  })}
                >
                  <span className="pixel-sprite">
                    <SpritePixels prefix={`beacon-${beacon.id}`} sprite={beacon.sprite} />
                  </span>
                </span>
              ))}
            </div>
          ) : null}

          {settings.comets ? (
            <div className="pixel-backdrop__layer pixel-backdrop__layer--comets">
              {PIXEL_COMETS.map((comet) => (
                <span
                  className="pixel-comet"
                  key={comet.id}
                  style={createSpriteStyle(comet.sprite, comet.pixelSize, {
                    '--comet-x': `${comet.x}%`,
                    '--comet-y': `${comet.y}%`,
                    '--comet-color': comet.color,
                    '--comet-delay': comet.delay,
                    '--comet-duration': comet.duration,
                  })}
                >
                  <span className="pixel-sprite">
                    <SpritePixels prefix={`comet-${comet.id}`} sprite={comet.sprite} />
                  </span>
                </span>
              ))}
            </div>
          ) : null}

          {settings.clouds ? (
            <div className="pixel-backdrop__layer pixel-backdrop__layer--clouds">
              {PIXEL_CLOUDS.map((cloud) => (
                <span
                  className="pixel-cloud"
                  key={cloud.id}
                  style={createSpriteStyle(cloud.sprite, cloud.pixelSize, {
                    '--cloud-x': `${cloud.x}%`,
                    '--cloud-y': `${cloud.y}%`,
                    '--cloud-scale': cloud.scale,
                    '--cloud-color': cloud.color,
                    '--cloud-delay': cloud.delay,
                    '--cloud-duration': cloud.duration,
                  })}
                >
                  <span className="pixel-cloud__glow" />
                  <span className="pixel-sprite">
                    <SpritePixels prefix={`cloud-${cloud.id}`} sprite={cloud.sprite} />
                  </span>
                </span>
              ))}
            </div>
          ) : null}

          {settings.planets ? (
            <div className="pixel-backdrop__layer pixel-backdrop__layer--planets">
              {PIXEL_PLANETS.map((planet) => (
                <span
                  className="pixel-planet"
                  key={planet.id}
                  style={createSpriteStyle(
                    planet.sprite,
                    planet.pixelSize,
                    {
                      '--planet-x': `${planet.x}%`,
                      '--planet-y': `${planet.y}%`,
                      '--planet-delay': planet.delay,
                      '--planet-duration': planet.duration,
                      '--planet-glow': planet.glow,
                    },
                    planet.tones,
                  )}
                >
                  <span className="pixel-sprite">
                    <SpritePixels prefix={`planet-${planet.id}`} sprite={planet.sprite} />
                  </span>
                </span>
              ))}
            </div>
          ) : null}

          {settings.satellites ? (
            <div className="pixel-backdrop__layer pixel-backdrop__layer--satellites">
              {PIXEL_SATELLITES.map((satellite) => (
                <span
                  className="pixel-satellite"
                  key={satellite.id}
                  style={createSpriteStyle(
                    satellite.sprite,
                    satellite.pixelSize,
                    {
                      '--satellite-x': `${satellite.x}%`,
                      '--satellite-y': `${satellite.y}%`,
                      '--satellite-delay': satellite.delay,
                      '--satellite-duration': satellite.duration,
                      '--satellite-glow': satellite.glow,
                    },
                    satellite.tones,
                  )}
                >
                  <span className="pixel-sprite">
                    <SpritePixels prefix={`satellite-${satellite.id}`} sprite={satellite.sprite} />
                  </span>
                </span>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
