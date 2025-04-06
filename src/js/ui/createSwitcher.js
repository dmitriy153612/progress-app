export function createSwitcher({ labelText, checked = false, name = null, value = '', onInput }) {
  const id = crypto.randomUUID()

  const checkbox = document.createElement('input')
  checkbox.className = 'switcher__checkbox'
  checkbox.setAttribute('type', 'checkbox')
  checkbox.id = id
  if (name !== null) checkbox.name = name
  checkbox.checked = checked

  const label = document.createElement('label')
  label.className = 'switcher__label'
  label.setAttribute('for', id)
  label.textContent = labelText

  const box = document.createElement('div')
  box.className = 'switcher'
  box.append(checkbox, label)

  checkbox.addEventListener('change', onInput)

  return { box, checkbox }
}