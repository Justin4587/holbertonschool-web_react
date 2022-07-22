{
  return (
    <AppContext.Consumer>
      {({ user }) => (
        <div className="App-footer">
          <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </div>
      )}
    </AppContext.Consumer>
  )
}