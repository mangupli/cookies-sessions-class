const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponentMethod(component, props, options = { doctype: true }) {
  const element = React.createElement(component, {
    // отсюда в объект попадёт ключ user (мы положили его в res.locals  в мидлваркt getUser)
    // this - это res (так как renderComponentMethod - это метод объекта res)
    ...this.locals,
    // передаётся из роута
    ...props,
  });

  const html = ReactDOMServer.renderToStaticMarkup(element);
  return options.doctype ? `<!DOCTYPE html>${html}` : html;
}

// миддлварка запускается при каждом запросе
function renderComponent(req, res, next) {
  // она добавляет метод renderComponent в каждый объект res
  res.renderComponent = renderComponentMethod;
  // затем передаёт запрос следующим миддлваркам и роутам
  next();
}

module.exports = renderComponent;
