import '@/style/main.scss'
import { createProgressBar } from '@/js/progressBarApp/createProgressBar'
import { createFormControl } from '@/js/progressBarApp/createFormControl'

(function () {
  const progressValue = 75
  const isAnimated = false
  const isHidden = false

  const { box: progressBar, setProgress, animate, hide } = createProgressBar({
    progressValue,
    isAnimated,
    isHidden,
  })

  const form = createFormControl({
    progressValue,
    isAnimated,
    isHidden,
    inputProgressHandler: (e) => {
      const validNumericString = getNumericStringFrom0To100(e.target.value)
      e.target.value = validNumericString
      setProgress(validNumericString)
    },
    switcherAnimationHandler: (e) => animate(e.target.checked),
    switcherHideHandler: (e) => hide(e.target.checked),
  })

  document.getElementById('progress-bar').append(progressBar)
  document.getElementById('control').append(form)
})();

function getNumericStringFrom0To100(str) {
  const numeric = str.replace(/\D/g, '')
  const number = Math.min(Number(numeric), 100)
  return number.toString()
}
