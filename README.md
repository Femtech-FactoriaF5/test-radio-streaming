# test-radio-streaming

## Introducción

Vamos a construir una aplicación para seleccionar y buscar emisoras de radio en streaming.

## Estructuras para practicar:
    - `describe` (test suites) y `test` (tests unitarios).
    - beforeEach: utilízalo para renderizar la página.
    - screen.getByText(), screen.getByPlaceholderTExt, screen.getByRole() o scren.getByLabelText(). Para encontrar el elemento que queremos testear.
    - userEvent.type() o userEvent.click() para testear los eventos que se disparen.
    - jest.fn() para mockear los listeners que asociamos a los eventos.
    - matchers: toBeInTheDocument(), toHaveBeenCalledTimes(),...
    
## Tests
   
### Describe: El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA".
   _Test:_<br>
   - El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA" <br>
      
### Describe: Debemos poder buscar radios por nombre
   _Tests:_<br>
   - La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio"
   - La aplicación debe tener un botón de búsqueda => Texto "Buscar"
   - Cuando hacemos clic en el botón buscar, se debe ejecutar la función de búsqueda una sola vez
      
### Describe: Listado de emisoras
   _Tests:_ 
   - Debe existir un listado de emisoras
   - El listado debe inicializar vacío
   - Cuando se hace una búsqueda válida, el listado debe mostrar al menos un resultado
   - Cuando hacemos una búsqueda inválida (no existe), el listado debe mostrar un mensaje "No se han encontrado emisoras para esta búsqueda"
