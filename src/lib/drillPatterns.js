// Real, hand-mapped tactical patterns — one of these is assigned to every
// drill based on what it actually involves, rather than a generic shape
// shared by everything with the same cone layout. Each pattern has exactly
// 4 keyframes (every drill in the library has exactly 4 instruction steps).
// Role types: 'attacker' | 'defender' | 'server' | 'keeper'

function fixed(roles, keyframes) {
  return () => ({ roles, keyframes })
}

// ---- Fixed-role patterns ----

const soloDribble = fixed(
  [{ type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 85 }], ball: { x: 50, y: 85 }, arrows: [] },
    { roles: [{ x: 25, y: 58 }], ball: { x: 25, y: 58 }, arrows: [{ type: 'dribble', from: { x: 50, y: 85 }, to: { x: 25, y: 58 } }] },
    { roles: [{ x: 72, y: 32 }], ball: { x: 72, y: 32 }, arrows: [{ type: 'dribble', from: { x: 25, y: 58 }, to: { x: 72, y: 32 } }] },
    { roles: [{ x: 50, y: 10 }], ball: { x: 50, y: 10 }, arrows: [{ type: 'dribble', from: { x: 72, y: 32 }, to: { x: 50, y: 10 } }] }
  ]
)

const soloDribbleShoot = fixed(
  [{ type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 85 }], ball: { x: 50, y: 85 }, arrows: [] },
    { roles: [{ x: 32, y: 55 }], ball: { x: 32, y: 55 }, arrows: [{ type: 'dribble', from: { x: 50, y: 85 }, to: { x: 32, y: 55 } }] },
    { roles: [{ x: 50, y: 30 }], ball: { x: 50, y: 30 }, arrows: [{ type: 'dribble', from: { x: 32, y: 55 }, to: { x: 50, y: 30 } }] },
    { roles: [{ x: 48, y: 26 }], ball: { x: 50, y: 6 }, arrows: [{ type: 'pass', from: { x: 50, y: 30 }, to: { x: 50, y: 6 } }] }
  ]
)

const freestyleSolo = fixed(
  [{ type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 50 }], ball: { x: 50, y: 50 }, arrows: [] },
    { roles: [{ x: 40, y: 50 }], ball: { x: 40, y: 50 }, arrows: [{ type: 'dribble', from: { x: 50, y: 50 }, to: { x: 40, y: 50 } }] },
    { roles: [{ x: 60, y: 50 }], ball: { x: 60, y: 50 }, arrows: [{ type: 'dribble', from: { x: 40, y: 50 }, to: { x: 60, y: 50 } }] },
    { roles: [{ x: 50, y: 50 }], ball: { x: 50, y: 50 }, arrows: [{ type: 'dribble', from: { x: 60, y: 50 }, to: { x: 50, y: 50 } }] }
  ]
)

const oneVOneDuel = fixed(
  [{ type: 'attacker' }, { type: 'defender' }],
  [
    { roles: [{ x: 50, y: 85 }, { x: 50, y: 25 }], ball: { x: 50, y: 85 }, arrows: [] },
    { roles: [{ x: 32, y: 55 }, { x: 40, y: 46 }], ball: { x: 32, y: 55 }, arrows: [{ type: 'dribble', from: { x: 50, y: 85 }, to: { x: 32, y: 55 } }, { type: 'run', from: { x: 50, y: 25 }, to: { x: 40, y: 46 } }] },
    { roles: [{ x: 68, y: 34 }, { x: 55, y: 38 }], ball: { x: 68, y: 34 }, arrows: [{ type: 'dribble', from: { x: 32, y: 55 }, to: { x: 68, y: 34 } }, { type: 'run', from: { x: 40, y: 46 }, to: { x: 55, y: 38 } }] },
    { roles: [{ x: 50, y: 10 }, { x: 50, y: 20 }], ball: { x: 50, y: 10 }, arrows: [{ type: 'dribble', from: { x: 68, y: 34 }, to: { x: 50, y: 10 } }, { type: 'run', from: { x: 55, y: 38 }, to: { x: 50, y: 20 } }] }
  ]
)

const serverFinisher = fixed(
  [{ type: 'server' }, { type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 85 }, { x: 50, y: 35 }], ball: { x: 50, y: 85 }, arrows: [] },
    { roles: [{ x: 50, y: 85 }, { x: 30, y: 18 }], ball: { x: 50, y: 85 }, arrows: [{ type: 'run', from: { x: 50, y: 35 }, to: { x: 30, y: 18 } }] },
    { roles: [{ x: 50, y: 85 }, { x: 30, y: 18 }], ball: { x: 30, y: 18 }, arrows: [{ type: 'pass', from: { x: 50, y: 85 }, to: { x: 30, y: 18 } }] },
    { roles: [{ x: 50, y: 85 }, { x: 30, y: 18 }], ball: { x: 50, y: 6 }, arrows: [{ type: 'pass', from: { x: 30, y: 18 }, to: { x: 50, y: 6 } }] }
  ]
)

const giveAndGo = fixed(
  [{ type: 'attacker' }, { type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 85 }, { x: 50, y: 45 }], ball: { x: 50, y: 85 }, arrows: [] },
    { roles: [{ x: 50, y: 85 }, { x: 50, y: 45 }], ball: { x: 50, y: 45 }, arrows: [{ type: 'pass', from: { x: 50, y: 85 }, to: { x: 50, y: 45 } }] },
    { roles: [{ x: 30, y: 20 }, { x: 50, y: 45 }], ball: { x: 50, y: 45 }, arrows: [{ type: 'run', from: { x: 50, y: 85 }, to: { x: 30, y: 20 } }] },
    { roles: [{ x: 30, y: 20 }, { x: 50, y: 45 }], ball: { x: 30, y: 20 }, arrows: [{ type: 'pass', from: { x: 50, y: 45 }, to: { x: 30, y: 20 } }] }
  ]
)

const thirdManRun = fixed(
  [{ type: 'attacker' }, { type: 'attacker' }, { type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 85 }, { x: 25, y: 55 }, { x: 75, y: 55 }], ball: { x: 50, y: 85 }, arrows: [] },
    { roles: [{ x: 50, y: 85 }, { x: 25, y: 55 }, { x: 75, y: 55 }], ball: { x: 25, y: 55 }, arrows: [{ type: 'pass', from: { x: 50, y: 85 }, to: { x: 25, y: 55 } }] },
    { roles: [{ x: 50, y: 85 }, { x: 25, y: 55 }, { x: 50, y: 22 }], ball: { x: 25, y: 55 }, arrows: [{ type: 'run', from: { x: 75, y: 55 }, to: { x: 50, y: 22 } }] },
    { roles: [{ x: 50, y: 85 }, { x: 25, y: 55 }, { x: 50, y: 22 }], ball: { x: 50, y: 22 }, arrows: [{ type: 'pass', from: { x: 25, y: 55 }, to: { x: 50, y: 22 } }] }
  ]
)

const passingLine = fixed(
  [{ type: 'attacker' }, { type: 'attacker' }],
  [
    { roles: [{ x: 18, y: 50 }, { x: 82, y: 50 }], ball: { x: 18, y: 50 }, arrows: [] },
    { roles: [{ x: 18, y: 50 }, { x: 82, y: 50 }], ball: { x: 82, y: 50 }, arrows: [{ type: 'pass', from: { x: 18, y: 50 }, to: { x: 82, y: 50 } }] },
    { roles: [{ x: 18, y: 50 }, { x: 82, y: 50 }], ball: { x: 18, y: 50 }, arrows: [{ type: 'pass', from: { x: 82, y: 50 }, to: { x: 18, y: 50 } }] },
    { roles: [{ x: 18, y: 50 }, { x: 82, y: 50 }], ball: { x: 82, y: 50 }, arrows: [{ type: 'pass', from: { x: 18, y: 50 }, to: { x: 82, y: 50 } }] }
  ]
)

const mirrorPair = fixed(
  [{ type: 'attacker' }, { type: 'defender' }],
  [
    { roles: [{ x: 35, y: 50 }, { x: 65, y: 50 }], ball: null, arrows: [] },
    { roles: [{ x: 35, y: 30 }, { x: 65, y: 30 }], ball: null, arrows: [{ type: 'run', from: { x: 35, y: 50 }, to: { x: 35, y: 30 } }, { type: 'run', from: { x: 65, y: 50 }, to: { x: 65, y: 30 } }] },
    { roles: [{ x: 35, y: 70 }, { x: 65, y: 70 }], ball: null, arrows: [{ type: 'run', from: { x: 35, y: 30 }, to: { x: 35, y: 70 } }, { type: 'run', from: { x: 65, y: 30 }, to: { x: 65, y: 70 } }] },
    { roles: [{ x: 35, y: 50 }, { x: 65, y: 50 }], ball: null, arrows: [{ type: 'run', from: { x: 35, y: 70 }, to: { x: 35, y: 50 } }, { type: 'run', from: { x: 65, y: 70 }, to: { x: 65, y: 50 } }] }
  ]
)

const pressureReceive = fixed(
  [{ type: 'attacker' }, { type: 'attacker' }, { type: 'defender' }],
  [
    { roles: [{ x: 50, y: 78 }, { x: 50, y: 42 }, { x: 50, y: 15 }], ball: { x: 50, y: 78 }, arrows: [] },
    { roles: [{ x: 50, y: 78 }, { x: 50, y: 42 }, { x: 50, y: 26 }], ball: { x: 50, y: 42 }, arrows: [{ type: 'pass', from: { x: 50, y: 78 }, to: { x: 50, y: 42 } }, { type: 'run', from: { x: 50, y: 15 }, to: { x: 50, y: 26 } }] },
    { roles: [{ x: 50, y: 78 }, { x: 32, y: 36 }, { x: 50, y: 26 }], ball: { x: 32, y: 36 }, arrows: [{ type: 'dribble', from: { x: 50, y: 42 }, to: { x: 32, y: 36 } }] },
    { roles: [{ x: 50, y: 78 }, { x: 32, y: 36 }, { x: 50, y: 26 }], ball: { x: 18, y: 48 }, arrows: [{ type: 'pass', from: { x: 32, y: 36 }, to: { x: 18, y: 48 } }] }
  ]
)

const recoverySprint = fixed(
  [{ type: 'defender' }],
  [
    { roles: [{ x: 50, y: 22 }], ball: null, arrows: [] },
    { roles: [{ x: 50, y: 55 }], ball: null, arrows: [{ type: 'run', from: { x: 50, y: 22 }, to: { x: 50, y: 55 } }] },
    { roles: [{ x: 50, y: 88 }], ball: null, arrows: [{ type: 'run', from: { x: 50, y: 55 }, to: { x: 50, y: 88 } }] },
    { roles: [{ x: 42, y: 80 }], ball: null, arrows: [{ type: 'run', from: { x: 50, y: 88 }, to: { x: 42, y: 80 } }] }
  ]
)

const crossAndFinish = fixed(
  [{ type: 'server' }, { type: 'attacker' }, { type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 70 }, { x: 15, y: 55 }, { x: 50, y: 20 }], ball: { x: 50, y: 70 }, arrows: [] },
    { roles: [{ x: 50, y: 70 }, { x: 15, y: 55 }, { x: 50, y: 20 }], ball: { x: 15, y: 55 }, arrows: [{ type: 'pass', from: { x: 50, y: 70 }, to: { x: 15, y: 55 } }] },
    { roles: [{ x: 50, y: 70 }, { x: 10, y: 35 }, { x: 50, y: 20 }], ball: { x: 10, y: 35 }, arrows: [{ type: 'dribble', from: { x: 15, y: 55 }, to: { x: 10, y: 35 } }] },
    { roles: [{ x: 50, y: 70 }, { x: 10, y: 35 }, { x: 58, y: 14 }], ball: { x: 58, y: 14 }, arrows: [{ type: 'pass', from: { x: 10, y: 35 }, to: { x: 58, y: 14 } }] }
  ]
)

const turnAndShoot = fixed(
  [{ type: 'server' }, { type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 75 }, { x: 50, y: 35 }], ball: { x: 50, y: 75 }, arrows: [] },
    { roles: [{ x: 50, y: 75 }, { x: 50, y: 35 }], ball: { x: 50, y: 35 }, arrows: [{ type: 'pass', from: { x: 50, y: 75 }, to: { x: 50, y: 35 } }] },
    { roles: [{ x: 50, y: 75 }, { x: 50, y: 30 }], ball: { x: 50, y: 30 }, arrows: [{ type: 'dribble', from: { x: 50, y: 35 }, to: { x: 50, y: 30 } }] },
    { roles: [{ x: 50, y: 75 }, { x: 50, y: 30 }], ball: { x: 50, y: 6 }, arrows: [{ type: 'pass', from: { x: 50, y: 30 }, to: { x: 50, y: 6 } }] }
  ]
)

const combinationOverlap = fixed(
  [{ type: 'attacker' }, { type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 70 }, { x: 30, y: 60 }], ball: { x: 50, y: 70 }, arrows: [] },
    { roles: [{ x: 40, y: 60 }, { x: 30, y: 60 }], ball: { x: 40, y: 60 }, arrows: [{ type: 'dribble', from: { x: 50, y: 70 }, to: { x: 40, y: 60 } }] },
    { roles: [{ x: 40, y: 60 }, { x: 70, y: 28 }], ball: { x: 40, y: 60 }, arrows: [{ type: 'run', from: { x: 30, y: 60 }, to: { x: 70, y: 28 } }] },
    { roles: [{ x: 40, y: 60 }, { x: 70, y: 28 }], ball: { x: 70, y: 28 }, arrows: [{ type: 'pass', from: { x: 40, y: 60 }, to: { x: 70, y: 28 } }] }
  ]
)

const duelBox = fixed(
  [{ type: 'attacker' }, { type: 'defender' }],
  [
    { roles: [{ x: 35, y: 50 }, { x: 65, y: 50 }], ball: { x: 50, y: 50 }, arrows: [] },
    { roles: [{ x: 46, y: 50 }, { x: 54, y: 50 }], ball: { x: 50, y: 50 }, arrows: [{ type: 'run', from: { x: 35, y: 50 }, to: { x: 46, y: 50 } }, { type: 'run', from: { x: 65, y: 50 }, to: { x: 54, y: 50 } }] },
    { roles: [{ x: 35, y: 35 }, { x: 58, y: 45 }], ball: { x: 35, y: 35 }, arrows: [{ type: 'dribble', from: { x: 50, y: 50 }, to: { x: 35, y: 35 } }] },
    { roles: [{ x: 22, y: 18 }, { x: 45, y: 30 }], ball: { x: 22, y: 18 }, arrows: [{ type: 'dribble', from: { x: 35, y: 35 }, to: { x: 22, y: 18 } }] }
  ]
)

const setPieceDefending = fixed(
  [{ type: 'server' }, { type: 'defender' }, { type: 'defender' }, { type: 'defender' }, { type: 'keeper' }],
  [
    { roles: [{ x: 10, y: 85 }, { x: 42, y: 30 }, { x: 50, y: 25 }, { x: 58, y: 30 }, { x: 50, y: 12 }], ball: { x: 10, y: 85 }, arrows: [] },
    { roles: [{ x: 10, y: 85 }, { x: 42, y: 30 }, { x: 50, y: 25 }, { x: 58, y: 30 }, { x: 50, y: 12 }], ball: { x: 45, y: 25 }, arrows: [{ type: 'pass', from: { x: 10, y: 85 }, to: { x: 45, y: 25 } }] },
    { roles: [{ x: 10, y: 85 }, { x: 45, y: 25 }, { x: 50, y: 25 }, { x: 58, y: 30 }, { x: 50, y: 12 }], ball: { x: 45, y: 25 }, arrows: [{ type: 'run', from: { x: 42, y: 30 }, to: { x: 45, y: 25 } }] },
    { roles: [{ x: 10, y: 85 }, { x: 45, y: 25 }, { x: 50, y: 25 }, { x: 58, y: 30 }, { x: 50, y: 12 }], ball: { x: 30, y: 55 }, arrows: [{ type: 'pass', from: { x: 45, y: 25 }, to: { x: 30, y: 55 } }] }
  ]
)

const twoVTwoEndline = fixed(
  [{ type: 'attacker' }, { type: 'attacker' }, { type: 'defender' }, { type: 'defender' }],
  [
    { roles: [{ x: 40, y: 80 }, { x: 60, y: 80 }, { x: 42, y: 40 }, { x: 58, y: 40 }], ball: { x: 40, y: 80 }, arrows: [] },
    { roles: [{ x: 35, y: 60 }, { x: 60, y: 80 }, { x: 40, y: 45 }, { x: 58, y: 40 }], ball: { x: 35, y: 60 }, arrows: [{ type: 'dribble', from: { x: 40, y: 80 }, to: { x: 35, y: 60 } }, { type: 'run', from: { x: 42, y: 40 }, to: { x: 40, y: 45 } }] },
    { roles: [{ x: 35, y: 60 }, { x: 65, y: 45 }, { x: 40, y: 45 }, { x: 55, y: 42 }], ball: { x: 65, y: 45 }, arrows: [{ type: 'pass', from: { x: 35, y: 60 }, to: { x: 65, y: 45 } }, { type: 'run', from: { x: 58, y: 40 }, to: { x: 55, y: 42 } }] },
    { roles: [{ x: 35, y: 60 }, { x: 65, y: 20 }, { x: 40, y: 45 }, { x: 55, y: 42 }], ball: { x: 65, y: 20 }, arrows: [{ type: 'dribble', from: { x: 65, y: 45 }, to: { x: 65, y: 20 } }] }
  ]
)

const soloRun = fixed(
  [{ type: 'attacker' }],
  [
    { roles: [{ x: 50, y: 82 }], ball: null, arrows: [] },
    { roles: [{ x: 30, y: 55 }], ball: null, arrows: [{ type: 'run', from: { x: 50, y: 82 }, to: { x: 30, y: 55 } }] },
    { roles: [{ x: 70, y: 30 }], ball: null, arrows: [{ type: 'run', from: { x: 30, y: 55 }, to: { x: 70, y: 30 } }] },
    { roles: [{ x: 50, y: 10 }], ball: null, arrows: [{ type: 'run', from: { x: 70, y: 30 }, to: { x: 50, y: 10 } }] }
  ]
)

function restCircle(count) {
  const n = Math.min(Math.max(count, 4), 10)
  const roles = Array.from({ length: n }, () => ({ type: 'attacker' }))
  const positions = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2
    return { x: 50 + 34 * Math.cos(a), y: 50 + 34 * Math.sin(a) }
  })
  const kf = { roles: positions, ball: null, arrows: [] }
  return { roles, keyframes: [kf, kf, kf, kf] }
}

// ---- Flexible (count-based) patterns ----

function polygonRotation(count) {
  const n = Math.min(Math.max(count, 3), 8)
  const roles = Array.from({ length: n }, () => ({ type: 'attacker' }))
  const positions = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * 2 * Math.PI - Math.PI / 2
    return { x: 50 + 34 * Math.cos(a), y: 50 + 34 * Math.sin(a) }
  })
  const keyframes = [0, 1, 2, 3].map((step) => {
    const ballIndex = step % n
    const prevIndex = (step - 1 + n) % n
    return {
      roles: positions,
      ball: positions[ballIndex],
      arrows: step === 0 ? [] : [{ type: 'pass', from: positions[prevIndex], to: positions[ballIndex] }]
    }
  })
  return { roles, keyframes }
}

function rondoKeepAway(count) {
  const total = Math.min(Math.max(count, 4), 10)
  const defCount = total >= 6 ? 2 : 1
  const attCount = total - defCount
  const roles = [
    ...Array.from({ length: attCount }, () => ({ type: 'attacker' })),
    ...Array.from({ length: defCount }, () => ({ type: 'defender' }))
  ]
  const attPositions = Array.from({ length: attCount }, (_, i) => {
    const a = (i / attCount) * 2 * Math.PI - Math.PI / 2
    return { x: 50 + 36 * Math.cos(a), y: 50 + 36 * Math.sin(a) }
  })
  const keyframes = [0, 1, 2, 3].map((step) => {
    const ballIndex = step % attCount
    const prevIndex = (step - 1 + attCount) % attCount
    const defPositions = Array.from({ length: defCount }, (_, i) => {
      const target = attPositions[ballIndex]
      return { x: 50 + (target.x - 50) * 0.25 + (i - (defCount - 1) / 2) * 8, y: 50 + (target.y - 50) * 0.25 }
    })
    return {
      roles: [...attPositions, ...defPositions],
      ball: attPositions[ballIndex],
      arrows: step === 0 ? [] : [{ type: 'pass', from: attPositions[prevIndex], to: attPositions[ballIndex] }]
    }
  })
  return { roles, keyframes }
}

function smallSidedFreePlay(count) {
  const total = Math.min(Math.max(count, 4), 10)
  const half = Math.ceil(total / 2)
  const roles = [
    ...Array.from({ length: half }, () => ({ type: 'attacker' })),
    ...Array.from({ length: total - half }, () => ({ type: 'defender' }))
  ]
  const teamA = Array.from({ length: half }, (_, i) => ({ x: 20 + (i % 3) * 20, y: 65 + Math.floor(i / 3) * 18 }))
  const teamB = Array.from({ length: total - half }, (_, i) => ({ x: 20 + (i % 3) * 20, y: 20 + Math.floor(i / 3) * 18 }))
  const seq = [teamA[0], teamA[Math.min(1, half - 1)], teamA[Math.min(2, half - 1)], { x: 50, y: 10 }]
  const keyframes = seq.map((pos, step) => ({
    roles: [...teamA, ...teamB],
    ball: pos,
    arrows: step === 0 ? [] : [{ type: 'pass', from: seq[step - 1], to: pos }]
  }))
  return { roles, keyframes }
}

function zoneAdvance(count) {
  const total = Math.min(Math.max(count, 4), 10)
  const roles = Array.from({ length: total }, () => ({ type: 'attacker' }))
  const zoneX = [18, 50, 82]
  const positions = Array.from({ length: total }, (_, i) => ({ x: zoneX[i % 3], y: 30 + Math.floor(i / 3) * 30 }))
  const ballSeq = [{ x: 18, y: 75 }, { x: 50, y: 50 }, { x: 82, y: 25 }, { x: 82, y: 10 }]
  const keyframes = ballSeq.map((pos, step) => ({
    roles: positions,
    ball: pos,
    arrows: step === 0 ? [] : [{ type: 'pass', from: ballSeq[step - 1], to: pos }]
  }))
  return { roles, keyframes }
}

function defensiveShadowLine(count) {
  const total = Math.min(Math.max(count, 3), 6)
  const roles = Array.from({ length: total }, () => ({ type: 'defender' }))
  function line(centerY, offsetX) {
    return Array.from({ length: total }, (_, i) => ({ x: 50 + (i - (total - 1) / 2) * 14 + offsetX, y: centerY }))
  }
  const p0 = line(55, 0)
  const p1 = line(55, -14)
  const p2 = line(55, 14)
  const p3 = line(40, 0)
  const frames = [p0, p1, p2, p3]
  const keyframes = frames.map((positions, step) => ({
    roles: positions,
    ball: null,
    arrows: step === 0 ? [] : [{ type: 'run', from: frames[step - 1][0], to: positions[0] }]
  }))
  return { roles, keyframes }
}

function pressTrap(count) {
  const total = Math.min(Math.max(count, 3), 5)
  const defCount = total - 1
  const roles = [{ type: 'attacker' }, ...Array.from({ length: defCount }, () => ({ type: 'defender' }))]
  const attPos = { x: 50, y: 50 }
  function defPositions(radius) {
    return Array.from({ length: defCount }, (_, i) => {
      const a = (i / defCount) * 2 * Math.PI
      return { x: 50 + radius * Math.cos(a), y: 50 + radius * Math.sin(a) * 0.8 }
    })
  }
  const d0 = defPositions(38)
  const d1 = defPositions(24)
  const d2 = defPositions(14)
  const frames = [d0, d1, d2, d1]
  const keyframes = frames.map((dpos, step) => ({
    roles: [attPos, ...dpos],
    ball: attPos,
    arrows: step === 0 ? [] : dpos.map((p, i) => ({ type: 'run', from: frames[step - 1][i], to: p }))
  }))
  return { roles, keyframes }
}

export const PATTERNS = {
  soloDribble, soloDribbleShoot, freestyleSolo, oneVOneDuel, serverFinisher, giveAndGo,
  thirdManRun, passingLine, mirrorPair, pressureReceive, recoverySprint, crossAndFinish,
  turnAndShoot, combinationOverlap, duelBox, setPieceDefending, twoVTwoEndline, soloRun,
  restCircle, polygonRotation, rondoKeepAway, smallSidedFreePlay, zoneAdvance,
  defensiveShadowLine, pressTrap
}

export const DRILL_PATTERN = {
  w1: 'soloDribble', w2: 'soloDribble', w3: 'rondoKeepAway', w4: 'freestyleSolo',
  w5: 'polygonRotation', w6: 'oneVOneDuel', w7: 'mirrorPair', w8: 'soloDribble', w9: 'polygonRotation',
  d1: 'soloDribble', d2: 'oneVOneDuel', d3: 'soloDribble', d4: 'soloDribble', d5: 'oneVOneDuel',
  d6: 'freestyleSolo', d7: 'soloDribble', d8: 'soloDribble', d9: 'oneVOneDuel', d10: 'soloDribble',
  d11: 'soloDribble', d12: 'freestyleSolo', d13: 'soloDribble',
  p1: 'polygonRotation', p2: 'passingLine', p3: 'rondoKeepAway', p4: 'giveAndGo', p5: 'passingLine',
  p6: 'giveAndGo', p7: 'pressureReceive', p8: 'polygonRotation', p9: 'rondoKeepAway', p10: 'passingLine',
  p11: 'rondoKeepAway', p12: 'rondoKeepAway', p13: 'polygonRotation', p14: 'passingLine',
  s1: 'soloDribbleShoot', s2: 'oneVOneDuel', s3: 'serverFinisher', s4: 'crossAndFinish',
  s5: 'serverFinisher', s6: 'soloDribbleShoot', s7: 'soloDribbleShoot', s8: 'soloDribbleShoot',
  s9: 'soloDribbleShoot', s10: 'giveAndGo', s11: 'serverFinisher', s12: 'soloDribbleShoot', s13: 'turnAndShoot',
  def1: 'oneVOneDuel', def2: 'mirrorPair', def3: 'rondoKeepAway', def4: 'recoverySprint',
  def5: 'defensiveShadowLine', def6: 'oneVOneDuel', def7: 'twoVTwoEndline', def8: 'oneVOneDuel',
  def9: 'crossAndFinish', def10: 'defensiveShadowLine', def11: 'pressTrap', def12: 'rondoKeepAway', def13: 'recoverySprint',
  f1: 'soloRun', f2: 'soloRun', f3: 'soloRun', f4: 'recoverySprint', f5: 'soloRun', f6: 'soloRun', f7: 'soloRun', f8: 'soloRun',
  ssg1: 'smallSidedFreePlay', ssg2: 'rondoKeepAway', ssg3: 'zoneAdvance', ssg4: 'rondoKeepAway',
  ssg5: 'smallSidedFreePlay', ssg6: 'zoneAdvance', ssg7: 'smallSidedFreePlay', ssg8: 'rondoKeepAway',
  ssg9: 'zoneAdvance', ssg10: 'smallSidedFreePlay', ssg11: 'zoneAdvance', ssg12: 'combinationOverlap',
  c1: 'restCircle', c2: 'restCircle', c3: 'restCircle', c4: 'restCircle', c5: 'restCircle',
  bp1: 'polygonRotation', bp2: 'pressTrap', bp3: 'zoneAdvance', bp4: 'rondoKeepAway',
  ar1: 'thirdManRun', ar2: 'combinationOverlap', ar3: 'giveAndGo', ar4: 'thirdManRun',
  epl1: 'duelBox', epl2: 'duelBox', epl3: 'smallSidedFreePlay', epl4: 'setPieceDefending', epl5: 'oneVOneDuel',
  cp1: 'zoneAdvance', cp2: 'pressTrap', if1: 'smallSidedFreePlay', if2: 'combinationOverlap',
  org1: 'defensiveShadowLine', org2: 'defensiveShadowLine', fl1: 'freestyleSolo', fl2: 'oneVOneDuel',
  el1: 'thirdManRun', el2: 'giveAndGo', el3: 'pressureReceive', el4: 'pressTrap', el5: 'polygonRotation',
  el6: 'pressureReceive', el7: 'soloDribble', el8: 'smallSidedFreePlay', el9: 'soloDribbleShoot', el10: 'zoneAdvance'
}

export function getDrillPattern(drill) {
  const key = DRILL_PATTERN[drill.id] || 'soloDribble'
  const fn = PATTERNS[key]
  return fn(drill.diagramPlayers || 2)
}
