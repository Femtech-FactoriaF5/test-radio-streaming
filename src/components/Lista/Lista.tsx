import { p } from 'msw/lib/glossary-dc3fd077';
import React from 'react'
import ListaItem, { Radio } from './ListaItem';

type propsType = {
  lista: Array<Radio>;
  init:boolean;
}
export default function Lista({ lista,init }: propsType) {
  return (
    <section aria-label='list-section'>
{init
  ?<ul></ul>:

  lista.length>0?
      <ul>
        {lista.map((radio: Radio) => <ListaItem key={radio.changeuuid} item={radio} />)}
      </ul>:
      <p aria-label='not-found-text'>"No se han encontrado emisoras para esta búsqueda"</p>

      }
    </section>
  )
}
