
export const DIAL_GEOMETRY = {
  // The needle artwork points straight up at 0deg. These angles follow the
  // first and last printed tick marks on each meter face.
  voltmeter: { maxValue: 50, startAngle: -90, sweepAngle: 180 }, // Volts
  // All four ammeter faces are marked from 0 to 50 mA.
  ammeter: { maxValue: 50, startAngle: -90, sweepAngle: 180 }, // milliAmps
  // The current wattmeter artwork is a 0-1 W dial.
  wattmeter: { maxValue: 1, startAngle: -90, sweepAngle: 180 }, // Watts
}

// 🎯 THE 12 R/L/C CASES — edit any number below to change what the meters
// display and how far the needles rotate at 30 V.
export const RLC_METER_TABLE = [
  {
    r: '1',
    l: '3',
    c: '2.7',
    nature: 'Inductive',
    current: 30.60,
    vR: 29.55,
    vL: 31,
    vC: 26.20,
    power: 0.88,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '1',
    l: '3',
    c: '4.7',
    nature: 'Capacitive',
    current: 32,
    vR: 29.55,
    vL: 31,
    vC: 45.50,
    power: 0.88,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '1',
    l: '5',
    c: '2.7',
    nature: 'Capacitive',
    current: 30.60,
    vR: 29.55,
    vL: 18.75,
    vC: 26.20,
    power: 0.88,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '1',
    l: '5',
    c: '4.7',
    nature: 'Capacitive',
    current: 39,
    vR: 29.55,
    vL: 18.75,
    vC: 45.50,
    power: 0.88,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '2',
    l: '3',
    c: '2.7',
    nature: 'Inductive',
    current: 16.80,
    vR: 14.50,
    vL: 31,
    vC: 26.20,
    power: 0.45,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '2',
    l: '3',
    c: '4.7',
    nature: 'Capacitive',
    current: 19.20,
    vR: 14.50,
    vL: 31,
    vC: 45.50,
    power: 0.45,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '2',
    l: '5',
    c: '2.7',
    nature: 'Capacitive',
    current: 16,
    vR: 14.50,
    vL: 18.75,
    vC: 26.20,
    power: 0.45,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '2',
    l: '5',
    c: '4.7',
    nature: 'Capacitive',
    current: 29.55,
    vR: 14.50,
    vL: 18.75,
    vC: 45.50,
    power: 0.45,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '3',
    l: '3',
    c: '2.7',
    nature: 'Inductive',
    current: 11.30,
    vR: 9.97,
    vL: 31,
    vC: 26.20,
    power: 0.29,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '3',
    l: '3',
    c: '4.7',
    nature: 'Capacitive',
    current: 15.55,
    vR: 9.97,
    vL: 31,
    vC: 45.50,
    power: 0.29,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '3',
    l: '5',
    c: '2.7',
    nature: 'Capacitive',
    current: 11.30,
    vR: 9.97,
    vL: 18.75,
    vC: 26.20,
    power: 0.29,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },

  {
    r: '3',
    l: '5',
    c: '4.7',
    nature: 'Capacitive',
    current: 26.50,
    vR: 9.97,
    vL: 18.75,
    vC: 45.50,
    power: 0.29,
    angles: { vR: null, vL: null, vC: null, current: null, power: null },
  },
];

// Exact corrected/theoretical values accepted by the Reading Verification
// section. They stay separate from the measured meter values above so that
// verification and error calculations use the supplied answer key.
export const RLC_VERIFICATION_TABLE = [
  { r: '1', l: '3', c: '2.7', nature: 'Inductive', current: 30.67, vR: 29.55, vL: 31, vC: 26.20, cosPhi: 0.97, power: 0.90 },
  { r: '1', l: '3', c: '4.7', nature: 'Capacitive', current: 32.49, vR: 29.55, vL: 31, vC: 45.50, cosPhi: 0.92, power: 0.90 },
  { r: '1', l: '5', c: '2.7', nature: 'Capacitive', current: 30.66, vR: 29.55, vL: 18.75, vC: 26.20, cosPhi: 0.97, power: 0.90 },
  { r: '1', l: '5', c: '4.7', nature: 'Capacitive', current: 39.18, vR: 29.55, vL: 18.75, vC: 45.50, cosPhi: 0.76, power: 0.90 },

  { r: '2', l: '3', c: '2.7', nature: 'Inductive', current: 16.30, vR: 14.50, vL: 31, vC: 26.20, cosPhi: 0.92, power: 0.45 },
  { r: '2', l: '3', c: '4.7', nature: 'Capacitive', current: 19.50, vR: 14.50, vL: 31, vC: 45.50, cosPhi: 0.76, power: 0.45 },
  { r: '2', l: '5', c: '2.7', nature: 'Capacitive', current: 16.29, vR: 14.50, vL: 18.75, vC: 26.20, cosPhi: 0.92, power: 0.45 },
  { r: '2', l: '5', c: '4.7', nature: 'Capacitive', current: 29.31, vR: 14.50, vL: 18.75, vC: 45.50, cosPhi: 0.51, power: 0.45 },

  { r: '3', l: '3', c: '2.7', nature: 'Inductive', current: 11.86, vR: 9.97, vL: 31, vC: 26.20, cosPhi: 0.84, power: 0.30 },
  { r: '3', l: '3', c: '4.7', nature: 'Capacitive', current: 15.97, vR: 9.97, vL: 31, vC: 45.50, cosPhi: 0.62, power: 0.30 },
  { r: '3', l: '5', c: '2.7', nature: 'Capacitive', current: 11.85, vR: 9.97, vL: 18.75, vC: 26.20, cosPhi: 0.84, power: 0.30 },
  { r: '3', l: '5', c: '4.7', nature: 'Capacitive', current: 27.10, vR: 9.97, vL: 18.75, vC: 45.50, cosPhi: 0.36, power: 0.30 },
]

// Builds the "R-L-C" lookup key used to find a case, e.g. "1-2-2.2".
export const getRlcCaseKey = (r, l, c) => `${r}-${l}-${c}`

const RLC_TABLE_BY_KEY = RLC_METER_TABLE.reduce((acc, entry) => {
  acc[getRlcCaseKey(entry.r, entry.l, entry.c)] = entry
  return acc
}, {})

const RLC_VERIFICATION_BY_KEY = RLC_VERIFICATION_TABLE.reduce((acc, entry) => {
  acc[getRlcCaseKey(entry.r, entry.l, entry.c)] = entry
  return acc
}, {})

// Looks up the rated (30 V) readings + angle overrides for a given
// resistor (kΩ) / inductor (H) / capacitor (µF) selection. Returns null if
// the combination hasn't been (fully) selected yet or isn't recognized.
export const getRlcMeterCase = (r, l, c) => {
  if (!r || !l || !c) return null
  return RLC_TABLE_BY_KEY[getRlcCaseKey(r, l, c)] || null
}

export const getRlcVerificationCase = (r, l, c) => {
  if (!r || !l || !c) return null
  return RLC_VERIFICATION_BY_KEY[getRlcCaseKey(r, l, c)] || null
}

// Computes a needle's rotation angle (in degrees) for a given meter type,
// given the case's rated (30 V) value, the current supply-voltage fraction
// (0 to 1), and an optional manual angle override (see file header above).
export const getNeedleAngle = (meterType, ratedValue, voltageFraction, angleOverrideDeg) => {
  const geometry = DIAL_GEOMETRY[meterType]
  if (!geometry) return 0

  const { maxValue, startAngle, sweepAngle } = geometry
  const clampedFraction = Math.max(0, Math.min(Number(voltageFraction) || 0, 1))

  const angleAtRatedValue = Number.isFinite(angleOverrideDeg)
    ? angleOverrideDeg
    : startAngle + Math.max(0, Math.min((Number(ratedValue) || 0) / maxValue, 1)) * sweepAngle

  return startAngle + clampedFraction * (angleAtRatedValue - startAngle)
}
