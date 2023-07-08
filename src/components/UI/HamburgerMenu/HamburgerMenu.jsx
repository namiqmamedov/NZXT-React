import React from 'react'
import '../../../styles/hamburger-menu.css'
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";

const HamburgerMenu = () => {
  return (
    <div className="nav-menu">
    <nav>
      <input type="checkbox" id="menu" name="menu" className="m-menu__checkbox"/>
      <label className="m-menu__toggle" for="menu">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>      </label>
      <label className="m-menu__overlay" for="menu"></label>
    
      <div className="m-menu">
        <div className="m-menu__header">
          <label className="m-menu__toggle" for="menu">
            <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </label>
          <div className="nav-logo">
            <Link to={""}>
              <svg
                viewBox="0 0 94 24"
                width="1em"
                height="1em"
                className="w-20 h-4 fill-current text-white"
              >
                <path
                  d="M6.907 0l8.227 11.906-.008-.201V0h6.944v24h-6.44L6.944 11.363V24H0V0h6.907zM94 0v6.322h-6.314v17.677h-7.374V6.322H74V.001h20zM56.406 0l3.902 6.16L64.466 0h7.623l-7.753 11.883 7.885 12.116h-8.082l-3.937-6.1-3.875 6.1h-7.894l7.735-11.896L48.32.001h8.086zM46.02 0l-9.49 17.914h9.29v6.085H25.743l9.319-17.952h-8.805V0h19.764z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
        <ul>
          <li><label>Gaming PCs</label></li>
          <li>
            <label className="a-label__chevron" for="item-2">Components</label>
            <input type="checkbox" id="item-2" name="item-2" className="m-menu__checkbox"/>
            <div className="m-menu">
              <div className="m-menu__header">
                <label className="m-menu__toggle" for="item-2">
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                    <path d="M19 12H6M12 5l-7 7 7 7"/>
                  </svg>
                </label>
                <div className="nav-logo">
                    <Link to={""}>
                    <svg
                        viewBox="0 0 94 24"
                        width="1em"
                        height="1em"
                        className="w-20 h-4 fill-current text-white"
                    >
                        <path
                        d="M6.907 0l8.227 11.906-.008-.201V0h6.944v24h-6.44L6.944 11.363V24H0V0h6.907zM94 0v6.322h-6.314v17.677h-7.374V6.322H74V.001h20zM56.406 0l3.902 6.16L64.466 0h7.623l-7.753 11.883 7.885 12.116h-8.082l-3.937-6.1-3.875 6.1h-7.894l7.735-11.896L48.32.001h8.086zM46.02 0l-9.49 17.914h9.29v6.085H25.743l9.319-17.952h-8.805V0h19.764z"
                        fill-rule="evenodd"
                        ></path>
                    </svg>
                    </Link>
                </div>
              </div>
              <ul>
                <li><label>Build A Custom PC</label></li>
                         <li>
            <label className="a-label__chevron" for="item-21">Prebuilt Gaming PCs</label>
            <input type="checkbox" id="item-21" name="item-21" className="m-menu__checkbox"/>
            <div className="m-menu">
              <div className="m-menu__header">
                <label className="m-menu__toggle" for="item-21">
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                    <path d="M19 12H6M12 5l-7 7 7 7"/>
                  </svg>
                </label>
                <div className="nav-logo">
                    <Link to={""}>
                    <svg
                        viewBox="0 0 94 24"
                        width="1em"
                        height="1em"
                        className="w-20 h-4 fill-current text-white"
                    >
                        <path
                        d="M6.907 0l8.227 11.906-.008-.201V0h6.944v24h-6.44L6.944 11.363V24H0V0h6.907zM94 0v6.322h-6.314v17.677h-7.374V6.322H74V.001h20zM56.406 0l3.902 6.16L64.466 0h7.623l-7.753 11.883 7.885 12.116h-8.082l-3.937-6.1-3.875 6.1h-7.894l7.735-11.896L48.32.001h8.086zM46.02 0l-9.49 17.914h9.29v6.085H25.743l9.319-17.952h-8.805V0h19.764z"
                        fill-rule="evenodd"
                        ></path>
                    </svg>
                    </Link>
                </div>
              </div>
              <ul>
                <li>
                  <label>
                  Player: One
                  </label>
                </li>
                <li><label>Player: Two</label></li>
                <li className='support'>
          <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .084C5.42.084.087 5.418.087 11.997.087 18.577 5.42 23.91 12 23.91s11.913-5.334 11.913-11.913C23.913 5.417 18.579.084 12 .084zm0 1.5c5.75 0 10.413 4.662 10.413 10.413S17.75 22.41 12 22.41 1.587 17.748 1.587 11.997C1.587 6.247 6.249 1.584 12 1.584z"></path><path d="M8.044 8.4a4.099 4.099 0 017.965 1.365c0 1.28-.774 2.313-2.008 3.135-.405.27-.834.499-1.263.69l-.283.12-.222.085-.085.03a.75.75 0 01-.475-1.423l.136-.05.2-.08.12-.053a7.05 7.05 0 001.04-.567c.86-.573 1.34-1.214 1.34-1.889a2.599 2.599 0 00-5.05-.866.75.75 0 11-1.415-.498zm3.966 8.429a.75.75 0 01.103 1.493l-.113.007a.75.75 0 01-.102-1.494l.113-.006z"></path></svg>
            <label>Support</label>
                </li>
                <li>
                  <div className='nav-layout'>
                      <div>
                      <Link to={'../account/setting'}>
                          Account
                          </Link>
                      </div>
                      <div>
                      <Link to={'../account/setting'}>
                          Saved Builds
                          </Link>
                      </div>
                      <div>
                      <Link to={'../account/setting'}>
                          Sign Out
                          </Link>
                      </div>
                  </div>
                </li>
            </ul>
            </div>
          </li>
                <li className='support'>
          <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .084C5.42.084.087 5.418.087 11.997.087 18.577 5.42 23.91 12 23.91s11.913-5.334 11.913-11.913C23.913 5.417 18.579.084 12 .084zm0 1.5c5.75 0 10.413 4.662 10.413 10.413S17.75 22.41 12 22.41 1.587 17.748 1.587 11.997C1.587 6.247 6.249 1.584 12 1.584z"></path><path d="M8.044 8.4a4.099 4.099 0 017.965 1.365c0 1.28-.774 2.313-2.008 3.135-.405.27-.834.499-1.263.69l-.283.12-.222.085-.085.03a.75.75 0 01-.475-1.423l.136-.05.2-.08.12-.053a7.05 7.05 0 001.04-.567c.86-.573 1.34-1.214 1.34-1.889a2.599 2.599 0 00-5.05-.866.75.75 0 11-1.415-.498zm3.966 8.429a.75.75 0 01.103 1.493l-.113.007a.75.75 0 01-.102-1.494l.113-.006z"></path></svg>
            <label>Support</label>
                </li>
                <li>
                  <div className='nav-layout'>
                      <div>
                      <Link to={'../account/setting'}>
                          Account
                          </Link>
                      </div>
                      <div>
                      <Link to={'../account/setting'}>
                          Saved Builds
                          </Link>
                      </div>
                      <div>
                      <Link to={'../account/setting'}>
                          Sign Out
                          </Link>
                      </div>
                  </div>
                </li>
            </ul>
            </div>
          </li>
          <li><label>Monitors</label></li>
          <li><label>Peripherals</label></li>
          <li><label>Software</label></li>
          <li><label>Community</label></li>
          <li className='support'>
          <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .084C5.42.084.087 5.418.087 11.997.087 18.577 5.42 23.91 12 23.91s11.913-5.334 11.913-11.913C23.913 5.417 18.579.084 12 .084zm0 1.5c5.75 0 10.413 4.662 10.413 10.413S17.75 22.41 12 22.41 1.587 17.748 1.587 11.997C1.587 6.247 6.249 1.584 12 1.584z"></path><path d="M8.044 8.4a4.099 4.099 0 017.965 1.365c0 1.28-.774 2.313-2.008 3.135-.405.27-.834.499-1.263.69l-.283.12-.222.085-.085.03a.75.75 0 01-.475-1.423l.136-.05.2-.08.12-.053a7.05 7.05 0 001.04-.567c.86-.573 1.34-1.214 1.34-1.889a2.599 2.599 0 00-5.05-.866.75.75 0 11-1.415-.498zm3.966 8.429a.75.75 0 01.103 1.493l-.113.007a.75.75 0 01-.102-1.494l.113-.006z"></path></svg>
            <label>Support</label>
          </li>
          <li>
                  <div className='nav-layout'>
                      <div>
                      <Link to={'../account/setting'}>
                          Account
                          </Link>
                      </div>
                      <div>
                      <Link to={'../account/setting'}>
                          Saved Builds
                          </Link>
                      </div>
                      <div>
                      <Link to={'../account/setting'}>
                          Sign Out
                          </Link>
                      </div>
                  </div>
                </li>
        </ul>  
      </div>
      <div className="nav-logo">
            <Link to={""}>
              <svg
                viewBox="0 0 94 24"
                width="1em"
                height="1em"
                class="w-20 h-4 fill-current text-white"
              >
                <path
                  d="M6.907 0l8.227 11.906-.008-.201V0h6.944v24h-6.44L6.944 11.363V24H0V0h6.907zM94 0v6.322h-6.314v17.677h-7.374V6.322H74V.001h20zM56.406 0l3.902 6.16L64.466 0h7.623l-7.753 11.883 7.885 12.116h-8.082l-3.937-6.1-3.875 6.1h-7.894l7.735-11.896L48.32.001h8.086zM46.02 0l-9.49 17.914h9.29v6.085H25.743l9.319-17.952h-8.805V0h19.764z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </Link>
      </div>
      <div className="nav__end">
          <Link className="search__item">
            <GoSearch />
          </Link>
          <Link className="cart__item" to={"cart"}>
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
            >
              <path d="M9.69 20.142a1.926 1.926 0 100 3.853 1.926 1.926 0 000-3.853zm0 1.5a.426.426 0 110 .853.426.426 0 010-.853zm9.412-1.5a1.927 1.927 0 100 3.853 1.927 1.927 0 000-3.853zm0 1.5a.426.426 0 110 .853.426.426 0 010-.853zM4.396.141c.317 0 .596.2.703.49l.03.1.905 4.158.045-.015a.745.745 0 01.097-.02l.102-.007H23.22a.75.75 0 01.749.792l-.013.099-1.884 9.892a3.1 3.1 0 01-2.903 2.48l-.185.002H9.94a3.101 3.101 0 01-3.058-2.293l-.042-.18L3.79 1.641H.866A.75.75 0 01.123.993L.116.891A.75.75 0 01.765.148L.866.141h3.53zm17.916 6.206H6.352l1.955 8.983c.145.71.747 1.23 1.472 1.279l.146.003H19a1.602 1.602 0 001.566-1.135l.035-.138 1.711-8.992z"></path>
            </svg>
          </Link>
      </div>
    </nav>
    </div>
  )
}

export default HamburgerMenu