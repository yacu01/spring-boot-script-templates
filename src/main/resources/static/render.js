/**
 * Render function which accepts a template string and replaces elements from the given model.
 *
 * @param template The template to render.
 * @param model The model to get values from.
 * @returns {void|string|XML|*}
 */
function render(template, model) {
  var items = '';
  model.items.forEach(function(item) {
    items += '<li>' + item + '</li>';
  });

  return template.replace("{title}", model.title).replace("{items}", items);
}