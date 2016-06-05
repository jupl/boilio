import React from 'react'
import test from 'ava'
import {render} from 'enzyme'
import Root from './template'

/** @test {app.components.Root} */
test('<Root>', t => {
  const wrapper = render(<Root />)
  t.is(wrapper.text(), 'Welcome')
})
