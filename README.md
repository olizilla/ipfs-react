# ipfs-react

> An exploration into using [rebass], [styled-system] & [styled-components] to build a component library.

We want:

- Published, reusable components.
- i18n for all text.
- Component scoped styling.
- Shared color palette, type scale and spacing scale baked in.

**[styled-components]** - Let's us write component scoped css. You extend an element or react component with some css, it creates a unique class name for those styles and makes them exist in the parent page.

```jsx
const FancyBox = styled.div`
  border: 1px dashed hotpink;
`

export Aside = () => (
  <FancyBox>ooh la la</FancyBox>
)
```

**[styled-system]** - Customise styling from react props. Values to props are checked against a theme object, so you can write things like:

```jsx
<Text color='navy'>Hello</Text>
```
and in your theme.json

```json
{
  "colors": {
    "navy": "#0b3a53",
    "navy-muted": "#244e66",
    "aqua": "#69c4cd",
    ...
```

and have it replace the value of `navy` with the value `#0b3a53`. It also allows for [responsive values](https://jxnblk.com/styled-system/responsive-styles) like:

```jsx
// responsive width
<Box width={[1, 1/2, 1/4]} />

// responsive font size
<Box fontSize={[ 1, 2, 3, 4 ]} />
```

Which would give your component a width of `100%`, `50%`, or `%25` at the first three breakpoints defined in your theme json. 

**[rebass]** gives us a handul of props driven styling components built using `styled-components` and `styled-system`, like `Box` for generic spacing, `Flex` for simple grids using flexbox.

```jsx
<Box
  p={5}
  fontSize={4}
  width={[ 1, 1, 1/2 ]}
  color='white'
  bg='magenta'>
  Box
</Box>
```

[rebass]: https://github.com/rebassjs/rebass
[styled-system]: https://github.com/jxnblk/styled-system
[styled-components]: https://github.com/styled-components/styled-components
