function Navbar(){
    return(
               
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-brand" >PIZZERIA ONLINE</button>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <button class="nav-link active" aria-current="page" >Home</button>
        </li>
        <li class="nav-item">
          <button class="nav-link" >Link</button>
        </li>
        <li class="nav-item dropdown">
          <button class="nav-link dropdown-toggle"   data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul class="dropdown-menu">
            <li><button class="dropdown-item" >Action</button></li>
            <li><button class="dropdown-item" >Another action</button></li>
            <li><hr class="dropdown-divider"/></li>
            <li><button class="dropdown-item" >Something else here</button></li>
          </ul>
        </li>
        <li class="nav-item">

        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    )

}

export default Navbar