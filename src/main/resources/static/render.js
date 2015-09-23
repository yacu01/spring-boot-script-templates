/**
 * Converts a model with possible Java types to JSON object.
 *
 * @param model A model possibly containing Java types.
 * @returns {{}}
 */
function toJsonObject(model) {
  var o = {};
  for(var k in model) {
    if(model[k] instanceof Java.type("java.lang.Iterable")) {
      o[k] = Java.from(model[k]);
    } else {
      o[k] = model[k];
    }
  }
  return o;
}

/**
 * Render function which accepts a template string and replaces elements from the given model.
 *
 * @param template The template to render.
 * @param model The model to get values from.
 * @returns {void|string|XML|*}
 */
function render(template, model) {
  var html = ejs.render(template, toJsonObject(model));
  return ejs.render(html);
}