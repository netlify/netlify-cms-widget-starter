# netlify-cms-widget-\<name\>

[Check out a demo!](https://replace-with-widget-name.netlify.com/demo)

Overview of what your widget does.

## Install

As an npm package:

```shell
npm install --save netlify-cms-widget-<name>
```

```js
import <name> from 'netlify-cms-widget-<name>'

CMS.registerWidget('<name>', <name>Control, <name>Preview)
```

Via `script` tag:

```html
<script src="https://unpkg.com/netlify-cms-widget-<name>@^1.0.0"></script>

<script>
  CMS.registerWidget('<name>', <name>Control, <name>Preview)
</script>
```

## How to use

Add to your Netlify CMS configuration:

```yaml
    fields:
      - { name: <fieldname>, label: <fieldlabel>, widget: <name> }
```

## Configuration

Explain any custom configuration steps here, or omit the section if there are none.

## Support

For help with this widget, open an [issue](https://github.com/<user>/<repo>) or ask the Netlify CMS community in [Gitter](https://gitter.im/netlify/netlifycms).
