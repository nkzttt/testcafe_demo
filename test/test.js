const assert = require('assert');
const {Selector} = require('testcafe');

fixture('hello testcafe')
  .page('http://localhost:3001/');

test('h1 must be only one', async t => {
  const count = await Selector('h1').count;
  assert(count === 1);
});

test('text of h1 must be "koa2 title"', async t => {
  const h1 = await Selector('h1')();
  assert(h1.innerText === 'koa2 title');
});

test('load index.js', async t => {
  const scripts = Selector('script');
  const count = await scripts.count;
  const loadedScripts = [];

  for (let i=0; i<count; i++) {
    const script = await scripts.nth(i)();
    loadedScripts.push(script.attributes.src);
  }

  assert(loadedScripts.includes('/js/index.js'));
});
