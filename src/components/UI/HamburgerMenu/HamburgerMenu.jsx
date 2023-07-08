import React from 'react'
import '../../../styles/hamburger-menu.css'
import { Link } from 'react-router-dom'

const HamburgerMenu = () => {
  return (
    <div class="nav-menu">
    <nav>
      <input type="checkbox" id="menu" name="menu" class="m-menu__checkbox"/>
      <label class="m-menu__toggle" for="menu">
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" width="1em" height="1em"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>      </label>
      <label class="m-menu__overlay" for="menu"></label>
    
      <div class="m-menu">
        <div class="m-menu__header">
          <label class="m-menu__toggle" for="menu">
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
                class="w-20 h-4 fill-current text-white"
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
          <li><label>Item 1</label></li>
          <li>
            <label class="a-label__chevron" for="item-2">Item 2</label>
            <input type="checkbox" id="item-2" name="item-2" class="m-menu__checkbox"/>
            <div class="m-menu">
              <div class="m-menu__header">
                <label class="m-menu__toggle" for="item-2">
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                    <path d="M19 12H6M12 5l-7 7 7 7"/>
                  </svg>
                </label>
                <span>Item 2</span>
              </div>
              <ul>
                <li><label>Item 2.1</label></li>
                <li><label>Item 2.2</label></li>
                <li>
                  <label class="a-label__chevron" for="item-2-3">Item 2.3</label>
                  <input type="checkbox" id="item-2-3" name="item-2" class="m-menu__checkbox"/>
                  <div class="m-menu">
                    <div class="m-menu__header">
                      <label class="m-menu__toggle" for="item-2-3">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="butt" stroke-linejoin="arcs">
                          <path d="M19 12H6M12 5l-7 7 7 7"/>
                        </svg>
                      </label>
                      <span>Item 2.3 </span>
                    </div>
                  </div>
                    <ul>
                      <li><label>Item 2.3.1</label></li>
                      <li><label>Item 2.3.2</label></li>
                      <li><label>Item 2.3.3</label></li>
                      <li><label>Item 2.3.4</label></li>
                      <li><label>Item 2.3.5</label></li>
                    </ul>                
                </li>
                <li><label>Item 2.4</label></li>
                <li><label>Item 2.5</label></li>
                <li><label>Item 2.6</label></li>
                <li><label>Item 2.7</label></li>
                <li><label>Item 2.8</label></li>
                <li><label>Item 2.9</label></li>
                </ul>
            </div>
          </li>
          <li><label>Item 3</label></li>
          <li><label>Item 4</label></li>
          <li><label>Item 5</label></li>
          <li><label>Item 6</label></li>
        </ul>  
      </div>
    </nav>
    </div>
  )
}

export default HamburgerMenu