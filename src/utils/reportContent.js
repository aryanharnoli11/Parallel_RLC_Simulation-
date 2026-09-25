// Shared by the live experiment and its report. All markup here is static.
export const OBSERVATION_COLUMNS = [
  { key: 'r', label: 'R', unit: 'kΩ', digits: null },
  { key: 'l', label: 'L', unit: 'H', digits: null },
  { key: 'c', label: 'C', unit: 'µF', digits: null },
  { key: 'nature', label: 'Nature', unit: '', digits: null },
  { key: 'current', label: 'I', unit: 'mA', digits: 2 },
  { key: 'vR', label: 'I<sub>R</sub>', unit: 'mA', digits: 2 },
  { key: 'vL', label: 'I<sub>L</sub>', unit: 'mA', digits: 2 },
  { key: 'vC', label: 'I<sub>C</sub>', unit: 'mA', digits: 2 },
  { key: 'power', label: 'Power', unit: 'W', digits: 2 },
]

export const formatObservationValue = (row, { key, digits }) => {
  const value = row?.[key]
  if (value === undefined || value === null || value === '') return ''
  return digits === null ? String(value) : Number(value).toFixed(digits)
}

export const RLC_EQUATIONS = [
  { label: 'Resistive current', html: 'I<sub>R</sub><span class="equation-equals">=</span><span class="equation-fraction"><i>V</i><i>R</i></span>' },
  { label: 'Inductive current', html: 'I<sub>L</sub><span class="equation-equals">=</span><span class="equation-fraction"><i>V</i><i>X<sub>L</sub></i></span>' },
  { label: 'Capacitive current', html: 'I<sub>C</sub><span class="equation-equals">=</span><span class="equation-fraction"><i>V</i><i>X<sub>C</sub></i></span>' },
  { label: 'Inductive reactance', html: 'X<sub>L</sub><span class="equation-equals">=</span>2πfL' },
  { label: 'Capacitive reactance', html: 'X<sub>C</sub><span class="equation-equals">=</span><span class="equation-fraction"><i>1</i><i>2πf C</i></span>' },
  { label: 'Impedance', html: 'Z<span class="equation-equals">=</span><math display="inline" aria-label="one divided by the square root of open parenthesis one over R close parenthesis squared plus open parenthesis one over X L minus one over X C close parenthesis squared"><mfrac><mn>1</mn><msqrt><mrow><msup><mrow><mo>(</mo><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mfrac><mn>1</mn><msub><mi>X</mi><mi>L</mi></msub></mfrac><mo>−</mo><mfrac><mn>1</mn><msub><mi>X</mi><mi>C</mi></msub></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mfrac></math>' },
  { label: 'Circuit current', html: 'I<span class="equation-equals">=</span>√(I<sub>R</sub>² + (I<sub>C</sub> − I<sub>L</sub>)²)' },
  { label: 'Power factor', html: 'cos (φ)<span class="equation-equals">=</span><span class="equation-fraction"><i>Z</i><i>R</i></span>' },
  { label: 'Active power', html: 'P<span class="equation-equals">=</span>VI cosφ' },
  { label: 'Error Analysis', html: '% Error<span class="equation-equals">=</span><span class="equation-fraction"><i>|Measured Value − True Value|</i><i>True Value</i></span> × 100', note: 'True Value = Theoretical Value' },
]

 
