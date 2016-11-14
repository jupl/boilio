import {handleActions} from 'redux-actions'
import {previousColor, nextColor, autoNextColor} from './actions'
import {COLORS} from './config'

/** Reducer that handles color related actions */
export default handleActions({
  [previousColor]: setPreviousColor,
  [nextColor]: setNextColor,
  [autoNextColor]: setNextColor,
}, COLORS[0])

/**
 * Update state to go to the previous color. If past the first color, go to the
 * end of the color list.
 * @param {string} color - Current color state
 * @return {string} Previous color state
 */
function setPreviousColor(color) {
  const oldIndex = COLORS.indexOf(color)
  const newIndex = (oldIndex + COLORS.length - 1) % COLORS.length
  return COLORS[newIndex]
}

/**
 * Update state to go to the next color. If past the last color, go to the
 * beginning of the color list.
 * @param {string} color - Current color state
 * @return {string} Next color state
 */
function setNextColor(color) {
  const oldIndex = COLORS.indexOf(color)
  const newIndex = (oldIndex + 1) % COLORS.length
  return COLORS[newIndex]
}
