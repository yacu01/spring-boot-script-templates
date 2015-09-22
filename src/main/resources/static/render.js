/**
 * Render function which accepts a template string and replaces elements from the given model.
 *
 * @param template The template to render.
 * @param model The model to get values from.
 * @returns {void|string|XML|*}
 */
function render(template, model) {
  return template.replace("{title}", model.title);
}