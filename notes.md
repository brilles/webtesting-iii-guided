## What to test?

- does it render?
- does it render correctly / the right things(s)?
- does it render expected output on props/state/defau;t state?
- does it handle events correctly?

- edge/corner case
- does it do the right thing when passed invalid input

/object/string/array/undefined? ===> is not a number

## Good Unit Tests

- fast
- test one thing/assumption
- **independent**
- multiple assertions are ok
- avoid unecessary assertions (undefined) ()

A > B > C === ALL PASS
B > A === IT BREAKS

## Mocking

```js
expect(f()).toBeNull())
expect(f(1)).toBeDefined())
expect(f(1)).toBeDefined(2))

function() f() {
  axios.get('apiYouDoNotControl').then({data} => {
    if(data === 2) {
      return data
    } else {
      return data * 2
    }
  })
}
```
