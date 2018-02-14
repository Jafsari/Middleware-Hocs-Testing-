import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types'
import { savecomment } from '../../src/actions'

describe('Comments Reducer', () => {
  it('should handle unknown types', () =>{
    expect(commentReducer(undefined,{})).to.eql([]);
  })

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'shiba inu' }
    expect(commentReducer([],action)).to.eql(['shiba inu'])
  })
})