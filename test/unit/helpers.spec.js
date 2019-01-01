import {
  camelCaseToDash,
  isBulmaAttribute,
  toPascalCase
} from 'src/plugin/helpers'

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
    expect(camelCaseToDash('is-128x128')).toEqual('is-128x128')
  })

  it('should find Bulma class', () => {
    expect(isBulmaAttribute('is')).toEqual(false)
    expect(isBulmaAttribute('has')).toEqual(false)
    expect(isBulmaAttribute('fa')).toEqual(false)
    expect(isBulmaAttribute('is-')).toEqual(false)
    expect(isBulmaAttribute('has-')).toEqual(false)
    expect(isBulmaAttribute('fa-')).toEqual(false)
    expect(isBulmaAttribute('is-primary')).toEqual(true)
    expect(isBulmaAttribute('has-text-centered')).toEqual(true)
    expect(isBulmaAttribute('fa-home')).toEqual(true)
  })

  it('should convert string to PascalCase', () => {
    expect(toPascalCase('string')).toEqual('String')
    expect(toPascalCase('camelCase')).toEqual('CamelCase')
    expect(toPascalCase('param-case')).toEqual('ParamCase')
    expect(toPascalCase('PascalCase')).toEqual('PascalCase')
    expect(toPascalCase('UPPER_CASE')).toEqual('UpperCase')
    expect(toPascalCase('snake_case')).toEqual('SnakeCase')
    expect(toPascalCase('sentence case')).toEqual('SentenceCase')
    expect(toPascalCase('Title Case')).toEqual('TitleCase')
  })
})
