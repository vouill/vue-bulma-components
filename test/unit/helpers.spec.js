import {camelCaseToDash} from 'src/plugin/helpers'

describe('Helpers', () => {
  it('should convert camel to dash case', () => {
    expect(camelCaseToDash('IsPrimary')).toEqual('is-primary')
    expect(camelCaseToDash('isPrimary')).toEqual('is-primary')
    expect(camelCaseToDash('Isprimary')).not.toEqual('is-primary')
    expect(camelCaseToDash('isprimary')).not.toEqual('is-primary')
    expect(camelCaseToDash('is-primary')).toEqual('is-primary')
    expect(camelCaseToDash('is-')).toEqual('is-')
    expect(camelCaseToDash('is2')).toEqual('is-2')
    expect(camelCaseToDash('Is2')).toEqual('is-2')
  })
})
