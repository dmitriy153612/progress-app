import { createSwitcher } from '@/js/ui/createSwitcher'
import { createInput } from '@/js/ui/createInput'

export function createFormControl({
  progressValue = 0,
  isAnimated = false,
  isHidden = false,
  inputProgressHandler,
  switcherAnimationHandler,
  switcherHideHandler,
}) {
  const inputProgress = createInput({
    labelText: 'Progress',
    value: progressValue,
    onInput: inputProgressHandler
  })

  const switcherForAnimation = createSwitcher({
    labelText: 'Animate',
    checked: isAnimated,
    onInput: switcherAnimationHandler
  })

  const switcherForHide = createSwitcher({
    labelText: 'Hide',
    checked: isHidden,
    onInput: switcherHideHandler
  })

  const form = document.createElement('form')
  form.className = 'progress-bar-control'

  form.append(inputProgress.box, switcherForAnimation.box, switcherForHide.box)

  return form
}