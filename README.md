# Progress app
## createProgressBar(options).
Функция создаёт прогресс-бар. Принимает объект настроек:
```
{
  progressValue: 75, // начальный процент заполнения прогресс-бара (от 0 до 100)
  isAnimated: true, // включить анимацию вращения по умолчанию
  isHidden: true, // скрыть прогресс-бар по умолчанию
  color: '#e2e8f0', // цвет фона кольца (непройденная часть)
  filledColor: '#2563eb',  // цвет прогресса (заполненная часть)
  backgroundColor: 'transparent', // фон прогресс-бара
  size: '100%', // размер прогресс-бара (CSS width/height)
}
```

Возвращает объект:
```
{
  box, // DOM-элемент (div), содержащий прогресс-бар
  setProgress, // функция установки прогресса от 0 до 100
  animate, // функция включения/отключения анимации (принимает true/false)
  hide, // функция показа/скрытия прогресс-бара (принимает true/false)
}
```
Прогресс-бар имеет absolute позиционирование и должен использоваться внутри контейнера с позиционированием отличным от static (например, relative, absolute, fixed или sticky).

Пример использования с кнопкой:
```
const { box, hide } = createProgressBar({ 
  progressValue: 75,
  isAnimated: true,
  isHidden: false,
  color: 'white', 
  filledColor: 'blue',
  backgroundColor: 'black',
  size: '80%',
})

const button = document.getElementById('button')
button.style.position = 'relative' // важно для корректного позиционирования

button.append(box)

hide(true)  // скрыть/показать прогресс-бар
```

## createFormControl(options).

Функция создаёт блок управления прогресс-баром, включающий в себя:
- текстовое поле для задания значения прогресса
- чекбокс для включения/отключения анимации 
- чекбокс для отображения/скрытия прогресс-бара
```
{
  progressValue = 0, // начальное значение прогресса (от 0 до 100)
  animated = false, // начальное состояние анимации (true / false)
  hidden = false, // начальное состояние видимости (true / false)
  inputProgressHandler, // обработчик изменения значения прогресса
  switcherAnimationHandler, // обработчик включения/выключения анимации
  switcherHideHandler, // обработчик отображения/скрытия прогресс-бара
}
```
Возвращает DOM-элемент (div), содержащий блок управления прогресс-баром.

Пример использования с createProgressBar:
```
const progressValue = 75
const isAnimated = false
const isHidden = false

 const { 
 	box, 
	setProgress, 
	animate, 
	hide 
	} = createProgressBar({
  progressValue,
  isAnimated,
  isHidden,
})

  const form = createFormControl({
    progressValue: 75,
    isAnimated: false,
    isHidden: false,
    inputProgressHandler: (e) => {
     const numeric = e.target.value.replace(/\D/g, '') // исключаем всё кроме цифр в строке
     const number = Math.min(Number(numeric), 100) // ограничиваем от 0 до 100
     e.target.value = number.toString()
     setProgress(number)
  },
  switcherAnimationHandler: (e) => animate(e.target.checked),
  switcherHideHandler: (e) => hide(e.target.checked),
  })

const progressBarContainer = document.getElementById('someId')
const formControlContainer = document.getElementById('someId') 

progressBarContainer.append(box)
formControlContainer.append(form)
```
## UI Компоненты.
### createInput(options)
Функция создаёт текстовое поле input c label. Принимает объект:
```
{
  labelText, // текст для label
  value = '', // начальное значение input
  type = 'text', // тип input
  name = null, // значение атрибута name
  onInput, // функция-обработчик события input
}
```
Возвращает объект:
```
{
  box,   // DOM-элемент (div), содержащий input и label
  input, // сам input-элемент
}
```
Пример использования:
```
const { box, input } = createInput({
  labelText: 'Введите значение',
  value: '42',
  type: 'number',
  name: 'progress-input',
  onInput: (e) => {
    console.log(e.target.value)
  }
})

document.getElementById('formContainer').append(box)
```

### createSwitcher(options)
Функция создаёт переключатель (checkbox) с label. Принимает объект:
```
{
  labelText,  // текст для label
  checked = false, // начальное состояние переключателя (включен / выключен)
  name = null, // значение атрибута name
  value = '', // значение переключателя
  onInput, // функция-обработчик события change
}
```
возвращает:
```
{
  box,      // DOM-элемент (div), содержащий checkbox и label
  checkbox  // сам checkbox-элемент
}
```

Пример использования:
```
const { box, checkbox } = createSwitcher({
  labelText: 'Анимация',
  checked: true,
  name: 'animation',
  onInput: (e) => {
    console.log(e.target.checked)
  }
})

document.getElementById('formContainer').append(box)
```


## Setup
**Проект запускался на версии node 23.6.0**

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:5173`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

