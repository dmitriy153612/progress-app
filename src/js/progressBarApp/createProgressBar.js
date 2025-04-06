export function createProgressBar({ 
  progressValue = 75,
  isAnimated = true,
  isHidden = true,
  color = '#e2e8f0', 
  filledColor = '#2563eb',
  backgroundColor = 'transparent',
  size = '100%',
} = {}) {
  const CIRCLE_LENGTH = 566
  

  const svgNS = 'http://www.w3.org/2000/svg'
  const svg = document.createElementNS(svgNS, 'svg')
  svg.setAttribute('viewBox', '-25 -25 250 250')
  svg.style.transform = 'rotate(-90deg)'

  const circle = (circleColor) => {
    const c = document.createElementNS(svgNS, 'circle')
    c.setAttribute('r', '90')
    c.setAttribute('cx', '100')
    c.setAttribute('cy', '100')
    c.setAttribute('fill', 'transparent')
    c.setAttribute('stroke', circleColor)
    c.setAttribute('stroke-width', '16px')
    return c
  }

  const bg = circle(color)
  const progress = circle(filledColor)
  progress.setAttribute('stroke-dasharray', `${CIRCLE_LENGTH}px`)

  svg.append(bg, progress)
  svg.style.width = size
  svg.style.height = size

  const box = document.createElement('div')
  box.className = 'progress-bar'
  box.style.backgroundColor = backgroundColor
  box.append(svg)

  const setProgress = (value) => {
    const val = Math.max(0, Math.min(100, Number(value)))
    const offset = `${Math.round(CIRCLE_LENGTH - (val / 100 * CIRCLE_LENGTH))}px`
    progress.style.strokeDashoffset = offset
  }

  const animate = (isAnimated) => {
    box.classList.toggle('progress-bar--animated', isAnimated)
  }

  const hide = (isHidden) => {
    box.classList.toggle('progress-bar--hidden', isHidden)
  }

  setProgress(progressValue)
  animate(isAnimated)
  hide(isHidden)

  return { box, setProgress, animate, hide }
}