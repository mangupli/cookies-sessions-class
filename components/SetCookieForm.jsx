const React = require('react');

function SetCookieForm() {
  return (
    <form id="form-cookie" style={{ marginTop: '30px' }}>
      <div className="mb-3">
        <label className="form-label">
          Имя куки
          <input type="text" className="form-control" name="cookieName" />
        </label>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Значение куки
          <input type="text" className="form-control" name="cookieValue" />
        </label>
      </div>
      <button type="submit" className="btn btn-outline-warning">
        Установить куку
      </button>
      <button
        type="button"
        className="btn btn-outline-success"
        id="send-request-btn"
        style={{ marginTop: '30px', display: 'block' }}
      >
        Запомни меня на сервере
      </button>
    </form>
  );
}

export default SetCookieForm;
