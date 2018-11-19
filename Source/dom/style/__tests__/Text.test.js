/* globals expect, test */
import { Text, Rectangle } from '../..'
import { VerticalTextAlignmentMap, TextAlignmentMap } from '../Text'

test('should change the text alignment', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to left
  expect(text.style.alignment).toBe(Text.Alignment.left)

  Object.keys(Text.Alignment).forEach(key => {
    const result = key === 'natural' ? Text.Alignment.left : Text.Alignment[key]

    // test setting by name
    text.style.alignment = key
    expect(text.style.alignment).toBe(result)

    // test setting by value
    text.style.alignment = TextAlignmentMap[key]
    expect(text.style.alignment).toBe(result)
  })
})

test('should change the text vertical alignment', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to top
  expect(text.style.verticalAlignment).toBe(Text.VerticalAlignment.top)

  Object.keys(Text.VerticalAlignment).forEach(key => {
    // test setting by name
    text.style.verticalAlignment = key
    expect(text.style.verticalAlignment).toBe(Text.VerticalAlignment[key])

    // test setting by value
    text.style.verticalAlignment = VerticalTextAlignmentMap[key]
    expect(text.style.verticalAlignment).toBe(Text.VerticalAlignment[key])
  })
})

test('should change the kerning', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to null (auto)
  expect(text.style.kerning).toBe(null)

  text.style.kerning = 1
  expect(text.style.kerning).toBe(1)

  text.style.kerning = null
  expect(text.style.kerning).toBe(null)
})

test('should change the line height', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to null (auto)
  expect(text.style.lineHeight).toBe(null)

  text.style.lineHeight = 10
  expect(text.style.lineHeight).toBe(10)
  expect(text.style.paragraphSpacing).toBe(0)

  text.style.lineHeight = null
  expect(text.style.lineHeight).toBe(null)

  text.style.lineHeight = 0
  expect(text.style.lineHeight).toBe(null)
})

test('should change the paragraph spacing', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 0
  expect(text.style.paragraphSpacing).toBe(0)

  text.style.paragraphSpacing = 10
  expect(text.style.paragraphSpacing).toBe(10)
  expect(text.style.lineHeight).toBe(null)

  text.style.paragraphSpacing = 0
  expect(text.style.paragraphSpacing).toBe(0)
})

test('should change the text color', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to black
  expect(text.style.textColor).toBe('#000000ff')

  text.style.textColor = '#123'
  expect(text.style.textColor).toBe('#112233ff')
})

test('should change the font size', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 12
  expect(text.style.fontSize).toBe(12)

  text.style.fontSize = 40
  expect(text.style.fontSize).toBe(40)
})

test('should change the text transform', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 'none'
  expect(text.style.textTransform).toBe('none')

  text.style.textTransform = 'uppercase'
  expect(text.style.textTransform).toBe('uppercase')

  text.style.textTransform = 'lowercase'
  expect(text.style.textTransform).toBe('lowercase')

  text.style.textTransform = 'none'
  expect(text.style.textTransform).toBe('none')
})

test('should change the font family', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 'Helvetica'
  expect(text.style.fontFamily).toBe('Helvetica')

  text.style.fontFamily = 'Arial'
  expect(text.style.fontFamily).toBe('Arial')

  // non existent font will keep the previous one
  text.style.fontFamily = 'non-existent-font-name'
  expect(text.style.fontFamily).toBe('Arial')
})

test('should change the font weight', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to 5
  expect(text.style.fontWeight).toBe(5)

  text.style.fontWeight = 9
  expect(text.style.fontFamily).toBe('Helvetica')
  expect(text.style.fontWeight).toBe(9)

  text.style.fontWeight = 5
  expect(text.style.fontFamily).toBe('Helvetica')
  expect(text.style.fontWeight).toBe(5)

  // non existent font weight will pick the closest one
  text.style.fontWeight = 12
  expect(text.style.fontFamily).toBe('Helvetica')
  expect(text.style.fontWeight).toBe(9)
})

test('should change the font style', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to undefined
  expect(text.style.fontStyle).toBe(undefined)

  text.style.fontStyle = 'italic'
  expect(text.style.fontStyle).toBe('italic')

  text.style.fontStyle = 'normal'
  expect(text.style.fontStyle).toBe(undefined)
})

// TODO: can't seem to find a font with small caps
// test('should change the font variant', () => {
//   const text = new Text({
//     text: 'blah',
//     frame: new Rectangle(10, 10, 1000, 1000),
//     style: {
//       fontFamily: 'SF Compact Display',
//     },
//   })

//   expect(text.style.fontFamily).toBe('SF Compact Display')

//   // default to undefined
//   expect(text.style.fontVariant).toBe(undefined)

//   text.style.fontVariant = 'small-caps'
//   expect(text.style.fontVariant).toBe('small-caps')

//   text.style.fontVariant = 'normal'
//   expect(text.style.fontVariant).toBe(undefined)
// })

test('should change the font stretch', () => {
  const text = new Text({
    text: 'blah',
    frame: new Rectangle(10, 10, 1000, 1000),
  })

  // default to undefined
  expect(text.style.fontStretch).toBe(undefined)

  // but not all font families tho
  text.style.fontFamily = 'Helvetica Neue'
  text.style.fontWeight = 9
  text.style.fontStretch = 'condensed'
  expect(text.style.fontStretch).toBe('condensed')

  text.style.fontStretch = 'normal'
  expect(text.style.fontStretch).toBe(undefined)
})
