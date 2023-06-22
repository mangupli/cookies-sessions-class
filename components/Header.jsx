const React = require('react');

function Header({ user }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
        <div className="container">
          <a className="navbar-brand" href="/">
            GoodBooks
          </a>
          <div className="navbar-nav">
            <div className="nav-item nav-link">
              {user ? `Привет, ${user.login}!` : 'Привет, незнакомец!'}
              {/*  {'Привет, дорогой пользователь!'} */}
            </div>
            <form className="form-inline">
              {user ? (
                <a className="btn btn-outline-secondary" href="/auth/logout">
                  Выйти
                </a>
              ) : (
                <>
                  {' '}
                  <a
                    className="btn btn-sm btn-outline-primary"
                    href="/auth/register"
                  >
                    Регистрация
                  </a>
                  <a
                    className="btn btn-sm btn-outline-primary"
                    href="/auth/login"
                  >
                    Авторизация
                  </a>
                </>
              )}
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

module.exports = Header;
