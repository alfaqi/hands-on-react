export default ({ cast, onChoice }) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <details role='list'>
            <summary aria-haspopup='listbox' role='link'>cast</summary>
            <ul role='listbox'>
              {
                cast.map(member => (
                  <li key={member.id}>
                    <a onClick={() => { onChoice(member) }}>
                      {member.name}
                    </a>
                  </li>
                ))}
            </ul>
          </details>
        </li>
      </ul>
      <ul>
        <li><a href="#"><img style={{ width: '50px' }} src='images/logo_bug_stargazers.svg' alt='stargazer logo'></img></a>
        </li>
      </ul>
    </nav>
  )
}