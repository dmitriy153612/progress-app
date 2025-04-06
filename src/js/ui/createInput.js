export function createInput({ labelText, value = '', type = 'text', name = null, onInput }) {
  const id = crypto.randomUUID()

  const input = document.createElement('input')
  input.type = type
  if (name !== null) input.name = name
  input.id = id
  input.value = value
  input.className = 'input-box__input'

  const label = document.createElement('label')
  label.textContent = labelText
  label.setAttribute('for', id)
  label.className = 'input-box__label'

  const box = document.createElement('div')
  box.className = 'input-box'
  box.append(input, label)

  input.addEventListener('input', onInput)

  return { box, input }
}