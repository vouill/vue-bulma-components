import vbc, { bulmaComponentGenerator } from 'src/plugin/plugin'

describe('Bulma component generator ', () => {
  it('should access bulma componentized plugin', () => {
    expect(vbc).toMatchSnapshot()
  })
  it('should access the bulma component generator func ', () => {
    expect(bulmaComponentGenerator).toMatchSnapshot()
  })
})
