---
title: Learning React
date: "2019-06-10"
description: Information as I'm learning react
---

Here are two equivalent functions when displaying code.

Option 1:
```javascript
{
    languageOptions.map(
    function(l) {
        return (<li>{l}</li>);
    })
}
```

Option 2:
```javascript
{languageOptions.map(l => (<li>{l}</li>))}
```

